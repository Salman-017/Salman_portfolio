// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");
  const businessCaseCards = document.querySelectorAll(".business-case-card");
  const modal = document.getElementById("businessCaseModal");
  const modalClose = document.querySelector(".modal-close");
  const contactForm = document.getElementById("contactForm");

  // Navigation between pages
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all nav links and pages
      navLinks.forEach((nav) => nav.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Add active class to clicked nav link
      this.classList.add("active");

      // Show corresponding page
      const targetPage = this.getAttribute("data-page");
      document.getElementById(targetPage).classList.add("active");
    });
  });

  // Business case modal functionality
  const businessCases = {
    case1: {
      title: "Digital Transformation in Retail",
      content: `
                <div class="business-case-content">
                    <h3>Executive Summary</h3>
                    <p>This case study examines the digital transformation journey of a traditional retail company, exploring the challenges, strategies, and outcomes of modernizing business operations in the digital age.</p>
                    
                    <h3>Background</h3>
                    <p>The retail industry has undergone significant changes with the rise of e-commerce and changing consumer behaviors. Traditional brick-and-mortar stores face increasing pressure to adapt or risk becoming obsolete.</p>
                    
                    <h4>Key Challenges</h4>
                    <ul>
                        <li>Declining foot traffic in physical stores</li>
                        <li>Increased competition from online retailers</li>
                        <li>Changing consumer expectations for omnichannel experiences</li>
                        <li>Legacy systems limiting operational efficiency</li>
                    </ul>
                    
                    <h3>Strategic Approach</h3>
                    <p>The company implemented a comprehensive digital transformation strategy focusing on:</p>
                    
                    <h4>Technology Integration</h4>
                    <ul>
                        <li>Implementation of cloud-based inventory management systems</li>
                        <li>Development of mobile applications for enhanced customer experience</li>
                        <li>Integration of AI-powered recommendation engines</li>
                        <li>Adoption of contactless payment solutions</li>
                    </ul>
                    
                    <h4>Customer Experience Enhancement</h4>
                    <ul>
                        <li>Omnichannel shopping experiences</li>
                        <li>Personalized marketing campaigns</li>
                        <li>Real-time customer support through chatbots</li>
                        <li>Loyalty program digitization</li>
                    </ul>
                    
                    <h3>Implementation Results</h3>
                    <p>The digital transformation initiative yielded significant improvements:</p>
                    <ul>
                        <li>35% increase in online sales within the first year</li>
                        <li>25% improvement in customer satisfaction scores</li>
                        <li>20% reduction in operational costs</li>
                        <li>15% increase in customer retention rates</li>
                    </ul>
                    
                    <h3>Lessons Learned</h3>
                    <p>Key takeaways from this transformation include the importance of employee training, gradual implementation phases, and continuous customer feedback integration.</p>
                </div>
            `,
    },
    case2: {
      title: "Startup Growth Strategy Analysis",
      content: `
                <div class="business-case-content">
                    <h3>Executive Summary</h3>
                    <p>This case study analyzes the growth strategy of a successful tech startup, examining the methodologies, challenges, and key decisions that led to rapid scaling and market penetration.</p>
                    
                    <h3>Company Background</h3>
                    <p>Founded in 2020, this SaaS startup focused on providing project management solutions for remote teams. Starting with a team of 5, they scaled to over 200 employees within 3 years.</p>
                    
                    <h4>Initial Market Conditions</h4>
                    <ul>
                        <li>Increased demand for remote work solutions due to global events</li>
                        <li>Saturated market with established competitors</li>
                        <li>Limited initial funding and resources</li>
                        <li>Need for rapid product-market fit validation</li>
                    </ul>
                    
                    <h3>Growth Strategy Framework</h3>
                    
                    <h4>Product Development Approach</h4>
                    <ul>
                        <li>Minimum Viable Product (MVP) development</li>
                        <li>Rapid iteration based on user feedback</li>
                        <li>Focus on core features that solve specific pain points</li>
                        <li>Scalable architecture from day one</li>
                    </ul>
                    
                    <h4>Customer Acquisition Strategy</h4>
                    <ul>
                        <li>Content marketing and SEO optimization</li>
                        <li>Strategic partnerships with complementary services</li>
                        <li>Referral programs and viral growth mechanisms</li>
                        <li>Targeted social media advertising</li>
                    </ul>
                    
                    <h4>Funding and Investment</h4>
                    <ul>
                        <li>Bootstrap phase with personal savings</li>
                        <li>Seed funding from angel investors</li>
                        <li>Series A funding for scaling operations</li>
                        <li>Strategic use of funds for growth acceleration</li>
                    </ul>
                    
                    <h3>Key Metrics and Results</h3>
                    <p>The startup achieved remarkable growth metrics:</p>
                    <ul>
                        <li>Monthly Recurring Revenue (MRR) growth of 15% month-over-month</li>
                        <li>Customer Acquisition Cost (CAC) reduced by 40% over 18 months</li>
                        <li>Customer Lifetime Value (LTV) increased by 60%</li>
                        <li>Net Promoter Score (NPS) of 72</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    <h4>Scaling Infrastructure</h4>
                    <p>As user base grew rapidly, the team faced technical challenges in maintaining performance and reliability. Solutions included cloud migration, microservices architecture, and automated scaling.</p>
                    
                    <h4>Team Building</h4>
                    <p>Rapid hiring while maintaining company culture required structured onboarding processes, clear communication channels, and strong leadership development.</p>
                    
                    <h3>Future Outlook</h3>
                    <p>The company continues to focus on international expansion, enterprise customer acquisition, and product diversification while maintaining their core values and customer-centric approach.</p>
                </div>
            `,
    },
    case3: {
      title: "Innovation in Financial Technology",
      content: `
                <div class="business-case-content">
                    <h3>Executive Summary</h3>
                    <p>This case study explores how a traditional financial institution successfully innovated through technology adoption, regulatory compliance, and customer experience transformation in the fintech era.</p>
                    
                    <h3>Industry Context</h3>
                    <p>The financial services industry has been disrupted by fintech startups offering faster, more convenient, and often cheaper alternatives to traditional banking services.</p>
                    
                    <h4>Market Pressures</h4>
                    <ul>
                        <li>Increasing customer expectations for digital services</li>
                        <li>Competition from agile fintech startups</li>
                        <li>Regulatory requirements for digital transformation</li>
                        <li>Need for operational efficiency improvements</li>
                    </ul>
                    
                    <h3>Innovation Strategy</h3>
                    
                    <h4>Digital Banking Platform</h4>
                    <ul>
                        <li>Mobile-first banking application development</li>
                        <li>Real-time transaction processing and notifications</li>
                        <li>AI-powered financial advisory services</li>
                        <li>Blockchain integration for secure transactions</li>
                    </ul>
                    
                    <h4>Customer Experience Transformation</h4>
                    <ul>
                        <li>Personalized financial dashboards and insights</li>
                        <li>24/7 customer support through AI chatbots</li>
                        <li>Simplified onboarding and KYC processes</li>
                        <li>Integration with third-party financial services</li>
                    </ul>
                    
                    <h4>Operational Innovation</h4>
                    <ul>
                        <li>Automated risk assessment and loan approval</li>
                        <li>Predictive analytics for fraud detection</li>
                        <li>Cloud-based infrastructure for scalability</li>
                        <li>API-first architecture for partner integrations</li>
                    </ul>
                    
                    <h3>Implementation Challenges</h3>
                    
                    <h4>Regulatory Compliance</h4>
                    <p>Navigating complex financial regulations while implementing new technologies required close collaboration with regulatory bodies and extensive compliance testing.</p>
                    
                    <h4>Legacy System Integration</h4>
                    <p>Integrating modern solutions with existing legacy systems posed technical challenges that were addressed through phased migration and API development.</p>
                    
                    <h4>Security and Trust</h4>
                    <p>Maintaining customer trust while implementing new technologies required robust security measures, transparent communication, and gradual feature rollouts.</p>
                    
                    <h3>Results and Impact</h3>
                    <ul>
                        <li>50% increase in digital banking adoption among existing customers</li>
                        <li>30% reduction in operational costs through automation</li>
                        <li>25% improvement in customer satisfaction scores</li>
                        <li>40% faster loan approval processes</li>
                        <li>60% reduction in fraud-related losses</li>
                    </ul>
                    
                    <h3>Strategic Partnerships</h3>
                    <p>The institution formed strategic partnerships with fintech companies, technology providers, and regulatory technology firms to accelerate innovation while maintaining compliance.</p>
                    
                    <h3>Future Roadmap</h3>
                    <p>Continued focus on emerging technologies including cryptocurrency services, advanced AI applications, and sustainable finance solutions positions the institution for future growth and innovation.</p>
                </div>
            `,
    },
    case4: {
      title: "E-commerce Market Analysis",
      content: `
                <div class="business-case-content">
                    <h3>Executive Summary</h3>
                    <p>This comprehensive analysis examines the current state of the e-commerce market, identifying key trends, consumer behaviors, and strategic opportunities for businesses looking to establish or expand their online presence.</p>
                    
                    <h3>Market Overview</h3>
                    <p>The global e-commerce market has experienced unprecedented growth, accelerated by changing consumer preferences and technological advancements. This analysis covers market size, growth projections, and key drivers.</p>
                    
                    <h4>Market Size and Growth</h4>
                    <ul>
                        <li>Global e-commerce sales reached $5.2 trillion in 2023</li>
                        <li>Expected compound annual growth rate (CAGR) of 14.7% through 2027</li>
                        <li>Mobile commerce accounts for 72.9% of total e-commerce sales</li>
                        <li>Cross-border e-commerce growing at 27% annually</li>
                    </ul>
                    
                    <h3>Consumer Behavior Analysis</h3>
                    
                    <h4>Shopping Preferences</h4>
                    <ul>
                        <li>Preference for omnichannel shopping experiences</li>
                        <li>Increased demand for same-day and next-day delivery</li>
                        <li>Growing importance of product reviews and social proof</li>
                        <li>Rising expectations for personalized recommendations</li>
                    </ul>
                    
                    <h4>Demographic Insights</h4>
                    <ul>
                        <li>Gen Z and Millennials drive 67% of online purchases</li>
                        <li>Baby Boomers showing increased adoption of e-commerce</li>
                        <li>Rural markets emerging as significant growth opportunities</li>
                        <li>Gender-neutral shopping patterns becoming more prevalent</li>
                    </ul>
                    
                    <h3>Technology Trends</h3>
                    
                    <h4>Emerging Technologies</h4>
                    <ul>
                        <li>Artificial Intelligence for personalization and chatbots</li>
                        <li>Augmented Reality for virtual try-on experiences</li>
                        <li>Voice commerce through smart speakers</li>
                        <li>Blockchain for supply chain transparency</li>
                    </ul>
                    
                    <h4>Platform Evolution</h4>
                    <ul>
                        <li>Headless commerce architectures gaining popularity</li>
                        <li>Progressive Web Apps improving mobile experiences</li>
                        <li>Social commerce integration with platforms like Instagram and TikTok</li>
                        <li>Subscription-based business models expanding across categories</li>
                    </ul>
                    
                    <h3>Competitive Landscape</h3>
                    
                    <h4>Market Leaders</h4>
                    <p>Analysis of major players including Amazon, Alibaba, and emerging regional champions, examining their strategies, strengths, and market positioning.</p>
                    
                    <h4>Niche Opportunities</h4>
                    <ul>
                        <li>Sustainable and eco-friendly products</li>
                        <li>Health and wellness categories</li>
                        <li>B2B e-commerce platforms</li>
                        <li>Luxury goods online retail</li>
                    </ul>
                    
                    <h3>Challenges and Barriers</h3>
                    
                    <h4>Operational Challenges</h4>
                    <ul>
                        <li>Supply chain disruptions and logistics costs</li>
                        <li>Customer acquisition costs rising across channels</li>
                        <li>Inventory management complexity</li>
                        <li>Returns and refunds processing</li>
                    </ul>
                    
                    <h4>Regulatory Considerations</h4>
                    <ul>
                        <li>Data privacy regulations (GDPR, CCPA)</li>
                        <li>Tax compliance across multiple jurisdictions</li>
                        <li>Consumer protection laws</li>
                        <li>Platform liability regulations</li>
                    </ul>
                    
                    <h3>Strategic Recommendations</h3>
                    
                    <h4>For New Entrants</h4>
                    <ul>
                        <li>Focus on niche markets with underserved customer needs</li>
                        <li>Invest in mobile-first user experiences</li>
                        <li>Build strong logistics and fulfillment capabilities</li>
                        <li>Develop data-driven personalization strategies</li>
                    </ul>
                    
                    <h4>For Established Players</h4>
                    <ul>
                        <li>Expand into emerging markets and categories</li>
                        <li>Invest in advanced analytics and AI capabilities</li>
                        <li>Develop sustainable business practices</li>
                        <li>Create ecosystem partnerships for enhanced value propositions</li>
                    </ul>
                    
                    <h3>Future Outlook</h3>
                    <p>The e-commerce landscape will continue evolving with new technologies, changing consumer expectations, and global economic factors. Success will depend on adaptability, customer-centricity, and strategic innovation.</p>
                </div>
            `,
    },
    case5: {
      title: "Sustainable Business Practices",
      content: `
                <div class="business-case-content">
                    <h3>Executive Summary</h3>
                    <p>This case study examines how modern companies are integrating sustainability into their core business strategies, exploring the drivers, implementation approaches, and measurable impacts of sustainable business practices.</p>
                    
                    <h3>The Sustainability Imperative</h3>
                    <p>Growing environmental concerns, regulatory pressures, and consumer expectations are driving companies to adopt sustainable practices as a business necessity rather than just a corporate social responsibility initiative.</p>
                    
                    <h4>Key Drivers</h4>
                    <ul>
                        <li>Climate change and environmental degradation concerns</li>
                        <li>Regulatory requirements and carbon pricing mechanisms</li>
                        <li>Consumer preference for sustainable brands</li>
                        <li>Investor focus on ESG (Environmental, Social, Governance) criteria</li>
                        <li>Supply chain resilience and risk management</li>
                    </ul>
                    
                    <h3>Sustainability Framework</h3>
                    
                    <h4>Environmental Initiatives</h4>
                    <ul>
                        <li>Carbon footprint reduction and net-zero commitments</li>
                        <li>Renewable energy adoption and energy efficiency</li>
                        <li>Waste reduction and circular economy principles</li>
                        <li>Water conservation and responsible sourcing</li>
                        <li>Sustainable packaging and product design</li>
                    </ul>
                    
                    <h4>Social Responsibility</h4>
                    <ul>
                        <li>Fair labor practices and employee wellbeing</li>
                        <li>Diversity, equity, and inclusion programs</li>
                        <li>Community engagement and social impact initiatives</li>
                        <li>Ethical supply chain management</li>
                        <li>Product safety and consumer protection</li>
                    </ul>
                    
                    <h4>Governance Excellence</h4>
                    <ul>
                        <li>Transparent reporting and accountability</li>
                        <li>Ethical business practices and anti-corruption measures</li>
                        <li>Stakeholder engagement and materiality assessments</li>
                        <li>Board diversity and independent oversight</li>
                        <li>Risk management and crisis preparedness</li>
                    </ul>
                    
                    <h3>Implementation Strategies</h3>
                    
                    <h4>Setting Science-Based Targets</h4>
                    <p>Companies are adopting science-based targets aligned with climate science to ensure their sustainability goals contribute meaningfully to global environmental objectives.</p>
                    
                    <h4>Circular Economy Integration</h4>
                    <ul>
                        <li>Design for durability, repairability, and recyclability</li>
                        <li>Product-as-a-Service business models</li>
                        <li>Closed-loop manufacturing processes</li>
                        <li>Partnerships for material recovery and reuse</li>
                    </ul>
                    
                    <h4>Supply Chain Transformation</h4>
                    <ul>
                        <li>Supplier sustainability assessments and certifications</li>
                        <li>Local sourcing to reduce transportation emissions</li>
                        <li>Collaborative sustainability initiatives with partners</li>
                        <li>Traceability and transparency throughout the value chain</li>
                    </ul>
                    
                    <h3>Case Study: Technology Company Transformation</h3>
                    
                    <h4>Background</h4>
                    <p>A major technology company committed to becoming carbon neutral across its entire value chain by 2030, implementing comprehensive sustainability measures across operations, products, and partnerships.</p>
                    
                    <h4>Key Initiatives</h4>
                    <ul>
                        <li>100% renewable energy for all facilities by 2025</li>
                        <li>Carbon-negative data centers through innovative cooling and energy systems</li>
                        <li>Sustainable product design with recycled materials</li>
                        <li>$1 billion climate innovation fund for breakthrough technologies</li>
                        <li>AI-powered sustainability solutions for customers</li>
                    </ul>
                    
                    <h4>Results Achieved</h4>
                    <ul>
                        <li>60% reduction in carbon emissions since 2020</li>
                        <li>$2.7 billion in cost savings from efficiency improvements</li>
                        <li>25% increase in employee engagement scores</li>
                        <li>40% improvement in brand perception among environmentally conscious consumers</li>
                        <li>15% premium in stock valuation attributed to ESG factors</li>
                    </ul>
                    
                    <h3>Measuring Impact</h3>
                    
                    <h4>Key Performance Indicators</h4>
                    <ul>
                        <li>Greenhouse gas emissions (Scope 1, 2, and 3)</li>
                        <li>Energy consumption and renewable energy percentage</li>
                        <li>Water usage and waste generation metrics</li>
                        <li>Employee diversity and satisfaction scores</li>
                        <li>Supplier sustainability compliance rates</li>
                    </ul>
                    
                    <h4>Reporting Standards</h4>
                    <ul>
                        <li>Global Reporting Initiative (GRI) framework</li>
                        <li>Sustainability Accounting Standards Board (SASB) metrics</li>
                        <li>Task Force on Climate-related Financial Disclosures (TCFD)</li>
                        <li>UN Sustainable Development Goals alignment</li>
                    </ul>
                    
                    <h3>Challenges and Solutions</h3>
                    
                    <h4>Common Obstacles</h4>
                    <ul>
                        <li>Initial investment costs and ROI concerns</li>
                        <li>Complexity of measuring and reporting impact</li>
                        <li>Resistance to change within organizations</li>
                        <li>Balancing sustainability with profitability</li>
                        <li>Lack of standardized metrics and benchmarks</li>
                    </ul>
                    
                    <h4>Success Factors</h4>
                    <ul>
                        <li>Strong leadership commitment and tone from the top</li>
                        <li>Integration of sustainability into business strategy</li>
                        <li>Employee engagement and training programs</li>
                        <li>Stakeholder collaboration and partnerships</li>
                        <li>Continuous innovation and improvement mindset</li>
                    </ul>
                    
                    <h3>Future Trends</h3>
                    
                    <h4>Emerging Opportunities</h4>
                    <ul>
                        <li>Nature-based solutions and biodiversity conservation</li>
                        <li>Regenerative business models that restore ecosystems</li>
                        <li>Digital technologies for sustainability optimization</li>
                        <li>Sustainable finance and green investment products</li>
                        <li>Collaborative platforms for industry-wide transformation</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Sustainable business practices are no longer optional but essential for long-term success. Companies that proactively integrate sustainability into their operations, products, and culture will be better positioned to thrive in an increasingly environmentally conscious world while creating value for all stakeholders.</p>
                </div>
            `,
    },
  };

  // Open business case modal
  businessCaseCards.forEach((card) => {
    card.addEventListener("click", function () {
      const caseId = this.getAttribute("data-case");
      const caseData = businessCases[caseId];

      if (caseData) {
        document.getElementById("modalTitle").textContent = caseData.title;
        document.getElementById("modalBody").innerHTML = caseData.content;
        modal.style.display = "block";
      }
    });
  });

  // Close modal
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Contact form handling
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Create mailto link
    const mailtoLink = `mailto:shaileshpawale734@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      "Email client opened! Please send the email to complete your message."
    );

    // Reset form
    this.reset();
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  themeToggle.addEventListener("click", function () {
    // Add theme switching logic here if needed
    console.log("Theme toggle clicked");
  });

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // On page load, set theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add animation on scroll for timeline items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe timeline items for animation
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });

  // Observe business case cards for animation
  const caseCards = document.querySelectorAll(".business-case-card");
  caseCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});
