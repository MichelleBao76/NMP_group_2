// Mock Data
let projects = [
    {
        id: '1',
        name: 'Alameda County Public Health Department',
        description: 'Streamlined and accessible way to visualize accreditation process across domains, measures, and standards, including submission status and completing progress, using existing spreadsheet and Microsoft Suite visualization tools.',
        techStack: ['Microsoft Sharepoint', 'Power BI', 'Microsoft SmartSheets', 'SQL'],
        githubLink: 'https://github.com/team/alameda',
        designLink: 'https://figma.com/design/alameda',
        taskBoardLink: 'https://notion.so/alameda',
        teamMembers: [
            { name: 'Anirra Kutty', role: 'Project Manager', contact: 'anirra_kutty@berkeley.edu' },
            { name: 'Priya Darshini Venkatesan', role: 'Project Manager', contact: 'priyavenkatesan@berkeley.edu' },
            { name: 'Srikala Munukutla', role: 'Software Developer', contact: 'srikala.v.munukutla@berkeley.edu' },
            { name: 'Rajan Prem Tavathia', role: 'Software Developer', contact: 'rtavathia@berkeley.edu' },
            { name: 'Mikayla Gu Acosta', role: 'Software Developer', contact: 'macosta28@berkeley.edu' },
            { name: 'Ariana Ghimire', role: 'Software Developer', contact: 'arianaghimire27@berkeley.edu' },
            { name: 'Ethan Jang', role: 'Software Developer', contact: 'eef.jang@berkeley.edu' },
        ],
        roadmap: [
            'August 2025: Project Kickoff',
            'September 2025: Requirements Gathering',
            'October 2025: Design Phase',
            'November 2025: Development Phase'
        ],
        status: 'Completed'
    },
    {
        id: '2',
        name: 'Wadhwani AI',
        description: 'AI-enabled Early Grade Reading Assessment (EGRA) system that digitizes reading fluency checks, automates scoring, and delivers targeted remediation at classroom scale through a teacher-friendly mobile app.',
        techStack: ['Python', 'LLMs', 'Speech Recognition Models', 'NLP', 'API'],
        githubLink: 'https://github.com/team/analytics-dashboard',
        designLink: 'https://figma.com/design/analytics',
        taskBoardLink: 'https://jira.com/analytics-project',
        teamMembers: [
            { name: 'Shruti Sujal Vora', role: 'Project Manager', contact: 'shruti.s.vora@berkeley.edu' },
            { name: 'Sejal Bilwar', role: 'Project Manager', contact: 'sejalbilwar@berkeley.edu' },
            { name: 'Aniket Gupta', role: 'Full Stack Developer', contact: 'aniket.gupta@berkeley.edu' },
            { name: 'Ashwin Ravuru Kalyan', role: 'Underwater Basket Weaver', contact: 'ashwinkalyan@berkeley.edu' },
            { name: 'Edwin Lee', role: 'Full Stack Developer', contact: 'jlee121@berkeley.edu' },
            { name: 'Felicia Heng', role: 'Data Engineer', contact: 'feliciahxy@berkeley.edu' },
            { name: 'Madeline Louise Agusalim', role: 'Data Engineer', contact: 'maddy11@berkeley.edu' },
            { name: 'Peyton A Li', role: 'Data Engineer', contact: 'peli@berkeley.edu' },
            { name: 'Shayla He', role: 'Data Engineer', contact: 'shaylahe@berkeley.edu' },

        ],
        roadmap: [
            'August 2025: Project Kickoff',
            'September 2025: Data Collection & Model Training',
            'October 2025: Pilot Testing & Feedback',
            'November 2025: Prayer & Test Launch'
        ],
        status: 'Review'
    },
    {
        id: '3',
        name: 'Tukuypaj',
        description: 'Pair of 3D printed robotic arms trained with ACT policies (RL) to teach the arms how to execute feeding motions from a diverse set of environments.',
        techStack: ['3D Modeling', 'ML Models', 'LeRobot Teleoperation Libraries', 'CAD'],
        githubLink: 'https://github.com/team/fitness-app',
        designLink: 'https://figma.com/design/fitness-app',
        taskBoardLink: 'https://trello.com/b/fitness',
        teamMembers: [
            { name: 'Shreya Sujal Vora', role: 'Project Manager', contact: 'shreya.sm.vora@berkeley.edu' },
            { name: 'Sarah Zhang', role: 'Project Manager', contact: 'sarahzh@berkeley.edu' },
            { name: 'Bo Wang', role: 'Android Developer', contact: 'bo.wang@berkeley.edu' },
            { name: 'Stephen Park', role: 'Product Designer', contact: 's.park0@berkeley.edu' },
            { name: 'Joey Kamei', role: 'Product Designer', contact: 'joelkamei@berkeley.edu' },
            { name: 'Aryan Das', role: 'Product Designer', contact: 'aryandas@berkeley.edu' },
            { name: 'Jamie Jang', role: 'Product Designer', contact: '02jamiejang@berkeley.edu' },
        ],
        roadmap: [
            'August 2025: Project Kickoff',
            'September 2025: Requirements Gathering',
            'October 2025: Design Phase',
            'November 2025: Development Phase'
        ],
        status: 'Completed'
    },
    {
        id: '4',
        name: 'San Jose Museum of Art',
        description: 'Data and machine learning analysis of visitor data, exhibition trends, and other relevant information to help SJMA enhance visitor engagement and understand their audience.',
        techStack: ['Python', 'SQL', 'Pandas', 'PyTorch'],
        githubLink: 'https://github.com/team/hr-portal',
        designLink: 'https://figma.com/design/hr-portal',
        taskBoardLink: 'https://notion.so/hr-portal',
        teamMembers: [
            { name: 'Sara Jangid', role: 'Project Manager', contact: 'sarajangid@berkeley.edu' },
            { name: 'Krithika Singh', role: 'Data Analyst', contact: 'krithikasingh@berkeley.edu' },
            { name: 'Caden Lewis', role: 'Data Analyst', contact: 'cadenlewis@berkeley.edu' },
            { name: 'Cameron Leung', role: 'Project Manager', contact: 'cameronleung@berkeley.edu' },
            { name: 'David Tan', role: 'Software Developer', contact: 'david_tan@berkeley.edu' },
            { name: 'Divij Muthu', role: 'ML Engineer', contact: 'divij_muthu@berkeley.edu' },
            { name: 'Gurmeher Bhasin', role: 'Project Developer', contact: 'gurmeher@berkeley.edu' },
            { name: 'Riya Sameer Khasnis', role: 'Client Coordinator', contact: 'riya_khasnis@berkeley.edu' },
        ],
        roadmap: [
            'August 2025: Project Kickoff',
            'September 2025: Requirements Gathering',
            'October 2025: Design Phase',
            'November 2025: Development Phase'
        ],
        status: 'In Progress'
    },
   
];

