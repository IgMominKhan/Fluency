import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSection = () => {
  return (
    <footer className="bg-clr-primary">
      <section className="main-container">
        <Footer>
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
              <div>
                <Footer.Title title="Fluency" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    About Us
                  </Footer.Link>
                  <Footer.Link href="#">
                    Our Staff
                  </Footer.Link>
                  <Footer.Link href="#">
                    Our Partners
                  </Footer.Link>
                  <Footer.Link href="#">
                    Careers
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Discord Server
                  </Footer.Link>
                  <Footer.Link href="#">
                    Twitter
                  </Footer.Link>
                  <Footer.Link href="#">
                    Facebook
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Licensing
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="contact" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Example@web.com
                  </Footer.Link>
                  <Footer.Link href="#">
                    +966 571 234 5678
                  </Footer.Link>
                  <p>
                   14331, Riyadh. 
                  </p>
                  <p>
                    Saudi Arabia
                  </p>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full bg-clr-terciary px-4 py-6 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                by="Fluency™"
                href="#"
                year={2022}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="#"
                  icon={BsFacebook}
                />
                <Footer.Icon
                  href="#"
                  icon={BsInstagram}
                />
                <Footer.Icon
                  href="#"
                  icon={BsTwitter}
                />
                <Footer.Icon
                  href="#"
                  icon={BsGithub}
                />
              </div>
            </div>
          </div>
        </Footer>
      </section>
    </footer>
  );
};

export default FooterSection;
