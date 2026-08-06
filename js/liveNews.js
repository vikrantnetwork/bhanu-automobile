// Real-Time Automotive News Feed & Live Ticker Dispatcher
// Integrated with Supabase cloud database for real-time journalism streaming.

const INITIAL_NEWS_ITEMS = [
  {
    id: "news-101",
    timeAgo: "12 mins ago",
    category: "MARKET DISPATCH",
    title: "New SUV Registrations Reach Record Peak in Indian Metropolitan Centers",
    body: "Industry delivery volumes surged by 18.4% YoY this quarter, led predominantly by demand for mid-size luxury SUVs equipped with Level 2 ADAS radar functions and panoramic skylight architectures."
  },
  {
    id: "news-102",
    timeAgo: "44 mins ago",
    category: "POWERTRAIN TECH",
    title: "Bharat NCAP Introduces Tougher Pedestrian Safety & Side Impact Protocols",
    body: "Upcoming crash test standards commencing next fiscal quarter will require comprehensive curtain airbag deployment and active electronic emergency braking verification across all passenger vehicle segments."
  },
  {
    id: "news-103",
    timeAgo: "2 hours ago",
    category: "INDUSTRY SCOOP",
    title: "Performance Motorcycle Segment Witnessing Rapid Shift Toward 400cc Platforms",
    body: "Following recent aggressive pricing strategies by European and Indian joint ventures, consumer preference has definitively shifted from 250cc commuter platforms to 400cc+ liquid-cooled single-cylinder touring machines."
  },
  {
    id: "news-104",
    timeAgo: "5 hours ago",
    category: "PRICE BULLETIN",
    title: "Electric Vehicle Road Tax Subsidies Extended in Key Southern States",
    body: "State transit authorities in Bengaluru, Hyderabad, and Chennai have confirmed the continuation of 100% road tax and registration fee exemptions for clean electric architecture vehicles through the next fiscal year."
  }
];

let activeNewsFeed = [...INITIAL_NEWS_ITEMS];

function renderNewsFeed() {
  const container = document.getElementById("live-news-list");
  if (!container) return;

  container.innerHTML = activeNewsFeed.map(item => `
    <div class="editorial-card ${item.isCloud ? 'fresh-alert' : ''}" id="${item.id}">
      <div class="editorial-meta">
        <span class="time-badge">${item.isCloud ? '⚡ SUPABASE CLOUD STREAM' : item.timeAgo}</span>
        <span class="beat-category">${item.category}</span>
      </div>
      <h3 class="editorial-headline">${item.title}</h3>
      <p class="editorial-body">${item.body}</p>
    </div>
  `).join('');

  // Update Top Live Ticker if elements exist
  const tickerText = document.getElementById("ticker-text");
  if (tickerText && activeNewsFeed.length > 0) {
    tickerText.style.opacity = "0";
    setTimeout(() => {
      tickerText.textContent = `${activeNewsFeed[0].category} BULLETIN: ${activeNewsFeed[0].title}`;
      tickerText.style.opacity = "1";
    }, 250);
  }
}

// Fetch dynamic real-time bulletins from Supabase cloud if available
async function syncSupabaseNews() {
  if (!window.supabaseClient) return;

  try {
    const { data, error } = await window.supabaseClient
      .from('live_news')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(15);

    if (!error && data && data.length > 0) {
      console.log(`⚡ Fetched ${data.length} news bulletins from Supabase cloud.`);
      const cloudItems = data.map(item => ({
        id: item.id || "cloud-" + Math.random(),
        timeAgo: "Live via Cloud",
        category: item.category || "BREAKING BULLETIN",
        title: item.title,
        body: item.body || item.content,
        isCloud: true
      }));

      // Combine cloud news first, then initial items
      activeNewsFeed = [...cloudItems, ...INITIAL_NEWS_ITEMS];
      renderNewsFeed();
    }
  } catch (e) {
    console.log("Using default curated editorial stream.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNewsFeed();
  syncSupabaseNews();
});
