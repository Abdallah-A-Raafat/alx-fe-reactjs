function Services() {
  const serviceItems = [
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy and implementation"
    },
    {
      title: "Market Analysis", 
      description: "Comprehensive market research and competitive analysis"
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to launch"
    }
  ];

  return (
    <div style={{ 
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: 'white',
      margin: '20px auto',
      maxWidth: '800px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '2.5em',
        marginBottom: '20px'
      }}>
        Our Services
      </h1>
      <p style={{ 
        fontSize: '1.1em',
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '30px'
      }}>
        We offer a comprehensive range of professional services designed to help your business succeed.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {serviceItems.map((service, index) => (
          <div key={index} style={{
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            transition: 'transform 0.3s ease'
          }}>
            <h3 style={{ 
              color: '#333',
              marginBottom: '15px',
              fontSize: '1.3em'
            }}>
              {service.title}
            </h3>
            <p style={{ 
              color: '#666',
              margin: 0,
              lineHeight: '1.5'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