// State
let currentView = 'projects';
let searchQuery = '';
let filterStatus = 'All';
let sortBy = 'name';

// DOM Elements
const projectsViewBtn = document.getElementById('projectsViewBtn');
const teamViewBtn = document.getElementById('teamViewBtn');
const projectsView = document.getElementById('projectsView');
const teamView = document.getElementById('teamView');
const projectFilters = document.getElementById('projectFilters');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const statusFilters = document.querySelectorAll('.filter-btn');
const newProjectBtn = document.getElementById('newProjectBtn');
const projectModal = document.getElementById('projectModal');
const newProjectModal = document.getElementById('newProjectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const closeNewProjectModal = document.getElementById('closeNewProjectModal');
const cancelNewProject = document.getElementById('cancelNewProject');
const newProjectForm = document.getElementById('newProjectForm');

// Helper
function getStatusClass(status) {
    return status.toLowerCase().replace(/\s+/g, '-');
}
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

// Project Renderer
function renderProjects() {
    let filtered = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery) ||
                              project.description.toLowerCase().includes(searchQuery) ||
                              project.techStack.some(t => t.toLowerCase().includes(searchQuery));
        const matchesFilter = filterStatus === 'All' || project.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    filtered.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'status') return a.status.localeCompare(b.status);
        if (sortBy === 'teamSize') return b.teamMembers.length - a.teamMembers.length;
        return 0;
    });

    projectsView.innerHTML = filtered.map(project => `
        <div class="project-card" data-id="${project.id}">
            <div class="project-header">
                <h3 class="project-name">${project.name}</h3>
                <span class="status-badge status-${getStatusClass(project.status)}">${project.status}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.slice(0, 3).map(t => `<span class="tech-badge">${t}</span>`).join('')}
                ${project.techStack.length > 3 ? `<span class="tech-badge">+${project.techStack.length - 3} more</span>` : ''}
            </div>
            <div class="project-links">
                <div><span>GitHub</span></div>
                <div><span>Design</span></div>
                <div><span>Tasks</span></div>
            </div>
            <div class="team-avatars">
                <div class="avatars-list">
                    ${project.teamMembers.slice(0, 3).map(member => `
                        <div class="avatar">${getInitials(member.name)}</div>
                    `).join('')}
                    ${project.teamMembers.length > 3 ? `<div class="avatar count">+${project.teamMembers.length - 3}</div>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => showProjectModal(card.dataset.id));
    });
}

