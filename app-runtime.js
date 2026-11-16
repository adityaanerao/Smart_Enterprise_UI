/**
 * Smart Enterprises — Smart Motor Control - Unified App Runtime Engine
 * Powers mobile navigation, state persistence, live micro-interactions,
 * native dialogs (Analytics, Profile, Notifications, Add Motor, OTP), and hardware simulation.
 */
(() => {
  const routes = {
    splash: 'national_splash_screen_custom_farm_background',
    login: 'national_login_screen',
    home: 'national_farm_operator_home_dashboard',
    motors: 'all_motors_device_list',
    details: 'motor_details_screen',
    control: 'motor_control_screen',
    schedule: 'create_schedule_motor_timing_slots',
    protection: 'motor_protection_main_hub',
    overload: 'overload_protection_settings',
    voltage: 'voltage_protection_settings',
    dryrun: 'dry_run_protection_settings',
    phase: 'phase_protection_settings',
    review: 'review_apply_settings',
    confirm: 'apply_settings_confirmation_modal',
    advanced: 'advanced_electrical_settings',
    profile: 'national_operator_profile_screen',
    analytics: 'national_motor_analytics_screen'
  };

  // Reverse mapping from directory name to route key
  const folderToKey = {};
  for (const [k, v] of Object.entries(routes)) {
    folderToKey[v] = k;
  }

  // Current screen detection
  const currentPathParts = location.pathname.split('/').filter(Boolean);
  const currentFolder = currentPathParts.length >= 2 ? currentPathParts[currentPathParts.length - 2] : '';
  const currentScreenKey = folderToKey[currentFolder] || currentFolder || 'splash';

  // Navigation dispatcher
  const route = (key) => {
    const destFolder = routes[key] || key;
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'motor-app-navigate', screen: key }, '*');
    } else if (destFolder) {
      location.href = '../' + destFolder + '/code.html';
    }
  };

  // Inject Google Fonts Inter stylesheet
  if (!document.getElementById('app-google-fonts-inter')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'app-google-fonts-inter';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    document.head ? document.head.appendChild(fontLink) : document.addEventListener('DOMContentLoaded', () => document.head.appendChild(fontLink));
  }

  // Inject Mobile Frame Normalization Styles & Clear Standard Font
  const styleEl = document.createElement('style');
  styleEl.setAttribute('data-purpose', 'mobile-viewport-normalization');
  styleEl.textContent = `
    /* Universal Clear Standard Typography (Inter) */
    html, body, button, input, select, textarea, div, p, h1, h2, h3, h4, h5, h6, a, label, strong, b, em, small, li, ul, ol, th, td {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
      letter-spacing: -0.011em;
    }
    span:not([class*="material-"]):not([class*="fa-"]):not([class*="icon"]):not(.material-symbols-outlined):not(.material-icons) {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    }
    /* Explicitly preserve icon fonts */
    .material-symbols-outlined,
    .material-symbols-rounded,
    .material-symbols-sharp,
    .material-icons,
    [class*="material-symbol"],
    [class*="material-icon"] {
      font-family: 'Material Symbols Outlined', 'Material Icons' !important;
      font-feature-settings: 'liga' !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      -webkit-tap-highlight-color: transparent !important;
      overscroll-behavior-y: none !important;
    }
    /* Ensure screen main containers fill the mobile viewport smoothly */
    body > div, body > main {
      max-width: 100% !important;
      width: 100% !important;
      min-height: 100vh !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      border: none !important;
    }
    /* Hide all browser scrollbars for clean real app feeling */
    html::-webkit-scrollbar,
    body::-webkit-scrollbar,
    div::-webkit-scrollbar,
    main::-webkit-scrollbar,
    section::-webkit-scrollbar,
    *::-webkit-scrollbar {
      display: none !important;
      width: 0px !important;
      height: 0px !important;
      background: transparent !important;
    }
    html, body, div, main, section, * {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }
    /* Interactive active tap feedback */
    button, a, [role="button"], article.cursor-pointer {
      -webkit-touch-callout: none !important;
      user-select: none !important;
      transition: transform 0.12s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.12s ease !important;
    }
    button:active, a:active, [role="button"]:active, article.cursor-pointer:active {
      transform: scale(0.98) !important;
    }

    /* ======================================================== */
    /* CURVED ANIMATED BOTTOM NAVIGATION BAR                    */
    /* ======================================================== */
    .curved-navbar-wrapper {
      position: fixed !important;
      bottom: 0 !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: 100% !important;
      max-width: 440px !important;
      z-index: 50 !important;
      filter: drop-shadow(0 -8px 24px rgba(0, 0, 0, 0.10)) !important;
      user-select: none !important;
      pointer-events: auto !important;
      border: none !important;
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .curved-navbar-body {
      position: relative !important;
      background: #ffffff !important;
      border-radius: 28px 28px 0 0 !important;
      padding-top: 10px !important;
      padding-bottom: 6px !important;
      box-shadow: none !important;
      border: none !important;
    }

    /* Sliding Indicator Layer */
    .nav-sliding-indicator {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 20% !important;
      height: 100% !important;
      pointer-events: none !important;
      transition: transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      transform: translateX(calc(100% * var(--active-tab, 0))) !important;
      z-index: 10 !important;
    }

    /* Seamless White Dome SVG sitting above the navbar */
    .nav-dome-svg {
      position: absolute !important;
      top: -24px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: 96px !important;
      height: 26px !important;
      fill: #ffffff !important;
      pointer-events: none !important;
    }

    /* Elevated Floating Circular Button */
    .nav-floating-circle {
      position: absolute !important;
      top: -20px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: 50px !important;
      height: 50px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #FF3D47 0%, #DE0000 55%, #A60911 100%) !important;
      box-shadow: 0 10px 22px rgba(222, 0, 0, 0.42), 0 2px 6px rgba(0, 0, 0, 0.12) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: #ffffff !important;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      animation: popBubble 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }

    @keyframes popBubble {
      0% { transform: translateX(-50%) scale(0.65); }
      60% { transform: translateX(-50%) scale(1.12); }
      100% { transform: translateX(-50%) scale(1); }
    }

    .nav-floating-circle svg {
      width: 24px !important;
      height: 24px !important;
      fill: currentColor !important;
      stroke: currentColor !important;
    }

    /* Tab Navigation Items List */
    .nav-tabs-row {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-around !important;
      height: 60px !important;
      z-index: 20 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .nav-tab-item {
      flex: 1 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-decoration: none !important;
      cursor: pointer !important;
      background: transparent !important;
      border: none !important;
      outline: none !important;
      padding: 2px 0 0 0 !important;
      transition: all 0.25s ease !important;
    }

    .nav-tab-icon-wrap {
      height: 26px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: opacity 0.2s ease, transform 0.2s ease !important;
    }

    .nav-tab-item .nav-tab-icon-wrap svg {
      width: 22px !important;
      height: 22px !important;
      color: #94a3b8 !important;
      stroke: currentColor !important;
      transition: color 0.25s ease, transform 0.25s ease !important;
    }

    .nav-tab-item:hover .nav-tab-icon-wrap svg {
      color: #475569 !important;
      transform: translateY(-1px) !important;
    }

    .nav-tab-item.active .nav-tab-icon-wrap {
      opacity: 0 !important;
      visibility: hidden !important;
    }

    .nav-tab-label {
      font-size: 10.5px !important;
      font-weight: 600 !important;
      color: #64748b !important;
      margin-top: 2px !important;
      letter-spacing: -0.01em !important;
      transition: color 0.25s ease, font-weight 0.25s ease, transform 0.25s ease !important;
    }

    .nav-tab-item.active .nav-tab-label {
      color: #DE0000 !important;
      font-weight: 800 !important;
      transform: translateY(-2px) !important;
    }

    /* Safe Area / iOS Home Indicator Bar */
    .nav-home-indicator {
      width: 120px !important;
      height: 4px !important;
      background: #0f172a !important;
      border-radius: 9999px !important;
      opacity: 0.18 !important;
      margin: 4px auto 4px !important;
    }
  `;
  if (document.head) {
    document.head.appendChild(styleEl);
  } else {
    document.addEventListener('DOMContentLoaded', () => document.head && document.head.appendChild(styleEl));
  }

  // State Management
  const stateKey = 'nationalMotorDemoState';
  const readState = () => {
    try {
      return JSON.parse(localStorage.getItem(stateKey) || '{}');
    } catch {
      return {};
    }
  };
  const writeState = (patch) => {
    const next = { ...readState(), ...patch };
    localStorage.setItem(stateKey, JSON.stringify(next));
    return next;
  };

  // Native-style Mobile Toast Feedback
  function toast(message, type = 'default') {
    let t = document.getElementById('app-unified-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'app-unified-toast';
      Object.assign(t.style, {
        position: 'fixed',
        left: '50%',
        bottom: '26px',
        transform: 'translateX(-50%) translateY(20px)',
        zIndex: '999999',
        background: 'rgba(15, 23, 42, 0.94)',
        backdropFilter: 'blur(10px)',
        color: '#ffffff',
        padding: '11px 20px',
        borderRadius: '9999px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
        font: '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: '88vw',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        opacity: '0',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: 'none'
      });
      document.body.appendChild(t);
    }

    const icon = type === 'success' ? '✓ ' : type === 'warning' ? '⚠️ ' : '';
    t.textContent = icon + message;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';

    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2500);
  }

  // Label normalizer
  const getElementLabel = (el) => {
    if (!el) return '';
    const text = el.innerText || el.getAttribute('aria-label') || el.value || el.title || el.dataset.name || el.dataset.cardTitle || '';
    return text.replace(/\s+/g, ' ').trim().toLowerCase();
  };

  // Back Navigation Mapping
  const backNavigationMap = {
    national_login_screen: 'splash',
    national_farm_operator_home_dashboard: 'home',
    all_motors_device_list: 'home',
    motor_details_screen: 'motors',
    motor_control_screen: 'details',
    create_schedule_motor_timing_slots: 'details',
    motor_protection_main_hub: 'details',
    overload_protection_settings: 'protection',
    voltage_protection_settings: 'protection',
    dry_run_protection_settings: 'protection',
    phase_protection_settings: 'protection',
    advanced_electrical_settings: 'protection',
    review_apply_settings: 'protection',
    apply_settings_confirmation_modal: 'review',
    national_motor_analytics_screen: 'home',
    national_operator_profile_screen: 'home'
  };

  // Bottom Sheet Modal Builder
  function showBottomSheet(title, contentHtml) {
    let overlay = document.getElementById('app-bottom-sheet-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'app-bottom-sheet-overlay';
      Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(3px)',
        zIndex: '999990',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        opacity: '0',
        transition: 'opacity 0.25s ease'
      });

      overlay.innerHTML = `
        <div id="app-sheet-card" style="background:#ffffff; border-radius:28px 28px 0 0; max-height:85vh; width:100%; max-width:440px; margin:0 auto; overflow:hidden; transform:translateY(100%); transition:transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); display:flex; flex-direction:column; box-shadow:0 -10px 40px rgba(0,0,0,0.25);">
          <div style="padding:12px 0 6px; display:flex; justify-content:center;">
            <div style="width:40px; height:4px; background:#cbd5e1; border-radius:4px;"></div>
          </div>
          <div style="padding:8px 20px 14px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #f1f5f9;">
            <h3 id="app-sheet-title" style="font-size:16px; font-weight:700; color:#0f172a; margin:0;"></h3>
            <button id="app-sheet-close" style="border:0; background:#f1f5f9; width:30px; height:30px; border-radius:50%; font-size:16px; font-weight:700; color:#64748b; cursor:pointer; display:flex; align-items:center; justify-content:center;">✕</button>
          </div>
          <div id="app-sheet-body" style="padding:20px; overflow-y:auto; flex:1;"></div>
        </div>
      `;

      document.body.appendChild(overlay);

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) hideBottomSheet();
      });

      document.getElementById('app-sheet-close').addEventListener('click', hideBottomSheet);
    }

    document.getElementById('app-sheet-title').textContent = title;
    document.getElementById('app-sheet-body').innerHTML = contentHtml;

    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      document.getElementById('app-sheet-card').style.transform = 'translateY(0)';
    });
  }

  function hideBottomSheet() {
    const overlay = document.getElementById('app-bottom-sheet-overlay');
    if (!overlay) return;
    const card = document.getElementById('app-sheet-card');
    if (card) card.style.transform = 'translateY(100%)';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 260);
  }

  // Built-in Native Modals
  function openAnalyticsSheet() {
    showBottomSheet('Motor Analytics & Telemetry', `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:18px;">
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:14px;">
          <div style="font-size:11px; color:#64748b; font-weight:600;">DAILY RUN TIME</div>
          <div style="font-size:22px; font-weight:800; color:#0f172a; margin-top:2px;">6h 45m</div>
          <div style="font-size:11px; color:#10b981; font-weight:600; margin-top:2px;">+12% vs yesterday</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:14px;">
          <div style="font-size:11px; color:#64748b; font-weight:600;">ENERGY USED</div>
          <div style="font-size:22px; font-weight:800; color:#0f172a; margin-top:2px;">28.4 kWh</div>
          <div style="font-size:11px; color:#64748b; margin-top:2px;">Avg 4.2 kW/h</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:14px;">
          <div style="font-size:11px; color:#64748b; font-weight:600;">WATER DISCHARGE</div>
          <div style="font-size:22px; font-weight:800; color:#0f172a; margin-top:2px;">182.5 kL</div>
          <div style="font-size:11px; color:#3b82f6; font-weight:600; margin-top:2px;">Flow: 450 L/min</div>
        </div>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:14px;">
          <div style="font-size:11px; color:#64748b; font-weight:600;">HEALTH INDEX</div>
          <div style="font-size:22px; font-weight:800; color:#10b981; margin-top:2px;">98 %</div>
          <div style="font-size:11px; color:#10b981; font-weight:600; margin-top:2px;">Optimal Efficiency</div>
        </div>
      </div>

      <div style="margin-bottom:18px;">
        <div style="font-size:13px; font-weight:700; color:#1e293b; margin-bottom:10px;">7-Day Operating Hours</div>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; height:100px; padding:10px 10px 0; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:50px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Mon</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:75px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Tue</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:60px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Wed</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:85px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Thu</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:65px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Fri</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:40px; background:#cbd5e1; border-radius:6px;"></div>
            <span style="font-size:10px; color:#64748b; font-weight:600;">Sat</span>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <div style="width:24px; height:78px; background:#0ea5e9; border-radius:6px;"></div>
            <span style="font-size:10px; color:#0ea5e9; font-weight:700;">Sun</span>
          </div>
        </div>
      </div>

      <button id="app-export-report-btn" style="width:100%; background:#0f172a; color:#fff; border:0; padding:13px; border-radius:14px; font-weight:700; font-size:14px; cursor:pointer;">
        Export Telemetry CSV
      </button>
    `);

    setTimeout(() => {
      const btn = document.getElementById('app-export-report-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          hideBottomSheet();
          toast('Telemetry report exported (demo)', 'success');
        });
      }
    }, 50);
  }

  function openNotificationsSheet() {
    showBottomSheet('System Alerts (3)', `
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="background:#fef2f2; border:1px solid #fee2e2; border-radius:16px; padding:12px 14px; display:flex; gap:12px; align-items:start;">
          <div style="width:36px; height:36px; border-radius:50%; background:#fee2e2; display:flex; align-items:center; justify-content:center; color:#dc2626; font-size:16px; flex-shrink:0;">⚠️</div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#991b1b;">Field Motor 1: Overload Alert</div>
            <div style="font-size:11px; color:#7f1d1d; margin-top:2px;">Current reached 18.2 A (limit: 16.0 A). Tripped automatically.</div>
            <div style="font-size:10px; color:#b91c1c; font-weight:600; margin-top:4px;">12 mins ago</div>
          </div>
        </div>

        <div style="background:#f0fdf4; border:1px solid #dcfce7; border-radius:16px; padding:12px 14px; display:flex; gap:12px; align-items:start;">
          <div style="width:36px; height:36px; border-radius:50%; background:#dcfce7; display:flex; align-items:center; justify-content:center; color:#16a34a; font-size:16px; flex-shrink:0;">✓</div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#166534;">Morning Schedule Started</div>
            <div style="font-size:11px; color:#14532d; margin-top:2px;">Main Pump activated for scheduled 4-hour cycle.</div>
            <div style="font-size:10px; color:#15803d; font-weight:600; margin-top:4px;">Today at 06:00 AM</div>
          </div>
        </div>

        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:12px 14px; display:flex; gap:12px; align-items:start;">
          <div style="width:36px; height:36px; border-radius:50%; background:#e2e8f0; display:flex; align-items:center; justify-content:center; color:#475569; font-size:16px; flex-shrink:0;">ℹ️</div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#334155;">Gateway Communication Stable</div>
            <div style="font-size:11px; color:#64748b; margin-top:2px;">Smart SE-100 cellular signal quality: 94%.</div>
            <div style="font-size:10px; color:#94a3b8; font-weight:600; margin-top:4px;">Yesterday</div>
          </div>
        </div>

        <button id="app-clear-alerts-btn" style="width:100%; margin-top:10px; background:#f1f5f9; color:#475569; border:0; padding:11px; border-radius:14px; font-weight:700; font-size:13px; cursor:pointer;">
          Clear All Alerts
        </button>
      </div>
    `);

    setTimeout(() => {
      const btn = document.getElementById('app-clear-alerts-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          hideBottomSheet();
          toast('Alerts cleared', 'success');
        });
      }
    }, 50);
  }

  function openProfileSheet() {
    showBottomSheet('Operator Profile', `
      <div style="display:flex; flex-direction:column; align-items:center; text-align:center; padding:10px 0;">
        <div style="width:68px; height:68px; border-radius:50%; background:#DE0000; color:#fff; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:800; margin-bottom:10px; box-shadow:0 6px 18px rgba(222, 0, 0,0.3);">
          RP
        </div>
        <h4 style="font-size:18px; font-weight:800; color:#0f172a; margin:0;">Ramesh Patel</h4>
        <p style="font-size:12px; color:#64748b; margin-top:3px;">Farm Operator &middot; East Field</p>
        
        <div style="width:100%; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:14px; margin:20px 0 16px; text-align:left;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="font-size:12px; color:#64748b;">Farm Location</span>
            <span style="font-size:12px; font-weight:700; color:#1e293b;">East Field, 45 Acres</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="font-size:12px; color:#64748b;">Controller Unit</span>
            <span style="font-size:12px; font-weight:700; color:#1e293b;">Smart SE-100</span>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span style="font-size:12px; color:#64748b;">Gateway Link</span>
            <span style="font-size:12px; font-weight:700; color:#10b981;">Cellular 4G (Online)</span>
          </div>
        </div>

        <button id="app-profile-logout-btn" style="width:100%; background:#fee2e2; color:#dc2626; border:1.5px solid #fca5a5; padding:13px; border-radius:14px; font-weight:700; font-size:14px; cursor:pointer;">
          Log Out of Smart Enterprises
        </button>
      </div>
    `);

    setTimeout(() => {
      const btn = document.getElementById('app-profile-logout-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          hideBottomSheet();
          writeState({ demoLoggedIn: false });
          toast('Logged out');
          route('login');
        });
      }
    }, 50);
  }

  function openAddMotorModal() {
    showBottomSheet('Add New Motor Controller', `
      <form id="app-add-motor-form" style="display:flex; flex-direction:column; gap:12px;">
        <div>
          <label style="display:block; font-size:12px; font-weight:700; color:#334155; margin-bottom:4px;">Motor Name</label>
          <input type="text" id="new-motor-name" value="Well 3 Submersible" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:12px; font-size:13px; font-weight:600; outline:none;" required>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div>
            <label style="display:block; font-size:12px; font-weight:700; color:#334155; margin-bottom:4px;">Rated HP</label>
            <select id="new-motor-hp" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:12px; font-size:13px; font-weight:600; outline:none;">
              <option>5.0 HP</option>
              <option selected>7.5 HP</option>
              <option>10.0 HP</option>
              <option>15.0 HP</option>
            </select>
          </div>
          <div>
            <label style="display:block; font-size:12px; font-weight:700; color:#334155; margin-bottom:4px;">Phase Type</label>
            <select id="new-motor-phase" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:12px; font-size:13px; font-weight:600; outline:none;">
              <option selected>3 Phase (415V)</option>
              <option>1 Phase (230V)</option>
            </select>
          </div>
        </div>

        <div>
          <label style="display:block; font-size:12px; font-weight:700; color:#334155; margin-bottom:4px;">Location / Sector</label>
          <input type="text" id="new-motor-loc" value="South Orchard Sector" style="width:100%; padding:10px 12px; border:1px solid #cbd5e1; border-radius:12px; font-size:13px; font-weight:600; outline:none;">
        </div>

        <button type="submit" style="width:100%; margin-top:8px; background:#d3232a; color:#fff; border:0; padding:13px; border-radius:14px; font-weight:700; font-size:14px; cursor:pointer;">
          Register Motor
        </button>
      </form>
    `);

    setTimeout(() => {
      const form = document.getElementById('app-add-motor-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('new-motor-name').value;
          hideBottomSheet();
          toast(`${name} registered successfully!`, 'success');
          route('motors');
        });
      }
    }, 50);
  }

  function openOtpLoginModal() {
    showBottomSheet('Login with OTP', `
      <div style="text-align:center; padding:10px 0;">
        <p style="font-size:13px; color:#64748b; margin-bottom:16px;">
          An authentication code has been sent to your registered mobile number <strong style="color:#0f172a;">+91 98*** **420</strong>
        </p>

        <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px;">
          <input type="text" maxlength="1" value="5" style="width:48px; height:52px; text-align:center; font-size:22px; font-weight:800; border:2px solid #DE0000; border-radius:12px; outline:none; color:#0f172a;">
          <input type="text" maxlength="1" value="8" style="width:48px; height:52px; text-align:center; font-size:22px; font-weight:800; border:2px solid #DE0000; border-radius:12px; outline:none; color:#0f172a;">
          <input type="text" maxlength="1" value="2" style="width:48px; height:52px; text-align:center; font-size:22px; font-weight:800; border:2px solid #DE0000; border-radius:12px; outline:none; color:#0f172a;">
          <input type="text" maxlength="1" value="9" style="width:48px; height:52px; text-align:center; font-size:22px; font-weight:800; border:2px solid #DE0000; border-radius:12px; outline:none; color:#0f172a;">
        </div>

        <button id="app-verify-otp-btn" style="width:100%; background:#DE0000; color:#fff; border:0; padding:14px; border-radius:14px; font-weight:700; font-size:15px; cursor:pointer;">
          Verify &amp; Continue
        </button>
      </div>
    `);

    setTimeout(() => {
      const btn = document.getElementById('app-verify-otp-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          hideBottomSheet();
          writeState({ demoLoggedIn: true });
          toast('OTP verified successfully', 'success');
          route('home');
        });
      }
    }, 50);
  }

  // Master Route Handler for any given label or element
  function handleNavigationForLabel(l, targetEl) {
    if (!l && !targetEl) return false;

    // Check data-route attribute first
    const directRoute = targetEl?.getAttribute('data-route') || targetEl?.closest('[data-route]')?.getAttribute('data-route');
    if (directRoute && routes[directRoute]) {
      route(directRoute);
      return true;
    }

    // Analytics Screen Navigation
    if (/analytics/.test(l)) {
      route('analytics');
      return true;
    }
    if (/notifications|notification bell/.test(l)) {
      openNotificationsSheet();
      return true;
    }
    if (/user profile|profile avatar|avatar/.test(l)) {
      openProfileSheet();
      return true;
    }
    if (/add motor|\+ add/.test(l)) {
      openAddMotorModal();
      return true;
    }
    if (/login with otp|otp/.test(l)) {
      openOtpLoginModal();
      return true;
    }
    if (/forgot password/.test(l)) {
      toast('Demo helper: Use password "admin123" or demo login');
      return true;
    }

    // Login Action
    if (/^login$|sign in|log in/.test(l)) {
      writeState({ demoLoggedIn: true });
      route('home');
      return true;
    }

    // Back & Cancel navigation
    if (/go back|chevron_left|chevron-left|arrow-left|arrow_back|^back$|cancel/.test(l)) {
      const backDest = backNavigationMap[currentFolder] || 'home';
      route(backDest);
      return true;
    }

    // Specific screen navigations
    if (/all motors|my motors|view all|^motors$|devices/.test(l)) {
      route('motors');
      return true;
    }

    if (/view details|main pump|borewell motor|field motor|motor details|motor information/.test(l)) {
      route('details');
      return true;
    }

    if (/motor control|control motor|controls/.test(l)) {
      route('control');
      return true;
    }

    if (/schedule|schedules|timing slots|timed run|set timer/.test(l)) {
      route('schedule');
      return true;
    }

    if (/protection settings|protection hub|^protection$|motor safety/.test(l)) {
      route('protection');
      return true;
    }

    if (/dry.?run/.test(l)) {
      route('dryrun');
      return true;
    }

    if (/overload/.test(l)) {
      route('overload');
      return true;
    }

    if (/voltage|over voltage|under voltage/.test(l)) {
      route('voltage');
      return true;
    }

    if (/phase/.test(l)) {
      route('phase');
      return true;
    }

    if (/advanced|electrical settings|device settings/.test(l)) {
      route('advanced');
      return true;
    }

    if (/review settings|save settings|edit parameters/.test(l)) {
      if (/save settings/.test(l)) {
        writeState({ settingsSavedAt: new Date().toISOString() });
        toast('Settings saved. Review before applying.', 'success');
        route('review');
      } else {
        route('review');
      }
      return true;
    }

    if (/apply settings|apply now|^apply$/.test(l)) {
      if (currentScreenKey === 'review' || currentFolder === 'review_apply_settings') {
        route('confirm');
      } else if (currentScreenKey === 'confirm' || currentFolder === 'apply_settings_confirmation_modal') {
        writeState({ settingsAppliedAt: new Date().toISOString() });
        toast('All protection settings applied to motor!', 'success');
        route('home');
      } else {
        route('confirm');
      }
      return true;
    }

    if (/^home$|dashboard|home dashboard/.test(l)) {
      route('home');
      return true;
    }

    return false;
  }

  // Interactive Live Bindings
  function bindInteractions() {
    document.addEventListener('click', (e) => {
      // Find closest interactive element or card
      const target = e.target.closest(
        'button, a, [role=button], input[type=submit], input[type=button], .setting-card, article, section[data-purpose*="card"], [data-route], [data-name], [data-card-title], .checklist-item, .toggle-pill'
      );
      if (!target) return;

      const l = getElementLabel(target);

      // Skip custom styled stepper buttons with their own page logic
      if (target.classList.contains('stepper-btn') || target.hasAttribute('data-custom')) {
        return;
      }

      // 1. Numeric Steppers (+ and -)
      if (/decrease|^−$|^-$|minus|fa-minus|dec/.test(l) || target.id?.includes('dec') || target.id?.includes('Dec')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const container = target.parentElement;
        const input = container?.querySelector('input');
        if (input) {
          const step = Number(input.step) || 1;
          const min = input.min === '' ? -Infinity : Number(input.min);
          input.value = Math.max(min, (Number(input.value) || 0) - step);
          input.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          const numSpan = container?.querySelector('span[id*="val"], span[id*="Val"], strong, span');
          if (numSpan && !isNaN(parseFloat(numSpan.textContent))) {
            const cur = parseFloat(numSpan.textContent);
            numSpan.textContent = String(Math.max(1, Math.round((cur - (cur > 10 ? 1 : 0.5)) * 10) / 10));
          }
        }
        return;
      }

      if (/increase|^\+$|plus|fa-plus|inc/.test(l) || target.id?.includes('inc') || target.id?.includes('Inc')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const container = target.parentElement;
        const input = container?.querySelector('input');
        if (input) {
          const step = Number(input.step) || 1;
          const max = input.max === '' ? Infinity : Number(input.max);
          input.value = Math.min(max, (Number(input.value) || 0) + step);
          input.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          const numSpan = container?.querySelector('span[id*="val"], span[id*="Val"], strong, span');
          if (numSpan && !isNaN(parseFloat(numSpan.textContent))) {
            const cur = parseFloat(numSpan.textContent);
            numSpan.textContent = String(Math.round((cur + (cur >= 10 ? 1 : 0.5)) * 10) / 10);
          }
        }
        return;
      }

      // 2. Schedule Repeat Days Pill Toggles (Mon, Tue, Wed...)
      if (/^(mon|tue|wed|thu|fri|sat|sun)$/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const isSelected = target.classList.contains('bg-emerald-600') || target.style.backgroundColor?.includes('emerald');
        if (isSelected) {
          target.classList.remove('bg-emerald-600', 'text-white');
          target.classList.add('bg-slate-100', 'text-slate-600');
        } else {
          target.classList.remove('bg-slate-100', 'text-slate-600');
          target.classList.add('bg-emerald-600', 'text-white');
        }
        return;
      }

      // 3. Toggle pills (On / Off)
      if (target.classList.contains('toggle-pill') || /^(on|off)$/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const wasOn = target.textContent.trim().toLowerCase() === 'on';
        target.textContent = wasOn ? 'Off' : 'On';
        if (wasOn) {
          target.className = target.className.replace(/bg-emerald-\d+|text-emerald-\d+/g, '').trim();
          target.classList.add('bg-slate-100', 'text-slate-500');
          toast('Protection disabled');
        } else {
          target.className = target.className.replace(/bg-slate-\d+|text-slate-\d+/g, '').trim();
          target.classList.add('bg-emerald-100', 'text-emerald-700');
          toast('Protection enabled', 'success');
        }
        return;
      }

      // 4. Motor Actions: Start, Stop, Reset Fault
      if (/start the motor|^start$/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        writeState({ motorStatus: 'Running' });
        // Update UI pills to running
        document.querySelectorAll('[data-purpose="running-badge"], .status-badge, .status-pill').forEach(el => {
          el.textContent = 'Running';
        });
        toast('Motor started successfully! Status: Running', 'success');
        return;
      }

      if (/stop the motor|^stop$/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        writeState({ motorStatus: 'Stopped' });
        document.querySelectorAll('[data-purpose="running-badge"], .status-badge, .status-pill').forEach(el => {
          el.textContent = 'Stopped';
        });
        toast('Motor stopped safely. Status: Stopped');
        return;
      }

      if (/reset fault/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        writeState({ faultStatus: 'Normal' });
        toast('Fault cleared successfully! System normal.', 'success');
        return;
      }

      // 5. Save Schedule button
      if (/save schedule/.test(l)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        writeState({ scheduleSaved: true, savedAt: new Date().toISOString() });
        toast('Schedule saved successfully!', 'success');
        setTimeout(() => route('details'), 400);
        return;
      }

      // 6. General navigation routing
      if (handleNavigationForLabel(l, target)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
    }, true);

    // Form Submissions
    document.addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentFolder === 'national_login_screen' || currentScreenKey === 'login') {
        writeState({ demoLoggedIn: true });
        toast('Welcome back! Logging in...', 'success');
        route('home');
      } else {
        toast('Form saved');
      }
    }, true);

    // Live search filter in All Motors screen
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="Search motor"]');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll('[data-purpose="motor-cards-list"] > article, article').forEach(card => {
          const cardText = card.textContent.toLowerCase();
          card.style.display = cardText.includes(query) ? 'flex' : 'none';
        });
      });
    }

    // Splash Screen Auto-Advance
    if (currentFolder === 'national_splash_screen_custom_farm_background' || currentScreenKey === 'splash') {
      let advanced = false;
      const advance = () => {
        if (!advanced) {
          advanced = true;
          route('login');
        }
      };
      document.addEventListener('click', advance, { once: true });
      setTimeout(advance, 3200);
    }

    // Initialize Animated Curved Navbar
    initCurvedNavbar();
  }

  function initCurvedNavbar() {
    const nav = document.querySelector('.curved-navbar-wrapper, [data-purpose="bottom-tab-bar"]');
    if (!nav) return;

    // Detect active tab index based on currentScreenKey or folder
    const screenToIndex = {
      home: 0,
      national_farm_operator_home_dashboard: 0,
      motors: 1,
      all_motors_device_list: 1,
      details: 1,
      motor_details_screen: 1,
      control: 1,
      motor_control_screen: 1,
      protection: 1,
      motor_protection_main_hub: 1,
      schedule: 2,
      create_schedule_motor_timing_slots: 2,
      analytics: 3,
      national_motor_analytics_screen: 3,
      advanced: 3,
      profile: 4,
      national_operator_profile_screen: 4
    };

    let initialIndex = 0;
    const styleAttr = nav.getAttribute('style') || '';
    const match = styleAttr.match(/--active-tab:\s*(\d+)/);
    if (match) {
      initialIndex = parseInt(match[1], 10);
    } else if (screenToIndex[currentScreenKey] !== undefined) {
      initialIndex = screenToIndex[currentScreenKey];
    } else if (screenToIndex[currentFolder] !== undefined) {
      initialIndex = screenToIndex[currentFolder];
    }

    const tabs = nav.querySelectorAll('.nav-tab-item');
    const floatingCircle = nav.querySelector('.nav-floating-circle');
    const floatingIcon = nav.querySelector('.nav-floating-icon, #floatingIconContainer');

    function updateActiveState(idx, animateCircle = true) {
      nav.style.setProperty('--active-tab', idx);
      tabs.forEach((t, i) => {
        if (i === Number(idx)) {
          t.classList.add('active');
          if (floatingIcon) {
            const svg = t.querySelector('.nav-tab-icon-wrap svg');
            if (svg) floatingIcon.innerHTML = svg.outerHTML;
          }
        } else {
          t.classList.remove('active');
        }
      });

      if (animateCircle && floatingCircle) {
        floatingCircle.style.animation = 'none';
        floatingCircle.offsetHeight; // trigger reflow
        floatingCircle.style.animation = 'popBubble 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    }

    updateActiveState(initialIndex, false);

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const routeKey = tab.getAttribute('data-route');
        updateActiveState(index, true);

        if (routeKey === 'analytics') {
          setTimeout(() => route('analytics'), 180);
          return;
        }

        setTimeout(() => {
          if (routeKey) route(routeKey);
        }, 180);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindInteractions);
  } else {
    bindInteractions();
  }
})();