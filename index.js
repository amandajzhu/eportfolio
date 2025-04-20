const template = document.createElement('template');

template.innerHTML = `
    <nav>
        <a href="../index.html">Amanda Zhu - ePortfolio</a>
    </nav>
`;

document.body.prepend(template.content);

template.innerHTML = `
    <div class="footer">
        <p>Amanda Zhu, 2025-04-20</p>
    </div>
`;

document.body.appendChild(template.content);