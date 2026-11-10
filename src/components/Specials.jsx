function Specials() {
  const specialsData = [
    { id: 1, title: "Greek Salad", price: "$12.99", desc: "Crispy romaine, olives, and feta cheese." },
    { id: 2, title: "Bruchetta", price: "$5.99", desc: "Grilled bread rubbed with garlic and seasoned." },
    { id: 3, title: "Lemon Dessert", price: "$5.00", desc: "Authentic recipe, straight from grandmother’s book." }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <button className="btn-primary">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialsData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title} <span>{item.price}</span></h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;