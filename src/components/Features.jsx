import Feature from "./Feature";

function Features() {
  const positions = [
    {
      department: "SDE",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/40588/logo/optimized/0410-HiringGuide-FullstackDeveloper-Luke_ResourceIcon-974e1bf67c98d7516bf440d9690a85b3.png",
    },
    {
      department: "full stack",
      image: "https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png",
    },
    {
      department: "web3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBUhBnKe1z6YA3XmKLLwKf6gb1JwruSjzgA&s",
    },
    {
      department: "marketing",
      image:
        "https://img.freepik.com/premium-vector/digital-marketing-logo-design_626969-523.jpg",
    },
    {
      department: "ux ui",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Zf7pTqHbSFpy1mP26xhVvMjMHl5z9SfPfw&s",
    },
    {
      department: "audict",
      image:
        "https://m.economictimes.com/thumb/height-450,width-600,imgsize-122134,msid-99508823/cyber-security-istock.jpg",
    },
  ];
  return (
    <section className="section-p1">
      <div className="feature">
        {positions.map((ele, ind) => {
          return <Feature data={ele} key={ind} />;
        })}
      </div>
    </section>
  );
}

export default Features;
