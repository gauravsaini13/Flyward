import { Link } from "react-router-dom"
import { useEffect, useState } from "react";



export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);


  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });


  const liveTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });



  return (
    <footer>

      <section className="relative w-full  overflow-hidden  font-['Apris','Times_New_Roman',sans-serif]">

        {/* page1 */}
        <div className=" md:flex lg:flex px-5  gap-30 leading-[2.7]">

          <div className="flex gap-20 md:gap-40 lg:gap-40" >
            <ul>
              <h6>MENU</h6>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/private">Private</Link></li>
              <li><Link to="/corporate">Corporate</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <ul className="lg:hidden block">
              <h6>SOCIALS</h6>
              <li><Link>Instagram</Link></li>
              <li><Link>TikTok</Link></li>

            </ul>

          </div>

          <div className="hidden lg:block">
            <ul>
              <h6>SOCIALS</h6>
              <li><Link>Instagram</Link></li>
              <li><Link>TikTok</Link></li>

            </ul>
          </div>


          <div className="mt-0">
            <h6>LOCATION</h6>
            <p>Dubai,UAE</p>
            <p >{date}</p>
            <p >{liveTime}</p>
          </div>
        </div>

      </section>
      <section>

        {/* page2 */}
        <div className="lg:flex  gap-70 ml-10 mt-5 text-[14px] ">
          <p>&copy;Flyward FZCO, a Panathon company</p>
          <p>All Rights Reserved</p>
          <div>
            <Link>Cookie Policy</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </div>

        </div>
        <img src="/footer/1.svg" className="mt-6 " />


      </section>






    </footer>
  )
}