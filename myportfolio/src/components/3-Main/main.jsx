import "./main.css";
function Main() {
  return (
    <main className="flex">
      <section className="lift-section flex">
        <button className="active">all porjects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      <section className="right-section flex">
 
      
    {["aa", "bb", "cc", 1, 2, 3].map((item) => {
      return (

      <article key={item}  className="card">
          <img width={266} src="./1.jpg" alt=""></img>

          <div style={{ width: "266px" }} className="box">
            <h1 className="title">Landing Page 2</h1>
            <p className="sub-title">
              loremloremloremloremloremlorem
              loremloremloremlorem
              loremloremloremlorem
            </p>

            <div className="flex icons">
              <div  style={{gap: "11px"}} className="flex">
                <div className="icon-link"></div>
                <div className="icon-github"></div>
              </div>

              <a className="link flex" href="">
                more
                <span style={{alignSelf: "end"}} className="icon-arrow-right"></span>
              </a>
            </div> 
            
          </div>
        </article>
      )
    })}
    </section>
    </main>
  );
}

export default Main;
