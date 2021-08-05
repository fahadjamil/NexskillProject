import React from "react";
import "./BlogSection.css";
import img1 from "../../Assets/game.jpg";
import img2 from "../../Assets/graphic2.jpg";
import img3 from "../../Assets/smm.jpg";
import img4 from "../../Assets/nexskill.jpg";

const BlogSection = () => {
  return (
    <>
      <div className="blogSection mt-3">
        <div className="container">
          <div className="blog-heading p-5"> Our Blogs</div>

          <div className="row pt-2 px-5 pb-2">
            <div className="col-md-6 pt-2">
              <img className="blog" src={img4} />
              <div className="blog-heading">NEXSKILL</div>
              <div className="blog-location"></div>
              <div className="blog-detail pt-3">
                Nexskill was established in 2019 where it just started with 2
                courses only. It is an EdTech company that trains students for
                different technology companies by providing core technical
                training along with training on soft skills.
              </div>
              <div
                className="read-more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Read more...
              </div>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title blog-head" id="exampleModalLabel">
                        NEXSKILL: AN EMERGING IT AND TRAINING INSTITUTE
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body blog-text">
                      {" "}
                      <span> What is Nexskill? </span>
                      <br /> Nexskill was established in 2019 where it just
                      started with 2 courses only. It is an EdTech company that
                      trains students for different technology companies by
                      providing core technical training along with training on
                      soft skills. It is partnered by two big groups in the IT
                      field: OZI Group and AUJ Group.
                      <br />
                      <span> What is the mission of Nexskill? </span>
                      <br /> Nexskill aims to provide students with top notch
                      training in real time business environment with the best
                      possible staff to enhance skills and knowledge, to help
                      build them a professional and successful career. It
                      promises to maintain the reputation built by OZI and AUJ
                      group of companies.
                      <br />
                      <span>What services are provided by Nexskill?</span>
                      <br />
                      Nexskill provides a platform for all students out there
                      who are interested in learning basic to advanced courses,
                      leading to career development, creativity, and extensive
                      knowledge. It offers various courses that fall under some
                      of the leading fields: Graphic, Web Development,
                      E-Commerce, and Marketing and also provide courses for
                      personal and professional development as well as
                      internships to top performing students. <br />
                      <span>How can you join Nexskill?</span>
                      <br />
                      Nexskill offers both physical and online classes, whatever
                      is suitable for the students. To get enrolled for any of
                      the courses, you may contact them on 0309-66663330 or
                      email them at trainings@nexskill.com, or visit their
                      website www.nexskill.com.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="blog-line" />
            </div>

            <div className="col-md-6 pt-2">
              <img className="blog" src={img1} />
              <div className="blog-heading">GAME DEVELOPMENT</div>
              <div className="blog-location"></div>
              <div className="blog-detail pt-3">
                Game Development is the art of creating games and describes the
                design, development and release of a game. It may involve
                concept generation, design, build, test and release.
              </div>
              <div
                className="read-more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Read more...
              </div>
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title blog-head" id="exampleModalLabel">
                        GAME DEVELOPMENT
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body blog-text">
                      {" "}
                      <span> WHAT IS GAME DEVELOPMENT?</span>
                      <br /> Game Development is the art of creating games and
                      describes the design, development and release of a game.
                      It may involve concept generation, design, build, test and
                      release. While you create a game, it is important to think
                      about, the game mechanics, rewards, player engagement and
                      level design.
                      <br />
                      <span> TOOLS USED IN GAME DVELOPMENT</span>
                      <br /> A lot of tools are used in developing a game such
                      as music, animation, sound, writing, texturing modeling
                      but the most important tool is the game engine where 3D
                      Unity tool is used. Unity is one of the best game engine
                      for developing games. The major reasons as to why Unity is
                      so successful are the low learning curve for beginners,
                      active ecosystem of asset and plugin creators, rapid
                      development speed, and its cross platform integration that
                      supports 25 platforms.
                      <br />
                      <span>MARKET TRENDS OF GAME DEVELOPMENT </span>
                      <br /> According to the latest data, it is predicted to
                      rise up to $22.9 billion as recorded in 2020. Utilizing
                      the latest VR headsets, tools, game engines, developers
                      will be able to create incredibly realistic 3D graphics.{" "}
                      <br />
                      <span>PROS OF GAME DEVELOPMENT</span>
                      <br /> IT and Gaming are rising industries which have a
                      great scope in the coming years and decades. This provides
                      a great advantage for those who are passionate about
                      games, and want to develop their own unique and creative
                      games. Another benefit is that you do not need a
                      bachelor’s degree to become a developer, just take a game
                      development course and improve your skills and start
                      developing games in a couple of weeks or months! What’s
                      more fun is that you get to play with your own games!
                      <br />
                      <span>CONS OF GAME DEVELOPMENT </span>
                      <br /> Everything comes with a bit of drawbacks, so does
                      becoming a game developer. You may have to pull
                      all-nighters to reach deadlines, making sudden tweaks and
                      details. In addition to that, you may be paid a low salary
                      as compared to the effort you’re putting in. However, if
                      you’re doing what you love and enjoy, then it will be
                      worth it!{" "}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="blog-line" />
            </div>

            <div className="col-md-6 pt-2">
              <img className="blog" src={img2} />
              <div className="blog-heading">GRAPHIC DESIGNING </div>
              <div className="blog-location"></div>
              <div className="blog-detail pt-3">
                American Institute of Graphic Arts (AIGA) describes graphic
                design as “the art and practice of planning and projecting ideas
                and experiences with visual and textual content.”
              </div>
              <div
                className="read-more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Read more...
              </div>
              <div
                class="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title blog-head" id="exampleModalLabel">
                        GRAPHIC DESIGNING
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body blog-text">
                      {" "}
                      <span> What is Graphic Designing?</span>
                      <br /> American Institute of Graphic Arts (AIGA) describes
                      graphic design as “the art and practice of planning and
                      projecting ideas and experiences with visual and textual
                      content.” Graphic designing helps to create visual content
                      where you can make your own unique and interactive
                      designs. Moreover, it is used to apply different layout,
                      patterns and page techniques in order to improve user
                      experience and cater the demands of users.
                      <br />
                      <span> Tools used in Graphic Designing</span>
                      <br /> There are a variety of tools used in graphic
                      designing such as Adobe Photoshop, Adobe Illustrator,
                      Canva, Inkscape, Pixlr, and Adobe InDesign. Out of all
                      these tools, Photoshop and Illustrator are the most
                      popular and widely used tools in the world of Graphic
                      designing. Although these two applications share a lot of
                      similarities but there are some notable differences.
                      Photoshop uses pixels to generate images, also known as
                      “raster-based”, it is best photo-based illustrations while
                      Illustrator uses vectors, it is mostly used for the
                      creation of logos and graphic illustration, produces
                      precise and smooth designs.
                      <br />
                      <span>Market trends for Graphic Designing</span>
                      <br /> With the growing use of digital advertising,
                      graphic designing is expected to grow in more importance
                      as businesses make use of it for various purposes such as
                      to create business logos, documents, web pages, banner
                      ads, video graphics and of course, editing and designing
                      images. In this fast-changing business world, it can be
                      anticipated that the changes in marketing and technology
                      will continue to increase thus, requirements for designing
                      and advertising will also continue to change. <br />
                      <span>
                        Job opportunities in the field of Graphic Designing
                      </span>
                      <br /> With the evident rise in the graphic designing
                      industry, there are going to be more and more job
                      opportunities for people who have a passion to learn and
                      work as a Graphic designer, professional Photographer,
                      Film and Video editor, Art director or a Drafter.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="blog-line" />
            </div>
            <div className="col-md-6 pt-2">
              <img className="blog" src={img3} />
              <div className="blog-heading">Digital Media Marketing </div>
              <div className="blog-location"></div>
              <div className="blog-detail pt-3">
                Nowadays, the use of social media has become a daily routine
                habit for a lot of us. Social Media is not just confined to
                entertainment purposes but it is now a major platform for
                promoting and selling your products and services.
              </div>
              <div
                className="read-more"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                Read more...
              </div>
              <div
                class="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title blog-head" id="exampleModalLabel">
                        GRAPHIC DESIGNING
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body blog-text">
                      {" "}
                      <span> Social Media Marketing</span>
                      <br />
                      Nowadays, the use of social media has become a daily
                      routine habit for a lot of us. Social Media is not just
                      confined to entertainment purposes but it is now a major
                      platform for promoting and selling your products and
                      services. Facebook, Instagram, Snapchat and LinkedIn are
                      some of the major social media applications where
                      marketers are running ads and campaigns almost daily to
                      target audience and boost sales. There is no doubt that
                      the future of Social Media marketing is very bright and
                      within the coming years and decades, it will only rise
                      more. As of this year, there are around 3.78 billion
                      people who use social media globally. Whether you’re
                      starting your own business or looking for potential jobs
                      in the marketing field, social media is the perfect
                      opportunity to start and grow your brand or enhance your
                      skills and become a professional social media marketer.
                      <br />
                      <span> Search Engine Optimization (SEO)</span>
                      <br /> SEO is a new practice that has become very powerful
                      in the field of online marketing. It is a way to boost up
                      the search ranking of your business on frequently used
                      search engines such as Google, by a set of unique methods
                      consisting of on-page and off-page SEO, keyword research
                      and much more. It was recorded in June 2021 that Google
                      had 87.76% global searches out of all the search engines.
                      In addition to that, there are some tools used in the
                      process of SEO, providing assistance in improving your
                      website. SEO is an emerging field in terms of IT and
                      Business Marketing. Recently, it has become a separate
                      profession as marketers have realized its importance in
                      the digital world, and how in the coming years it will
                      grow more. It is becoming more and more evident that the
                      traffic that is created from searching for products and
                      services on search engines adds up to a large amount of
                      the total traffic of businesses. You can master SEO and
                      become a SEO specialist. Whether you are paying for your
                      ads to be featured on the top pages of Google or
                      “organically” market your products through optimization,
                      SEO is necessary to gain a competitive edge over your
                      rival companies.
                      <br />
                      <span>Content Writing </span>
                      <br /> Using different marketing techniques may not be
                      effective if the content provided does not attract the
                      customers. With so many alternatives in today’s world, you
                      need grab the attention of potential customers so that
                      they show interest in your product. Here content writing
                      plays a major role in effectively displaying your products
                      and services and providing clear and concise information
                      that is just enough for people to read through. Content
                      writing is the art of researching, formatting, structuring
                      and writing content that is powerful. Whether you’re
                      working as a freelancer or looking to work as a content
                      writer at a firm, it is essential to know the basics of
                      writing good content.
                      
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="blog-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogSection;
