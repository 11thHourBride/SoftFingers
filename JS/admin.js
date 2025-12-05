// ==== ADMIN DASHBOARD SYSTEM ====

// Global variables
let auth, db, currentAdmin, currentPage, resultsPerPage;

// Cache for user emails
const userEmailCache = {};

// Wait for Firebase to load
function initializeApp() {
  console.log('=== INITIALIZATION START ===');
  console.log('Step 1: Checking Firebase...');
  
  // Check if Firebase is loaded
  if (typeof firebase === 'undefined') {
    console.error('ERROR: Firebase not loaded!');
    const loading = document.getElementById('admin-loading');
    if (loading) {
      loading.innerHTML = `
        <div class="access-denied-content">
          <div class="access-denied-icon">⚠️</div>
          <h2>Firebase Not Loaded</h2>
          <p>Please check your internet connection and refresh the page.</p>
          <button class="btn" onclick="location.reload()" style="margin-top: 20px;">Reload Page</button>
        </div>
      `;
    }
    return;
  }
  
  console.log('Step 2: Firebase object found');
  
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoQO4vR_lIStx2lMPSy_YhHYPh75gHRSQ",
    authDomain: "softfingers-typing.firebaseapp.com",
    projectId: "softfingers-typing",
    storageBucket: "softfingers-typing.firebasestorage.app",
    messagingSenderId: "896354348357",
    appId: "1:896354348357:web:72fda3e79dce5f5b8b622c",
    measurementId: "G-SLF302PVR4"
  };
  
  // Initialize Firebase if not already initialized
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log('Step 3: Firebase initialized successfully');
    } else {
      console.log('Step 3: Firebase already initialized');
    }
  } catch (error) {
    console.error('ERROR: Failed to initialize Firebase:', error);
    return;
  }
  
  auth = firebase.auth();
  db = firebase.firestore();
  
  console.log('Step 4: Auth and Firestore ready');
  console.log('Auth object:', auth);
  console.log('Current user:', auth.currentUser);
  
  // Admin configuration
  const ADMINS = {
    'mgodfred42@gmail.com': { role: 'super_admin', name: 'Super Admin' },
    'fullword17@gmail.com': { role: 'admin', name: 'Admin' }
  };
  
  currentAdmin = null;
  currentPage = 1;
  resultsPerPage = 20;
  
  // Get DOM elements
  console.log('Step 5: Getting DOM elements...');
  const adminLoading = document.getElementById('admin-loading');
  const adminAccessDenied = document.getElementById('admin-access-denied');
  const adminContent = document.getElementById('admin-content');
  const adminEmail = document.getElementById('admin-email');
  const adminRoleBadge = document.getElementById('admin-role-badge');
  const logoutBtn = document.getElementById('admin-logout-btn');
  const settingsTab = document.getElementById('settings-tab');
  
  console.log('DOM Elements found:', {
    adminLoading: !!adminLoading,
    adminAccessDenied: !!adminAccessDenied,
    adminContent: !!adminContent,
    adminEmail: !!adminEmail,
    adminRoleBadge: !!adminRoleBadge,
    logoutBtn: !!logoutBtn,
    settingsTab: !!settingsTab
  });
  
  // Helper function to safely toggle classes
  function safeToggleClass(element, className, shouldAdd) {
    if (element) {
      if (shouldAdd) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  }
  
  // Helper function to safely set text content
  function safeSetText(element, text) {
    if (element) {
      element.textContent = text;
    }
  }
  
  // Helper function to safely set HTML
  function safeSetHTML(element, html) {
    if (element) {
      element.innerHTML = html;
    }
  }
  
  // Helper function to get user email from UID
  async function getUserEmail(uid) {
    // Check cache first
    if (userEmailCache[uid]) {
      return userEmailCache[uid];
    }
    
    try {
      // Try to get email from results collection (most recent)
      const resultsSnap = await db.collection('results')
        .where('uid', '==', uid)
        .limit(1)
        .get();
      
      if (!resultsSnap.empty) {
        const email = resultsSnap.docs[0].data().email || resultsSnap.docs[0].data().userEmail;
        if (email) {
          userEmailCache[uid] = email;
          return email;
        }
      }
      
      // If no email found, return truncated UID
      return uid.substring(0, 12) + '...';
    } catch (error) {
      console.error('Error getting user email:', error);
      return uid.substring(0, 12) + '...';
    }
  }
  
  // Timeout fallback
  let authHandled = false;
  setTimeout(() => {
    if (!authHandled) {
      console.error('TIMEOUT: Auth state callback never fired after 15 seconds');
      if (adminLoading) {
        adminLoading.innerHTML = `
          <div class="access-denied-content">
            <div class="access-denied-icon">⚠️</div>
            <h2>Authentication Timeout</h2>
            <p>The authentication system is not responding.</p>
            <button class="btn" onclick="location.reload()" style="margin-top: 20px;">Reload Page</button>
            <a href="SoftFingers Admin-login.html" class="btn btn-secondary" style="margin-top: 10px; display: inline-block;">Go to Login</a>
          </div>
        `;
      }
    }
  }, 15000);
  
  // ==== AUTH STATE HANDLER ====
  console.log('Step 6: Setting up auth state listener...');
  
  auth.onAuthStateChanged(async (user) => {
    authHandled = true;
    console.log('=== AUTH STATE CHANGED ===');
    console.log('User object:', user);
    console.log('User email:', user ? user.email : 'null');
    console.log('User UID:', user ? user.uid : 'null');
    
    // Show loading, hide others
    safeToggleClass(adminLoading, 'hidden', false);
    safeToggleClass(adminAccessDenied, 'hidden', true);
    safeToggleClass(adminContent, 'hidden', true);
    
    if (user) {
      console.log('User is signed in:', user.email);
      const adminInfo = ADMINS[user.email];
      console.log('Admin info lookup:', adminInfo);
      
      if (adminInfo) {
        console.log('✓ User is authorized admin:', adminInfo.role);
        
        // User is authorized admin
        currentAdmin = {
          uid: user.uid,
          email: user.email,
          role: adminInfo.role,
          name: adminInfo.name
        };
        
        console.log('Current admin set:', currentAdmin);
        
        // Update UI
        safeSetText(adminEmail, user.email);
        
        const roleHTML = adminInfo.role === 'super_admin' 
          ? '<span class="admin-badge super-admin-badge">Super Admin</span>'
          : '<span class="admin-badge">Admin</span>';
        safeSetHTML(adminRoleBadge, roleHTML);
        
        if (settingsTab) {
          settingsTab.style.display = adminInfo.role === 'super_admin' ? 'block' : 'none';
        }
        
        // Hide loading, show content
        console.log('Hiding loading, showing content...');
        safeToggleClass(adminLoading, 'hidden', true);
        safeToggleClass(adminContent, 'hidden', false);
        
        console.log('Loading state after update:', {
          loadingHidden: adminLoading ? adminLoading.classList.contains('hidden') : 'element not found',
          contentHidden: adminContent ? adminContent.classList.contains('hidden') : 'element not found'
        });
        
        // Load initial data
        console.log('Loading dashboard data...');
        try {
          await loadDashboardData();
          console.log('✓ Dashboard data loaded successfully');
        } catch (error) {
          console.error('ERROR loading dashboard data:', error);
          alert('Error loading dashboard: ' + error.message);
        }
        
      } else {
        console.log('✗ User email not in admin list');
        console.log('Available admins:', Object.keys(ADMINS));
        
        // User is not authorized
        safeToggleClass(adminLoading, 'hidden', true);
        safeToggleClass(adminAccessDenied, 'hidden', false);
      }
    } else {
      console.log('No user signed in - redirecting to login');
      
      // Show message before redirect
      if (adminLoading) {
        adminLoading.innerHTML = `
          <div class="access-denied-content">
            <div class="access-denied-icon">🔒</div>
            <h2>Not Signed In</h2>
            <p>Redirecting to login page...</p>
          </div>
        `;
      }
      
      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = 'SoftFingers Admin-login.html';
      }, 1000);
    }
  });
  
  // ==== LOGOUT ====
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      if (confirm('Are you sure you want to logout?')) {
        try {
          await auth.signOut();
          window.location.href = 'SoftFingers Admin-login.html';
        } catch (error) {
          console.error('Logout error:', error);
          alert('Failed to logout: ' + error.message);
        }
      }
    });
  }
  
  // ==== TAB SWITCHING ====
  const navTabs = document.querySelectorAll('.admin-nav-tab');
  const tabContents = document.querySelectorAll('.admin-tab-content');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      console.log('Switching to tab:', targetTab);
      
      navTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      tabContents.forEach(content => {
        if (content.id === `${targetTab}-content`) {
          content.classList.add('active');
          loadTabData(targetTab);
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
  
  // ==== LOAD DASHBOARD DATA ====
  async function loadDashboardData() {
    console.log('loadDashboardData() called');
    try {
      await Promise.all([
        loadOverviewStats(),
        loadRecentActivity(),
        loadTopPerformers()
      ]);
      console.log('All dashboard data loaded');
    } catch (error) {
      console.error('Error in loadDashboardData:', error);
      throw error;
    }
  }
  
  // ==== LOAD OVERVIEW STATS ====
  async function loadOverviewStats() {
    console.log('Loading overview stats...');
    try {
      const resultsSnap = await db.collection('results').get();
      console.log('Results count:', resultsSnap.size);
      
      const uniqueUsers = new Set();
      resultsSnap.forEach(doc => {
        uniqueUsers.add(doc.data().uid);
      });
      
      const totalTests = resultsSnap.size;
      
      const competitionsSnap = await db.collection('competitions')
        .where('status', '==', 'active')
        .get();
      const activeCompetitions = competitionsSnap.size;
      
      let totalWPM = 0;
      resultsSnap.forEach(doc => {
        totalWPM += doc.data().wpm || 0;
      });
      const avgWPM = totalTests > 0 ? Math.round(totalWPM / totalTests) : 0;
      
      safeSetText(document.getElementById('total-users'), uniqueUsers.size);
      safeSetText(document.getElementById('total-tests'), totalTests.toLocaleString());
      safeSetText(document.getElementById('total-competitions'), activeCompetitions);
      safeSetText(document.getElementById('avg-wpm'), avgWPM);
      
      console.log('✓ Overview stats loaded');
    } catch (error) {
      console.error('Error loading overview stats:', error);
    }
  }
  
  // ==== LOAD RECENT ACTIVITY ====
  async function loadRecentActivity() {
    console.log('Loading recent activity...');
    try {
      const tbody = document.getElementById('recent-activity-body');
      if (!tbody) return;
      
      tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Loading...</td></tr>';
      
      const resultsSnap = await db.collection('results')
        .orderBy('timestamp', 'desc')
        .limit(10)
        .get();
      
      if (resultsSnap.empty) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No recent activity</td></tr>';
        return;
      }
      
      let html = '';
      for (const doc of resultsSnap.docs) {
        const data = doc.data();
        const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleString() : 'N/A';
        const userEmail = await getUserEmail(data.uid);
        
        html += `
          <tr>
            <td>${userEmail}</td>
            <td>Completed Test</td>
            <td class="text-success">${data.wpm} WPM</td>
            <td>${data.accuracy}%</td>
            <td class="text-small text-muted">${date}</td>
          </tr>
        `;
      }
      
      tbody.innerHTML = html;
      console.log('✓ Recent activity loaded');
    } catch (error) {
      console.error('Error loading recent activity:', error);
    }
  }
  
  // ==== LOAD TOP PERFORMERS ====
  async function loadTopPerformers() {
    console.log('Loading top performers...');
    try {
      const tbody = document.getElementById('top-performers-body');
      if (!tbody) return;
      
      tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Loading...</td></tr>';
      
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      const resultsSnap = await db.collection('results')
        .where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(weekAgo))
        .orderBy('timestamp', 'desc')
        .get();
      
      const userStats = {};
      resultsSnap.forEach(doc => {
        const data = doc.data();
        const uid = data.uid;
        
        if (!userStats[uid]) {
          userStats[uid] = {
            uid: uid,
            email: data.email || data.userEmail || null,
            maxWPM: 0,
            totalAccuracy: 0,
            tests: 0
          };
        }
        
        if (data.wpm > userStats[uid].maxWPM) {
          userStats[uid].maxWPM = data.wpm;
        }
        userStats[uid].totalAccuracy += data.accuracy || 0;
        userStats[uid].tests++;
        
        // Update email if found
        if (!userStats[uid].email && (data.email || data.userEmail)) {
          userStats[uid].email = data.email || data.userEmail;
        }
      });
      
      const topUsers = Object.values(userStats)
        .sort((a, b) => b.maxWPM - a.maxWPM)
        .slice(0, 10);
      
      if (topUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No data for this week</td></tr>';
        return;
      }
      
      let html = '';
      for (const [index, user] of topUsers.entries()) {
        const avgAccuracy = Math.round(user.totalAccuracy / user.tests);
        const userEmail = user.email || await getUserEmail(user.uid);
        
        html += `
          <tr>
            <td><strong>#${index + 1}</strong></td>
            <td>${userEmail}</td>
            <td class="text-success">${user.maxWPM} WPM</td>
            <td>${avgAccuracy}%</td>
            <td>${user.tests}</td>
          </tr>
        `;
      }
      
      tbody.innerHTML = html;
      console.log('✓ Top performers loaded');
    } catch (error) {
      console.error('Error loading top performers:', error);
    }
  }
  
  // ==== LOAD TAB DATA ====
  async function loadTabData(tab) {
    console.log('Loading tab data for:', tab);
    switch(tab) {
      case 'overview':
        await loadDashboardData();
        break;
      case 'users':
        await loadUsers();
        break;
      case 'results':
        await loadResults();
        break;
      case 'competitions':
        await loadCompetitions();
        break;
      case 'lessons':
        await loadLessonsStats();
        break;
      case 'achievements':
        await loadAchievementsStats();
        break;
      case 'settings':
        loadSettings();
        break;
    }
  }
  
  // ==== LOAD USERS ====
  async function loadUsers() {
    try {
      const tbody = document.getElementById('users-table-body');
      if (!tbody) return;
      
      tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">Loading users...</td></tr>';
      
      const resultsSnap = await db.collection('results').get();
      const userMap = {};
      
      resultsSnap.forEach(doc => {
        const data = doc.data();
        const uid = data.uid;
        
        if (!userMap[uid]) {
          userMap[uid] = {
            uid: uid,
            email: data.email || data.userEmail || null,
            tests: 0,
            maxWPM: 0,
            firstTest: data.timestamp
          };
        }
        
        userMap[uid].tests++;
        if (data.wpm > userMap[uid].maxWPM) {
          userMap[uid].maxWPM = data.wpm;
        }
        
        if (data.timestamp < userMap[uid].firstTest) {
          userMap[uid].firstTest = data.timestamp;
        }
        
        // Update email if found
        if (!userMap[uid].email && (data.email || data.userEmail)) {
          userMap[uid].email = data.email || data.userEmail;
        }
      });
      
      const users = Object.values(userMap);
      
      if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No users found</td></tr>';
        return;
      }
      
      let html = '';
      for (const user of users) {
        const joinDate = user.firstTest?.toDate ? user.firstTest.toDate().toLocaleDateString() : 'N/A';
        const userEmail = user.email || await getUserEmail(user.uid);
        
        html += `
          <tr>
            <td>${userEmail}</td>
            <td><span class="status-badge status-verified">✓ Active</span></td>
            <td>${user.tests}</td>
            <td class="text-success">${user.maxWPM} WPM</td>
            <td class="text-small text-muted">${joinDate}</td>
            <td>
              <button class="btn btn-small" onclick="viewUserDetails('${user.uid}')">View</button>
            </td>
          </tr>
        `;
      }
      
      tbody.innerHTML = html;
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }
  
  // ==== VIEW USER DETAILS ====
  window.viewUserDetails = async function(uid) {
    try {
      const modal = document.getElementById('user-details-modal');
      const modalBody = document.getElementById('user-details-body');
      const modalTitle = document.getElementById('user-details-title');
      
      if (!modal || !modalBody || !modalTitle) return;
      
      modalTitle.textContent = 'User Details';
      modalBody.innerHTML = '<div class="text-center"><div class="loader"></div></div>';
      modal.classList.remove('hidden');
      
      const resultsSnap = await db.collection('results')
        .where('uid', '==', uid)
        .orderBy('timestamp', 'desc')
        .limit(50)
        .get();
      
      let totalTests = 0;
      let maxWPM = 0;
      let totalWPM = 0;
      let totalAccuracy = 0;
      let userEmail = null;
      
      resultsSnap.forEach(doc => {
        const data = doc.data();
        totalTests++;
        totalWPM += data.wpm || 0;
        totalAccuracy += data.accuracy || 0;
        if (data.wpm > maxWPM) maxWPM = data.wpm;
        
        // Get email from any result
        if (!userEmail && (data.email || data.userEmail)) {
          userEmail = data.email || data.userEmail;
        }
      });
      
      if (!userEmail) {
        userEmail = await getUserEmail(uid);
      }
      
      const avgWPM = totalTests > 0 ? Math.round(totalWPM / totalTests) : 0;
      const avgAccuracy = totalTests > 0 ? Math.round(totalAccuracy / totalTests) : 0;
      
      modalBody.innerHTML = `
        <div class="admin-info-grid">
          <div class="admin-info-item">
            <span class="admin-info-label">Email</span>
            <span class="admin-info-value">${userEmail}</span>
          </div>
          <div class="admin-info-item">
            <span class="admin-info-label">User ID</span>
            <span class="admin-info-value">${uid.substring(0, 20)}...</span>
          </div>
          <div class="admin-info-item">
            <span class="admin-info-label">Total Tests</span>
            <span class="admin-info-value">${totalTests}</span>
          </div>
          <div class="admin-info-item">
            <span class="admin-info-label">Best WPM</span>
            <span class="admin-info-value text-success">${maxWPM}</span>
          </div>
          <div class="admin-info-item">
            <span class="admin-info-label">Average WPM</span>
            <span class="admin-info-value">${avgWPM}</span>
          </div>
          <div class="admin-info-item">
            <span class="admin-info-label">Average Accuracy</span>
            <span class="admin-info-value">${avgAccuracy}%</span>
          </div>
        </div>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Recent Tests</h4>
        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>WPM</th>
                <th>Accuracy</th>
                <th>Difficulty</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${resultsSnap.docs.slice(0, 10).map(doc => {
                const data = doc.data();
                const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleString() : 'N/A';
                return `
                  <tr>
                    <td class="text-success">${data.wpm}</td>
                    <td>${data.accuracy}%</td>
                    <td>${data.difficulty || 'N/A'}</td>
                    <td class="text-small text-muted">${date}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch (error) {
      console.error('Error loading user details:', error);
    }
  };
  
  // Close user modal
  const closeUserModal = document.getElementById('close-user-modal');
  if (closeUserModal) {
    closeUserModal.addEventListener('click', () => {
      const modal = document.getElementById('user-details-modal');
      if (modal) modal.classList.add('hidden');
    });
  }
  
  // ==== LOAD RESULTS ====
  async function loadResults() {
    try {
      const tbody = document.getElementById('results-table-body');
      if (!tbody) return;
      
      tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">Loading results...</td></tr>';
      
      const resultsSnap = await db.collection('results')
        .orderBy('timestamp', 'desc')
        .limit(resultsPerPage * currentPage)
        .get();
      
      if (resultsSnap.empty) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">No results found</td></tr>';
        return;
      }
      
      let html = '';
      for (const doc of resultsSnap.docs) {
        const data = doc.data();
        const date = data.timestamp?.toDate ? data.timestamp.toDate().toLocaleString() : 'N/A';
        const userEmail = data.email || data.userEmail || await getUserEmail(data.uid);
        
        html += `
          <tr>
            <td>${userEmail}</td>
            <td class="text-success">${data.wpm}</td>
            <td>${data.accuracy}%</td>
            <td>${data.duration}s</td>
            <td>${data.difficulty || 'N/A'}</td>
            <td>${data.mode || 'Random'}</td>
            <td class="text-small text-muted">${date}</td>
            <td>
              <button class="btn btn-small btn-danger" onclick="deleteResult('${doc.id}')">Delete</button>
            </td>
          </tr>
        `;
      }
      
      tbody.innerHTML = html;
    } catch (error) {
      console.error('Error loading results:', error);
    }
  }
  
  // ==== DELETE RESULT ====
  window.deleteResult = async function(docId) {
    if (!confirm('Are you sure you want to delete this result? This cannot be undone.')) {
      return;
    }
    
    try {
      await db.collection('results').doc(docId).delete();
      alert('Result deleted successfully');
      await loadResults();
    } catch (error) {
      console.error('Error deleting result:', error);
      alert('Failed to delete result');
    }
  };
  
  // ==== LOAD COMPETITIONS ====
  async function loadCompetitions() {
    try {
      const tbody = document.getElementById('competitions-table-body');
      if (!tbody) return;
      
      tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">Loading competitions...</td></tr>';
      
      const compsSnap = await db.collection('competitions')
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();
      
      if (compsSnap.empty) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">No competitions found</td></tr>';
        return;
      }
      
      let html = '';
      compsSnap.forEach(doc => {
        const data = doc.data();
        const endDate = data.endsAt?.toDate ? data.endsAt.toDate().toLocaleDateString() : 'N/A';
        const participants = data.participants ? data.participants.length : 0;
        const maxParticipants = data.maxParticipants || 10;
        const statusClass = data.status === 'active' ? 'status-active' : 'status-completed';
        
        html += `
          <tr>
            <td>${data.name || 'Untitled'}</td>
            <td><code>${data.code}</code></td>
            <td class="text-small">${data.creatorEmail || 'Unknown'}</td>
            <td>${participants}/${maxParticipants}</td>
            <td><span class="status-badge ${statusClass}">${data.status || 'active'}</span></td>
            <td>${data.targetWPM} WPM</td>
            <td class="text-small text-muted">${endDate}</td>
            <td>
              <button class="btn btn-small btn-danger" onclick="deleteCompetition('${doc.id}')">Delete</button>
            </td>
          </tr>
        `;
      });
      
      tbody.innerHTML = html;
    } catch (error) {
      console.error('Error loading competitions:', error);
    }
  }
  
  // ==== DELETE COMPETITION ====
  window.deleteCompetition = async function(docId) {
    if (!confirm('Are you sure you want to delete this competition? This cannot be undone.')) {
      return;
    }
    
    try {
      await db.collection('competitions').doc(docId).delete();
      alert('Competition deleted successfully');
      await loadCompetitions();
    } catch (error) {
      console.error('Error deleting competition:', error);
      alert('Failed to delete competition');
    }
  };
  
  // ==== LOAD LESSONS STATS ====
  async function loadLessonsStats() {
    const content = document.getElementById('lesson-stats-content');
    if (content) {
      content.innerHTML = `
        <p class="text-muted">Lesson tracking data will be available when users start completing lessons.</p>
        <p class="text-small text-muted">This would require adding lesson progress to Firestore.</p>
      `;
    }
  }
  
  // ==== LOAD ACHIEVEMENTS STATS ====
  async function loadAchievementsStats() {
    const content = document.getElementById('achievement-stats-content');
    if (content) {
      content.innerHTML = `
        <p class="text-muted">Achievement tracking data will be available when users start unlocking achievements.</p>
        <p class="text-small text-muted">This would require adding achievement progress to Firestore.</p>
      `;
    }
  }
  
  // ==== LOAD SETTINGS ====
  function loadSettings() {
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
      lastUpdated.textContent = new Date().toLocaleString();
    }
  }
  
  // ==== REFRESH BUTTONS ====
  const refreshActivityBtn = document.getElementById('refresh-activity');
  if (refreshActivityBtn) {
    refreshActivityBtn.addEventListener('click', loadRecentActivity);
  }
  
  const refreshCompetitionsBtn = document.getElementById('refresh-competitions');
  if (refreshCompetitionsBtn) {
    refreshCompetitionsBtn.addEventListener('click', loadCompetitions);
  }
  
  // ==== EXPORT RESULTS ====
  const exportResultsBtn = document.getElementById('export-results-btn');
  if (exportResultsBtn) {
    exportResultsBtn.addEventListener('click', async () => {
      try {
        const resultsSnap = await db.collection('results').get();
        
        let csv = 'User Email,User ID,WPM,Accuracy,Duration,Difficulty,Mode,Date\n';
        
        for (const doc of resultsSnap.docs) {
          const data = doc.data();
          const date = data.timestamp?.toDate ? data.timestamp.toDate().toISOString() : 'N/A';
          const userEmail = data.email || data.userEmail || await getUserEmail(data.uid);
          csv += `"${userEmail}","${data.uid}",${data.wpm},${data.accuracy},${data.duration},"${data.difficulty || 'N/A'}","${data.mode || 'Random'}","${date}"\n`;
        }
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `softfingers-results-${Date.now()}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        alert('Results exported successfully!');
      } catch (error) {
        console.error('Error exporting results:', error);
        alert('Failed to export results');
      }
    });
  }
  
  // ==== SUPER ADMIN ACTIONS ====
  const backupDatabaseBtn = document.getElementById('backup-database-btn');
  if (backupDatabaseBtn) {
    backupDatabaseBtn.addEventListener('click', () => {
      alert('Database backup feature coming soon!\n\nThis would create a backup of all Firestore data.');
    });
  }
  
  const clearOldDataBtn = document.getElementById('clear-old-data-btn');
  if (clearOldDataBtn) {
    clearOldDataBtn.addEventListener('click', async () => {
      if (currentAdmin.role !== 'super_admin') {
        alert('Only super admins can perform this action');
        return;
      }
      
      if (!confirm('Are you sure you want to delete all data older than 90 days? This cannot be undone!')) {
        return;
      }
      
      try {
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
        
        const oldResults = await db.collection('results')
          .where('timestamp', '<', firebase.firestore.Timestamp.fromDate(ninetyDaysAgo))
          .get();
        
        const batch = db.batch();
        let count = 0;
        
        oldResults.forEach(doc => {
          batch.delete(doc.ref);
          count++;
        });
        
        if (count > 0) {
          await batch.commit();
          alert(`Successfully deleted ${count} old records`);
          await loadDashboardData();
        } else {
          alert('No old data found to delete');
        }
      } catch (error) {
        console.error('Error clearing old data:', error);
        alert('Failed to clear old data');
      }
    });
  }
  
  console.log('=== INITIALIZATION COMPLETE ===');
}

// Initialize when DOM and Firebase are ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded event fired');
    setTimeout(initializeApp, 1000);
  });
} else {
  console.log('DOM already loaded');
  setTimeout(initializeApp, 1000);
}