// Show Project Modal
function showProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.body.classList.add('modal-open');

    document.getElementById('modalProjectName').textContent = project.name;
    const statusBadge = document.getElementById('modalProjectStatus');
    statusBadge.textContent = project.status;
    statusBadge.className = `status-badge status-${getStatusClass(project.status)}`;

    document.getElementById('projectModalBody').innerHTML = `
        <div class="modal-section">
            <h3>Description</h3>
            <p>${project.description}</p>
        </div>

        <div class="modal-section">
            <h3>Tech Stack</h3>
            <div class="tech-stack">
                ${project.techStack.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Project Links</h3>
            <div class="link-list">
                <a href="${project.githubLink}" target="_blank" class="link-item">
                    <div class="link-title">GitHub Repository</div>
                    <div class="link-url">${project.githubLink}</div>
                </a>
                <a href="${project.designLink}" target="_blank" class="link-item">
                    <div class="link-title">Design Documentation</div>
                    <div class="link-url">${project.designLink}</div>
                </a>
                <a href="${project.taskBoardLink}" target="_blank" class="link-item">
                    <div class="link-title">Task Board</div>
                    <div class="link-url">${project.taskBoardLink}</div>
                </a>
            </div>
        </div>

        <div class="modal-section">
            <h3>Team Members</h3>
            <div class="member-list">
                ${project.teamMembers.map(member => `
                    <div class="member-item">
                        <div class="member-item-avatar">${getInitials(member.name)}</div>
                        <div class="member-item-info">
                            <div class="member-name">${member.name}</div>
                            <div class="member-item-role">${member.role}</div>
                        </div>
                        <a href="mailto:${member.contact}" class="member-contact-link">
                            Contact
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>Project Roadmap & Status</h3>
            <div class="roadmap-list">
                ${project.roadmap.map((milestone, index) => `
                    <div class="roadmap-item">
                        <div>
                            <div class="roadmap-number">${index + 1}</div>
                            ${index < project.roadmap.length - 1 ? '<div class="roadmap-connector"></div>' : ''}
                        </div>
                        <p class="roadmap-text">${milestone}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    projectModal.classList.add('active');
}

// Team Directory
function renderTeamDirectory() {
    const memberMap = new Map();
    projects.forEach(project => {
        project.teamMembers.forEach(member => {
            const key = member.contact.toLowerCase();
            if (!memberMap.has(key)) {
                memberMap.set(key, { ...member, projects: [] });
            }
            memberMap.get(key).projects.push(project.name);
        });
    });

    const members = Array.from(memberMap.values());
    members.sort((a, b) => a.name.localeCompare(b.name));

    teamView.innerHTML = `
        <div class="team-grid">
            ${members.map(member => `
                <div class="member-item">
                    <div class="member-item-avatar">${getInitials(member.name)}</div>
                    <div class="member-item-info">
                        <div class="member-name">${member.name}</div>
                        <div class="member-item-role">${member.role}</div>
                    </div>
                    <a href="mailto:${member.contact}" class="member-contact-link">Contact</a>
                </div>
            `).join('')}
        </div>
    `;
}

// UI Actions
projectsViewBtn.addEventListener('click', () => {
    currentView = 'projects';
    projectsView.style.display = 'grid';
    teamView.style.display = 'none';
    projectFilters.style.display = 'flex';
    renderProjects();
});

teamViewBtn.addEventListener('click', () => {
    currentView = 'team';
    projectsView.style.display = 'none';
    teamView.style.display = 'block';
    projectFilters.style.display = 'none';
    renderTeamDirectory();
});

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProjects();
});

sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProjects();
});

statusFilters.forEach(btn => btn.addEventListener('click', () => {
    statusFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterStatus = btn.dataset.status;
    renderProjects();
}));

newProjectBtn.addEventListener('click', () => {
    document.body.classList.add('modal-open');
    newProjectModal.classList.add('active');
});

closeProjectModal.addEventListener('click', () => {
    projectModal.classList.remove('active');
    document.body.classList.remove('modal-open');
});

closeNewProjectModal.addEventListener('click', () => {
    newProjectModal.classList.remove('active');
    document.body.classList.remove('modal-open');
});

cancelNewProject.addEventListener('click', () => {
    newProjectModal.classList.remove('active');
    document.body.classList.remove('modal-open');
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

newProjectModal.addEventListener('click', (e) => {
    if (e.target === newProjectModal) {
        newProjectModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

// Dynamic fields
document.getElementById('addTechBtn').addEventListener('click', () => {
    const container = document.getElementById('techStackContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'tech-input';
    input.placeholder = 'E.g., React, Node.js, PostgreSQL';
    container.appendChild(input);
});

document.getElementById('addMemberBtn').addEventListener('click', () => {
    const container = document.getElementById('teamMembersContainer');
    const row = document.createElement('div');
    row.className = 'team-member-row';
    row.innerHTML = `
        <input type="text" placeholder="Name" class="member-name">
        <input type="text" placeholder="Role" class="member-role">
        <input type="email" placeholder="Email" class="member-email">
    `;
    container.appendChild(row);
});

document.getElementById('addRoadmapBtn').addEventListener('click', () => {
    const container = document.getElementById('roadmapContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'roadmap-input';
    input.placeholder = 'E.g., Q1 2025: MVP Launch';
    container.appendChild(input);
});

// Form Submit
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const status = document.getElementById('projectStatus').value;
    const githubLink = document.getElementById('githubLink').value;
    const designLink = document.getElementById('designLink').value;
    const taskBoardLink = document.getElementById('taskBoardLink').value;

    const techStack = Array.from(document.querySelectorAll('.tech-input'))
        .map(input => input.value)
        .filter(val => val.trim() !== '');

    const teamMembers = Array.from(document.querySelectorAll('.team-member-row')).map(row => ({
        name: row.querySelector('.member-name').value,
        role: row.querySelector('.member-role').value,
        contact: row.querySelector('.member-email').value
    })).filter(member => member.name.trim() !== '');

    const roadmap = Array.from(document.querySelectorAll('.roadmap-input'))
        .map(input => input.value)
        .filter(val => val.trim() !== '');

    const newProject = {
        id: Date.now().toString(),
        name,
        description,
        status,
        techStack,
        githubLink,
        designLink,
        taskBoardLink,
        teamMembers,
        roadmap
    };

    projects.unshift(newProject);
    newProjectForm.reset();
    newProjectModal.classList.remove('active');
    document.body.classList.remove('modal-open');

    document.getElementById('techStackContainer').innerHTML =
        '<input type="text" class="tech-input" placeholder="E.g., React, Node.js, PostgreSQL">';

    document.getElementById('teamMembersContainer').innerHTML = `
        <div class="team-member-row">
            <input type="text" placeholder="Name" class="member-name">
            <input type="text" placeholder="Role" class="member-role">
            <input type="email" placeholder="Email" class="member-email">
        </div>`;

    document.getElementById('roadmapContainer').innerHTML =
        '<input type="text" class="roadmap-input" placeholder="E.g., Q1 2025: MVP Launch">';

    renderProjects();
});

// Initialize
renderProjects();
