import logo from "../public/images/logo.svg";

import userImage from "../public/images/user.svg";

function Navbar() {
  const titles = [
    "لیست ویلا ها",
    "راهنمای مسافران",
    "سوالات متداول",
    "ارتباط با ما",
  ];

  return (
    <nav>
      <div className="container py-5 flex items-center">
        <a href="#" className="ml-20">
          <img src={logo} alt="logo" />
        </a>
        <ul className="flex">
          {titles.map((item) => (
            <li className="ml-16 hover:text-primary transition-all" key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <div className="mr-auto flex items-center">
          <div className="[&>a>i]:text-[20px] ml-5">
            <a href="#">
              <i className="icon-docs mr-3"></i>
            </a>
            <a href="#">
              <i className="icon-ringing"></i>
            </a>
          </div>
          <img src={userImage} className="w-[48px] h-[48px]" alt="user image" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
