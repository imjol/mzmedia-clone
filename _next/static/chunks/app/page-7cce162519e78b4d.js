(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    6534: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 5271)),
        Promise.resolve().then(s.bind(s, 3071)),
        Promise.resolve().then(s.bind(s, 6290)),
        Promise.resolve().then(s.bind(s, 4584)),
        Promise.resolve().then(s.bind(s, 7177)),
        Promise.resolve().then(s.bind(s, 3520)),
        Promise.resolve().then(s.bind(s, 447)),
        Promise.resolve().then(s.bind(s, 2557)),
        Promise.resolve().then(s.bind(s, 703)),
        Promise.resolve().then(s.bind(s, 9119));
    },
    3071: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(7128);
      function n() {
        let [e, t] = (0, i.useState)();
        return (
          (0, i.useEffect)(() => {
            fetch("/api/Faq")
              .then((e) => e.json())
              .then((e) => {
                t(null == e ? void 0 : e.data);
              });
          }, []),
          (0, a.jsx)("div", {
            id: "faq",
            className: "mx-[3%] mt-40 max-sm:mt-10",
            children: (0, a.jsxs)("div", {
              className: "flex max-sm:flex-wrap w-full gap-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "col-span-1 flex flex-col gap-10",
                  children: [
                    (0, a.jsxs)("h1", {
                      className:
                        "text-[76px] max-sm:text-[30px] text-[#f4f5f2] leading-[72px] mainfont font-bold capitalize ",
                      children: ["have ", (0, a.jsx)("br", {}), " questions?"],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mt-10 max-sm:mt-0",
                      children: [
                        (0, a.jsx)("p", {
                          className: "my-5 text-2xl font-bold text-[#f0eaea]",
                          children: "Do you have more questions?",
                        }),
                        (0, a.jsxs)("a", {
                          href: "https://forms.gle/1va9vdAy1a4KWA229",
                          target: "blank",
                          className:
                            "bg-[#4c4d4a43] w-fit text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#DBFA9B]  max-sm:px-4 max-sm:py-2 max-sm:text-[1.125rem] flex items-center gap-2",
                          children: [
                            (0, a.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              class: "lucide lucide-phone",
                              children: (0, a.jsx)("path", {
                                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                              }),
                            }),
                            " ",
                            "Book a call",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: " w-full faq",
                  children:
                    null == e
                      ? void 0
                      : e.map((e, t, s) =>
                          (0, a.jsx)(r.UQ, {
                            className: "my-4 py-1 rounded-t-10",
                            collapseAll: !0,
                            children: (0, a.jsxs)(r.UQ.Panel, {
                              children: [
                                (0, a.jsx)(r.UQ.Title, {
                                  className:
                                    "px-4 py-4 font-bold text-[#e5e6e0] text-[22px] max-sm:text-lg  capitalize",
                                  children: null == e ? void 0 : e.Title,
                                }),
                                (0, a.jsx)(r.UQ.Content, {
                                  className: "p-4",
                                  children: (0, a.jsx)("p", {
                                    className: "text-xl max-sm:text-sm",
                                    children:
                                      null == e ? void 0 : e.Description,
                                  }),
                                }),
                              ],
                            }),
                          })
                        ),
                }),
              ],
            }),
          })
        );
      }
    },
    6290: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s(7437);
      s(2265);
      var i = s(480),
        r = s(6691),
        n = s.n(r),
        l = s(7381);
      function o() {
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)("div", {
            className:
              "border-t  mt-20 mx-[3%] p-4 flex justify-around items-center max-sm:flex-wrap",
            children: [
              (0, a.jsx)(n(), { src: i.Z, alt: "Logo", width: 200 }),
              (0, a.jsx)("div", {
                className: "flex items-center gap-2 capitalize",
                children: "\xa9 2024 mzmedia | all rights reseved by mzmedia",
              }),
              (0, a.jsx)("div", {
                className:
                  " flex items-center justify-end gap-20 max-sm:gap-5 max-sm:mt-5",
                children: (0, a.jsx)(l.rU, {
                  to: "nav",
                  spy: !0,
                  smooth: !0,
                  offset: 50,
                  duration: 500,
                  className:
                    "cursor-pointer text-xl  font-bold px-2 py-2 rounded-full  text-[#525153] bg-[#e7b8fa] duration-200 max-sm:text-sm",
                  children: (0, a.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-8 h-8 ",
                    children: [
                      (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m4.5 18.75 7.5-7.5 7.5 7.5",
                      }),
                      (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m4.5 12.75 7.5-7.5 7.5 7.5",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    4584: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return l;
          },
        });
      var a = s(7437);
      s(2265);
      var i = s(7381),
        r = s(4930);
      let n = s.n(r)()(() => s.e(429).then(s.t.bind(s, 429, 23)), {
        loadableGenerated: { webpack: () => [429] },
        ssr: !1,
      });
      function l() {
        return (0, a.jsxs)("div", {
          id: "home",
          children: [
            (0, a.jsx)("div", {
              className: " py-10 rounded-3xl mx-[3%] h-[37rem] max-sm:py-8",
              children: (0, a.jsxs)("div", {
                className: "mx-40 max-sm:mx-6",
                children: [
                  (0, a.jsxs)("h1", {
                    className:
                      "uppercase text-center text-xl mb-5 text-[#DBFA9B] max-sm:text-sm ",
                    children: [
                      "With your dedicated content teams",
                      " ",
                      (0, a.jsx)("br", { className: "hidden max-sm:block" }),
                      " viral touch",
                    ],
                  }),
                  (0, a.jsxs)("h1", {
                    className:
                      "text-[100px]  text-center font-extrabold text-white capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] ",
                    children: ["Grow super fast ", (0, a.jsx)("br", {})],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex justify-center mt-2 ",
                    children: [
                      (0, a.jsx)("h1", {
                        className:
                          "text-[100px]  text-center font-extrabold text-white capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] ",
                        children: "on",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "h-[6rem] max-sm:h-[3rem] overflow-hidden words",
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-8 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "youtube",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-6 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "Instagram",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-6 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "tiktok",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-6 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "Instagram",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-8 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "youtube",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              " text-[100px] ml-6 max-sm:ml-2 text-left font-extrabold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[40px] ",
                            children: "tiktok",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "307",
                    height: "34",
                    viewBox: "0 0 307 34",
                    fill: "none",
                    className:
                      "m-auto block max-sm:mr-[20%] max-md:mr-[30%] max-lg:mr-[40%] max-sm:w-40 ",
                    children: (0, a.jsx)("path", {
                      d: "M303.498 26.5334C183.108 -17.8935 53.0014 10.644 2.99697 30.4662",
                      stroke: "#DBFA9B",
                      strokeWidth: "2",
                      "stroke-linecap": "round",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-[21px] font-normal   text-center  mt-10 mx-10 max-sm:mx-4 max-sm:text-[15px] max-sm:mt-1",
                    children:
                      "Generate views and sales with our expert team, who have worked with the biggest creators. Relax, we handle it all for you.",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-center gap-5 mt-10 max-sm:flex-wrap",
                    children: [
                      (0, a.jsx)(i.rU, {
                        to: "pricing",
                        spy: !0,
                        smooth: !0,
                        offset: 50,
                        duration: 700,
                        className:
                          "bg-[#FFFFFF] cursor-pointer capitalize text-[#0d0d0dd9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:bg-[#4c4d4a43] hover:text-[#fffffffd] duration-300  max-sm:px-4 max-sm:py-2 max-sm:w-full text-center",
                        children: "view pricing",
                      }),
                      (0, a.jsxs)(i.rU, {
                        to: "process",
                        spy: !0,
                        smooth: !0,
                        offset: 50,
                        duration: 700,
                        className:
                          "bg-[#4c4d4a43] cursor-pointer capitalize text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#0d0d0dd9] hover:bg-[#FFF0E9] duration-300  max-sm:px-4 max-sm:py-2 max-sm:w-full max-sm:justify-center flex gap-2 items-center",
                        children: [
                          (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            class: "lucide lucide-play",
                            children: (0, a.jsx)("polygon", {
                              points: "5 3 19 12 5 21 5 3",
                            }),
                          }),
                          " ",
                          "get started",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "bg-[#ffffff05] mx-[6%] p-8 flex justify-center items-center rounded-xl max-sm:p-4 startplace1",
              children: [
                (0, a.jsx)(n, {
                  loop: !0,
                  url: "https://youtu.be/GG2be1MKOik",
                  width: 1143,
                  height: 640,
                  className: "max-sm:h-20 max-sm:hidden",
                }),
                (0, a.jsx)(n, {
                  loop: !0,
                  url: "https://youtu.be/GG2be1MKOik",
                  width: 400,
                  height: 200,
                  className: "max-sm:h-20 hidden max-sm:block",
                }),
              ],
            }),
          ],
        });
      }
    },
    3520: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(7381),
        n = s(480),
        l = s(6691),
        o = s.n(l);
      function d() {
        let [e, t] = (0, i.useState)(!1);
        return (0, a.jsxs)("div", {
          id: "nav",
          children: [
            (0, a.jsxs)("div", {
              className:
                "max-sm:flex bg-[#2d2c2c3e] justify-between px-4 items-center hidden w-full    py-3",
              children: [
                (0, a.jsx)(o(), {
                  src: n.Z,
                  alt: "Logo",
                  width: 150,
                  height: 150,
                  className: "px-1",
                }),
                (0, a.jsxs)("button", {
                  className: " mx-",
                  onClick: () => t(!e),
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "w-7 h-[3px] bg-[#fff] rounded-full my-2  ".concat(
                          e
                            ? "translate-x-2 duration-300"
                            : "-translate-x-0 duration-300",
                          " "
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "w-7 h-[3px]  bg-[#fff] rounded-full my-2 ".concat(
                          e ? "hidden duration-200" : "",
                          " "
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "w-7 h-[3px]  bg-[#fff] rounded-full my-2 ".concat(
                          e
                            ? "-translate-x-2 duration-300"
                            : "-translate-x-0 duration-300",
                          " "
                        ),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "grid grid-cols-3 items-center m-6 max-sm:grid-cols-1  py-2 px-4  max-sm:m-0 max-sm:pb-[6rem] max-sm:absolute max-sm:w-full max-sm:bg-[#1a1a1a] ".concat(
                  e
                    ? "translate-y-0 duration-500"
                    : "max-sm:-translate-y-[220rem] duration-500",
                  " "
                ),
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex max-sm:flex-col  max-sm:gap-2 max-sm:m-auto ",
                  children: [
                    (0, a.jsx)(r.rU, {
                      to: "project",
                      spy: !0,
                      smooth: !0,
                      offset: 50,
                      duration: 500,
                      className:
                        "cursor-pointer font-[400] uppercase text-[17px] text-[#ebe1e1] hover:bg-[#4c4d4a43] duration-200 px-4 py-3 rounded-sm text-center max-sm:text-[1rem]",
                      children: "projects",
                    }),
                    (0, a.jsx)(r.rU, {
                      to: "process",
                      spy: !0,
                      smooth: !0,
                      offset: 50,
                      duration: 500,
                      className:
                        "cursor-pointer font-[400] uppercase text-[17px] text-[#ebe1e1] hover:bg-[#4c4d4a43] duration-200 px-4 py-3 rounded-sm text-center max-sm:text-[1rem]",
                      children: "our process",
                    }),
                    (0, a.jsx)(r.rU, {
                      to: "faq",
                      spy: !0,
                      smooth: !0,
                      offset: 50,
                      duration: 1500,
                      className:
                        "cursor-pointer font-[400] uppercase text-[17px] text-[#ebe1e1] hover:bg-[#4c4d4a43] duration-200 px-4 py-3 rounded-sm text-center max-sm:text-[1rem]",
                      children: "faq",
                    }),
                  ],
                }),
                (0, a.jsx)(o(), {
                  src: n.Z,
                  alt: "Logo",
                  width: 200,
                  height: 200,
                  className: "m-auto block max-sm:hidden",
                }),
                (0, a.jsxs)("div", {
                  className: "flex justify-end max-sm:justify-center ",
                  children: [
                    " ",
                    (0, a.jsxs)("a", {
                      href: "https://forms.gle/1va9vdAy1a4KWA229",
                      target: "blank",
                      className:
                        "bg-[#4c4d4a43] w-fit text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#DBFA9B]  max-sm:px-4 max-sm:py-2 max-sm:text-[1.125rem] flex items-center gap-2",
                      children: [
                        (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          class: "lucide lucide-phone",
                          children: (0, a.jsx)("path", {
                            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                          }),
                        }),
                        " ",
                        "Book a call",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    447: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(480),
        n = s(6691),
        l = s.n(n);
      function o() {
        let [e, t] = (0, i.useState)();
        return (
          (0, i.useEffect)(() => {
            fetch("/api/Pricing")
              .then((e) => e.json())
              .then((e) => {
                t(null == e ? void 0 : e.data);
              });
          }, []),
          (0, a.jsxs)("div", {
            id: "pricing",
            className: "mx-[3%] mt-40 hidden3",
            children: [
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("h1", {
                    className:
                      "mainfont text-[#ffffff] text-center font-bold text-[64px]  max-sm:text-2xl",
                    children: "Choose what works for you",
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-[20px] max-sm:text-[16px] max-sm:mt-5 text-[#fdfdfd] text-center w-[50%] max-sm:w-full font-semibold m-auto",
                    children:
                      "Whether you design alone or with a team, we have a plan that fits your needs, including custom design systems.",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-3 items-center gap-10 justify-center mt-40 max-sm:mt-10 max-sm:grid-cols-1",
                children:
                  null == e
                    ? void 0
                    : e.map((e, t) =>
                        (0, a.jsxs)("div", {
                          className:
                            " text-white bg-[#090909] border p-6 rounded-2xl",
                          children: [
                            1 === t
                              ? (0, a.jsx)("p", {
                                  className:
                                    "uppercase font-bold text-[#2a2a28] mainfont bg-[#e0f63c] px-6 py-2 rounded-3xl shadow-sm w-fit relative bottom-10",
                                  children: "most recomended",
                                })
                              : null,
                            (0, a.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, a.jsx)(l(), {
                                  src: r.Z,
                                  alt: "Logo ",
                                  width: 200,
                                  height: 200,
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "uppercase font-bold mainfont bg-[#2a2a28] px-6 py-2 rounded-3xl shadow-sm",
                                  children: null == e ? void 0 : e.Title,
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-[#ffffff] opacity-60 mt-2",
                              children: "Explore and compare our packages",
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-[50px] mainfont font-extrabold text-[#ffffff]",
                                  children: null == e ? void 0 : e.Price,
                                }),
                                null == e
                                  ? void 0
                                  : e.Items.split(",").map((e, t) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "flex items-center gap-4 mt-5",
                                          children: [
                                            (0, a.jsx)("svg", {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              strokeWidth: 2,
                                              stroke: "currentColor",
                                              className:
                                                "w-6 h-6  text-[#ffffff] rounded-full",
                                              children: (0, a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                                              }),
                                            }),
                                            (0, a.jsx)("p", {
                                              className:
                                                "font-semibold text-xl",
                                              children: e,
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    ),
                                (0, a.jsx)("div", {
                                  children: (0, a.jsxs)("a", {
                                    href: null == e ? void 0 : e.Stripe,
                                    target: "blank",
                                    className:
                                      "w-full text-center m-auto block bg-white text-black hover:bg-[#e0f63c]  mainfont py-3 text-xl hover:shadow-sm rounded-xl mt-10 uppercase font-extrabold",
                                    children: ["Buy now", " "],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      ),
              }),
            ],
          })
        );
      }
    },
    2557: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return r;
          },
        });
      var a = s(7437),
        i = s(2265);
      function r() {
        let [e, t] = (0, i.useState)(1);
        return (0, a.jsxs)("div", {
          className: " w-full h-96",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex justify-between max-sm:justify-center items-end mx-[3%] mt-20 max-sm:flex-wrap max-sm:gap-10",
              children: [
                (0, a.jsxs)("h1", {
                  className:
                    "text-[32px] font-[700] leading-8  text-white max-sm:text-center",
                  children: [
                    "Process ",
                    (0, a.jsx)("br", {}),
                    " To Get You ",
                    (0, a.jsx)("span", { children: "VIRAL :" }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex gap-10 max-sm:justify-center items-center",
                  children: [
                    (0, a.jsx)("button", {
                      disabled: e < 2,
                      onClick: () => t((e) => e - 1),
                      className:
                        "bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300  rounded-full px-7 py-6 ".concat(
                          e < 2 ? "cursor-not-allowed opacity-40" : ""
                        ),
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-6 h-6 font-bold",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                        }),
                      }),
                    }),
                    (0, a.jsx)("button", {
                      disabled: e > 5,
                      onClick: () => t((e) => e + 1),
                      className:
                        "bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300  rounded-full px-7 py-6 ".concat(
                          e > 5 ? "cursor-not-allowed opacity-40" : ""
                        ),
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-6 h-6 font-bold",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "flex  items-center w-full overflow-hidden max-sm:m-auto",
              children: [
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[3%] max-sm:mx-[6%] ",
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-[#DBFA9B]  p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      " ",
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className:
                          "lucide lucide-lightbulb w-12 h-12 text-[#232524] ",
                        children: [
                          (0, a.jsx)("path", {
                            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
                          }),
                          (0, a.jsx)("path", { d: "M9 18h6" }),
                          (0, a.jsx)("path", { d: "M10 22h4" }),
                        ],
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Get the best video ideas in your niche",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:mt-4 max-sm:text-[18px]",
                        children:
                          "We help you sort out the best content that perfectly aligns with your niche. How? You answer us some simple questions and from there we give you a detailed plan with content strategies, competitor analysis and proper keyword research.",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[1%] ".concat(
                    e > 1
                      ? "-translate-x-[40rem] duration-300 max-sm:-translate-x-[23.9rem]"
                      : "translate-x-[0] duration-300"
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "  bg-[#CEDCFF]  p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      " ",
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className:
                          "lucide lucide-video w-12 h-12  text-[#4b4646]",
                        children: [
                          (0, a.jsx)("path", { d: "m22 8-6 4 6 4V8Z" }),
                          (0, a.jsx)("rect", {
                            width: "14",
                            height: "12",
                            x: "2",
                            y: "6",
                            rx: "2",
                            ry: "2",
                          }),
                        ],
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Press the record button",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold",
                        children:
                          "Record and send! Hassle-free videos will be ready for you in less than 48 hrs. We are always standby to help you with ideas, gears and everything needed to make you look like a pro. Get a free drive link with unlimited storage just for you.",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[1%] ".concat(
                    2 == e
                      ? "-translate-x-[40rem] duration-300 max-sm:-translate-x-[21.5rem]"
                      : e >= 3
                      ? "-translate-x-[80rem] duration-300 max-sm:-translate-x-[46rem]"
                      : "translate-x-[0] duration-300"
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-[#f4f4f2]  p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        class:
                          "lucide lucide-mouse-pointer-click w-12 h-12 text-[#232524]",
                        children: [
                          (0, a.jsx)("path", { d: "m9 9 5 12 1.8-5.2L21 14Z" }),
                          (0, a.jsx)("path", { d: "M7.2 2.2 8 5.1" }),
                          (0, a.jsx)("path", { d: "m5.1 8-2.9-.8" }),
                          (0, a.jsx)("path", { d: "M14 4.1 12 6" }),
                          (0, a.jsx)("path", { d: "m6 12-1.9 2" }),
                        ],
                      }),
                      " ",
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Retention-based video editing",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold",
                        children:
                          "Keep those eyes locked on your video with our clean and fast retention-based edits. Get your own unique style with the trendiest edits from our animators, not only in the intro but make the entire video locked in your audience's eyes and get the views at lightning speed.",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[1%] ".concat(
                    3 == e
                      ? "-translate-x-[80rem] duration-300 max-sm:-translate-x-[20rem]"
                      : e >= 4
                      ? "-translate-x-[120rem] duration-300 max-sm:-translate-x-[68.4rem]"
                      : "translate-x-[0rem] duration-300"
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-[#DBFA9B]   p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      " ",
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className:
                          "lucide lucide-clapperboard w-12 h-12 text-[#232524]",
                        children: [
                          (0, a.jsx)("path", {
                            d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
                          }),
                          (0, a.jsx)("path", { d: "m6.2 5.3 3.1 3.9" }),
                          (0, a.jsx)("path", { d: "m12.4 3.4 3.1 4" }),
                          (0, a.jsx)("path", {
                            d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
                          }),
                        ],
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Creative thumbnails with your master video",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold",
                        children:
                          "We make thumbnails that stop your scrolling, make your eyes pop and force you to click on the video! We give you a range of thumbnails to do your A/B testing and check out what works the best for you.",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[1%]  ".concat(
                    4 == e
                      ? "-translate-x-[120rem] duration-300 max-sm:-translate-x-[20rem]"
                      : e >= 5
                      ? "-translate-x-[160rem] duration-300 max-sm:-translate-x-[90.6rem]"
                      : "translate-x-[0] duration-300"
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-[#CEDCFF]  p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      " ",
                      (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-12 h-12 text-[#433e3e]",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
                        }),
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Rank your videos to the top",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold",
                        children:
                          "Beat your competition and reach the top with our secret SEO strategies. Get more pumped to YouTube’s suggested videos. We give you a thorough report of your channel’s view count, clickthrough rate, conversion, subscriber count and everything that you can just glance through.",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-10 ml-[1%]  ".concat(
                    5 == e
                      ? "-translate-x-[160rem]  max-sm:-translate-x-[50.5rem] duration-300"
                      : e >= 6
                      ? "-translate-x-[200rem]  max-sm:-translate-x-[112.9rem] duration-300"
                      : "translate-x-[0] duration-300"
                  ),
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-[#f4f4f2]   p-8 rounded-3xl w-[40rem] h-[23rem] max-sm:p-4 max-sm:h-[25rem] max-sm:w-[22rem]\n          ",
                    children: [
                      " ",
                      (0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        className:
                          "lucide lucide-trending-up w-12 h-12 text-[#232524]",
                        children: [
                          (0, a.jsx)("polyline", {
                            points: "22 7 13.5 15.5 8.5 10.5 2 17",
                          }),
                          (0, a.jsx)("polyline", { points: "16 7 22 7 22 13" }),
                        ],
                      }),
                      (0, a.jsx)("h1", {
                        className:
                          "mainfont text-[25px] mt-5 font-bold text-[#232524] max-sm:text-[18px]",
                        children: "Generate views, watch your channel grow",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "font-medium capitalize  text-[#4b4646] text-[20px] mt-10 max-sm:text-[18px] max-sm:font-semibold",
                        children:
                          "We get you the maximum watch time, subscribers, followers that are sure to stick with you for a long long time! We do it all for you from content ideas, to editing, to testing to publishing it in a detailed manner. You just have to sit back, relax and watch yourself at the top of the game.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    703: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(8956),
        n = s(6691),
        l = s.n(n);
      function o() {
        let [e, t] = (0, i.useState)();
        return (
          (0, i.useEffect)(() => {
            fetch("/api/Project")
              .then((e) => e.json())
              .then((e) => {
                t(null == e ? void 0 : e.data);
              });
          }, []),
          (0, a.jsxs)("div", {
            id: "project",
            className: "hideplaceone",
            children: [
              (0, a.jsx)("h1", {
                className:
                  "text-[90px] max-sm:text-[35px] mainfont bold  mt-40 text-center font-bold uppercase text-[#DBFA9B]  flex items-center justify-center ",
                children: "our Masterpieces",
              }),
              (0, a.jsx)("div", {
                className: "mt-20 max-sm:hidden",
                children: (0, a.jsx)(r.Z, {
                  pauseOnHover: "true",
                  direction: "right",
                  children: (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)("div", {
                      className: "flex items-center gap-2 max-sm:flex-wrap",
                      children:
                        null == e
                          ? void 0
                          : e
                              .slice(0, (null == e ? void 0 : e.length) / 2)
                              .map((e, t) =>
                                (0, a.jsx)("div", {
                                  children:
                                    (null == e ? void 0 : e.Category) === "long"
                                      ? (0, a.jsx)("div", {
                                          className:
                                            " overflow-hidden  w-fit h-fit rounded-2xl py-2 mx-2",
                                          children: (0, a.jsx)("iframe", {
                                            src: null == e ? void 0 : e.Link,
                                            width: 600,
                                            height: 340,
                                            frameborder: "0",
                                            className: "rounded-2xl ",
                                            allow:
                                              "autoplay; fullscreen; picture-in-picture",
                                            title: "Trial Task-v1_14k.mp4",
                                          }),
                                        })
                                      : (null == e ? void 0 : e.Category) ===
                                        "shorts"
                                      ? (0, a.jsx)("iframe", {
                                          src: null == e ? void 0 : e.Link,
                                          width: 200,
                                          height: 350,
                                          frameborder: "0",
                                          className: "rounded-2xl ",
                                          allow:
                                            "autoplay; fullscreen; picture-in-picture",
                                          title: "Trial Task-v1_14k.mp4",
                                        })
                                      : (null == e ? void 0 : e.Category) ===
                                        "thumbnail"
                                      ? (0, a.jsx)(a.Fragment, {
                                          children:
                                            e && (null == e ? void 0 : e.link)
                                              ? (0, a.jsx)(l(), {
                                                  src:
                                                    null == e ? void 0 : e.Link,
                                                  alt: "width",
                                                  width: 1e3,
                                                  height: 1e3,
                                                  className:
                                                    "w-[600px] h-[350px] rounded-2xl mx-2",
                                                })
                                              : null,
                                        })
                                      : null,
                                })
                              ),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-6 max-sm:hidden",
                children: (0, a.jsx)(r.Z, {
                  pauseOnHover: "true",
                  direction: "left",
                  children: (0, a.jsx)("div", {
                    className: "",
                    children: (0, a.jsx)("div", {
                      className: "flex items-center  gap-2",
                      children:
                        null == e
                          ? void 0
                          : e
                              .slice(
                                -Math.floor((null == e ? void 0 : e.length) / 2)
                              )
                              .map((e, t) =>
                                (0, a.jsx)("div", {
                                  children:
                                    (null == e ? void 0 : e.Category) === "long"
                                      ? (0, a.jsx)("div", {
                                          className:
                                            " overflow-hidden  w-fit h-fit rounded-2xl py-2 mx-2",
                                          children: (0, a.jsx)("iframe", {
                                            src: null == e ? void 0 : e.Link,
                                            width: 600,
                                            height: 340,
                                            frameborder: "0",
                                            className: "rounded-2xl",
                                            allow:
                                              "autoplay; fullscreen; picture-in-picture",
                                            title: "Trial Task-v1_14k.mp4",
                                          }),
                                        })
                                      : (null == e ? void 0 : e.Category) ===
                                        "shorts"
                                      ? (0, a.jsx)("iframe", {
                                          src: null == e ? void 0 : e.Link,
                                          width: 200,
                                          height: 350,
                                          frameborder: "0",
                                          className: "rounded-2xl ",
                                          allow:
                                            "autoplay; fullscreen; picture-in-picture",
                                          title: "Trial Task-v1_14k.mp4",
                                        })
                                      : (null == e ? void 0 : e.Category) ===
                                        "thumbnail"
                                      ? (0, a.jsx)(a.Fragment, {
                                          children:
                                            e && (null == e ? void 0 : e.link)
                                              ? (0, a.jsx)(l(), {
                                                  src:
                                                    null == e ? void 0 : e.Link,
                                                  alt: "width",
                                                  width: 1e3,
                                                  height: 1e3,
                                                  className:
                                                    "w-[600px] h-[350px] rounded-2xl mx-2",
                                                })
                                              : null,
                                        })
                                      : null,
                                })
                              ),
                    }),
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "max-sm:flex flex-wrap justify-center items-center gap-2 hidden mt-10",
                children:
                  null == e
                    ? void 0
                    : e
                        .slice(0, (null == e ? void 0 : e.length) / 2)
                        .sort((e, t) =>
                          "long" === e.Category ||
                          ("shorts" === e.Category && "long" !== t.Category)
                            ? -1
                            : 1
                        )
                        .map((e, t) =>
                          (0, a.jsx)(
                            "div",
                            {
                              children:
                                (null == e ? void 0 : e.Category) === "long"
                                  ? (0, a.jsx)("div", {
                                      className:
                                        "overflow-hidden w-fit h-fit rounded-2xl  mx-2",
                                      children: (0, a.jsx)("iframe", {
                                        src: null == e ? void 0 : e.Link,
                                        width: 360,
                                        height: 200,
                                        frameBorder: "0",
                                        className: "rounded-2xl m-auto block",
                                        allow:
                                          "autoplay; fullscreen; picture-in-picture",
                                        title: "Trial Task-v1_14k.mp4",
                                      }),
                                    })
                                  : (null == e ? void 0 : e.Category) ===
                                    "shorts"
                                  ? (0, a.jsx)("iframe", {
                                      src: null == e ? void 0 : e.Link,
                                      width: 180,
                                      height: 300,
                                      frameBorder: "0",
                                      className: "rounded-2xl ",
                                      allow:
                                        "autoplay; fullscreen; picture-in-picture",
                                      title: "Trial Task-v1_14k.mp4",
                                    })
                                  : (null == e ? void 0 : e.Category) ===
                                    "thumbnail"
                                  ? (0, a.jsx)(a.Fragment, {
                                      children:
                                        e && (null == e ? void 0 : e.link)
                                          ? (0, a.jsx)(l(), {
                                              src: null == e ? void 0 : e.Link,
                                              alt: "width",
                                              width: 1e3,
                                              height: 1e3,
                                              className:
                                                "w-[600px] h-[350px] rounded-2xl mx-2",
                                            })
                                          : null,
                                    })
                                  : null,
                            },
                            t
                          )
                        ),
              }),
            ],
          })
        );
      }
    },
    9119: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var a = s(7437),
        i = s(6691),
        r = s.n(i),
        n = s(4930),
        l = s.n(n),
        o = s(2265),
        d = s(8278);
      s(4612), s(8887), s(3400);
      var x = s(875);
      function m() {
        let [e, t] = (0, o.useState)();
        (0, o.useEffect)(() => {
          fetch("/api/Testimonial")
            .then((e) => e.json())
            .then((e) => {
              t(null == e ? void 0 : e.data);
            });
        }, []);
        let [s, i] = (0, o.useState)(null),
          [n, l] = (0, o.useState)(0);
        return (0, a.jsx)("div", {
          children: (0, a.jsx)("div", {
            className:
              "bg-[#ffffff05] p-20 max-sm:p-5 rounded-xl m-[3%] mt-40 border border-[#e4dfdf37]  overflow-hidden",
            children: (0, a.jsxs)("div", {
              className:
                "grid grid-cols-2 items-start place-items-end max-sm:place-items-center max-sm:grid-cols-1",
              children: [
                (0, a.jsx)("div", {
                  className: "",
                  children:
                    null == e
                      ? void 0
                      : e.map((e, t) =>
                          (0, a.jsxs)("div", {
                            className: "".concat(
                              n == t
                                ? "opacity-100 duration-500"
                                : "opacity-0 max-sm:hidden duration-300",
                              " w-[700px]  max-sm:w-full md:absolute left-20 "
                            ),
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex gap-5 items-center ",
                                children: [
                                  (0, a.jsx)(r(), {
                                    src: null == e ? void 0 : e.Image,
                                    alt: "test",
                                    width: 100,
                                    height: 100,
                                    className:
                                      "rounded-full max-sm:w-16 max-sm:h-16 h-24 w-24",
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-[24px] max-sm:text-xl mainfont font-[500] text-[##30312c] px-3",
                                        children: null == e ? void 0 : e.Name,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-[20px] max-sm:text-sm mainfont font-[500] uppercase text-[#30312c] bg-[#DBFA9B] w-fit px-3 rounded-2xl",
                                        children:
                                          null == e ? void 0 : e.Subscriber,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("h1", {
                                className:
                                  " mt-10 max-sm:my-5 text-[56px] max-sm:text-[26px]  font-bold max-sm:font-semibold text-[#e9e9e8] leading-[68px] max-sm:leading-[40px]",
                                children: null == e ? void 0 : e.Comment,
                              }),
                            ],
                          })
                        ),
                }),
                (0, a.jsxs)("div", {
                  className: "max-sm:mt-5",
                  children: [
                    (0, a.jsx)(d.tq, {
                      effect: "cards",
                      grabCursor: !0,
                      modules: [x.c4],
                      className: "mySwiper",
                      onSwiper: i,
                      loop: "true",
                      children:
                        null == e
                          ? void 0
                          : e.map((e, t) =>
                              (0, a.jsx)(
                                "div",
                                {
                                  className: "rounded-xl   ",
                                  children: (0, a.jsx)(d.o5, {
                                    children: (0, a.jsx)("div", {
                                      className:
                                        " overflow-hidden  p-1  w-fit h-fit rounded-2xl  mx-2",
                                      children: (0, a.jsx)("iframe", {
                                        src: null == e ? void 0 : e.Link,
                                        width: 300,
                                        height: 500,
                                        frameborder: "0",
                                        className: "rounded-2xl m-auto block",
                                        allow:
                                          "autoplay; fullscreen; picture-in-picture",
                                        title: "Trial Task-v1_14k.mp4",
                                      }),
                                    }),
                                  }),
                                },
                                t
                              )
                            ),
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        s &&
                          (s.slideNext(),
                          n >= 0 && l((e) => e + 1),
                          n > (null == e ? void 0 : e.length) - 2 && l(0));
                      },
                      className:
                        "bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300  rounded-full px-7 py-6 m-auto block mt-10",
                      children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        className: "w-6 h-6 font-bold",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      l()(() => s.e(429).then(s.t.bind(s, 429, 23)), {
        loadableGenerated: { webpack: () => [429] },
        ssr: !1,
      });
    },
    5271: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(7381);
      function n() {
        let [e, t] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              t(window.scrollY);
            };
            return (
              window.addEventListener("scroll", e),
              e(),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, []),
          (0, a.jsx)("div", {
            className: "mx-[5%] max-sm:hidden  ",
            children: (0, a.jsxs)("div", {
              className: "".concat(
                e >= 220 && e <= 1e3
                  ? "-translate-y-10 duration-500"
                  : e >= 4400 && e <= 5646
                  ? "-translate-y-10 duration-500"
                  : "translate-y-96 duration-500",
                "    flex gap-20 justify-around items-center bg-[#22202092] mt-10 w-fit m-auto py-4 px-5 rounded-full fixed top-[39rem] left-0 right-0"
              ),
              children: [
                (0, a.jsx)("h1", {
                  className: "text-[20px] font-bold text-white",
                  children: "Book a free 15 minute growth call",
                }),
                (0, a.jsx)("div", {
                  children: (0, a.jsxs)("div", {
                    className: "flex justify-center gap-5 items-center ",
                    children: [
                      (0, a.jsx)(r.rU, {
                        to: "pricing",
                        spy: !0,
                        smooth: !0,
                        offset: 50,
                        duration: 700,
                        className:
                          "bg-[#FFFFFF] cursor-pointer capitalize text-[#0d0d0dd9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:bg-[#4c4d4a43] hover:text-[#fffffffd] duration-300  max-sm:px-4 max-sm:py-2 max-sm:w-full text-center",
                        children: "view pricing",
                      }),
                      (0, a.jsxs)("a", {
                        href: "https://forms.gle/1va9vdAy1a4KWA229",
                        target: "blank",
                        className:
                          "bg-[#4c4d4a43] w-fit text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#DBFA9B]  max-sm:px-4 max-sm:py-2 max-sm:text-[1.125rem] flex items-center gap-2",
                        children: [
                          (0, a.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            class: "lucide lucide-phone",
                            children: (0, a.jsx)("path", {
                              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                            }),
                          }),
                          " ",
                          "Book a call",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    7177: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var a = s(7437),
        i = s(2265),
        r = s(6691),
        n = s.n(r),
        l = {
          src: "/_next/static/media/whatsapp.57db29ba.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXE6slMaXHV9djJ78xZ0Gsitjnt+O7k7eb/+P+257zu+O+74sL//P9BxlDm9ujx9vHt8O1MzFo2wUhw0n135IJ61IZo23eO7J3O7dON2peDXEouAAAAEXRSTlPsAOr5/v21pSv8q+sx/f6Uws54Z8cAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABCSURBVHicBcEHAoAwCASwowu6rNCh/v+jJiBJ3qdGELdUl2soK0/tJwF6TbMOwHbenwEc4nzzKRhPiDFAcDPXykI/Yp0CuhS7GugAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        o = {
          src: "/_next/static/media/drive.290ef38f.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEV+umsWomT/2S9EgviQpkAgqGQVmmX82jZFhvT/2jd5uVL/2Dj73Tkjp2JIrlv/2zofpmUuip4epF8XqlE2jcNmlNFGiO83f/9+osH42T5Ikf7/6zodrmfI3kopo4h6o8xXjQ35AAAAGnRSTlMBkhu3Cs4ahXzpOzvPcvNy4+HkS2fiZUrMnPv0WHEAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABASURBVHicFcGHEYAwDACxT3fovTnA/ltySECVUg3gw62NB9rSZe0hDsUkzRZTpmiznoQyOre+B/Nz/XZYREQ2PmT/A0vBR6qRAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: "/_next/static/media/sheets.2a2374ce.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVhxW4YnEgcsDwgsT9w04Qms0UstEiv47o6ulVz0YFjwnSB05OB05InuUY3vVNSx2v0piKYAAAADXRSTlMHAtr9/drP/fdJSP39F+Cq9gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADhJREFUeJxVyzkSwCAMA0D5wCQBif//lmGo0m2zsGI8rxnQGMrvgqoDSWwAPHtP/2GNuRw4PVi2ATT8AXBqCWNCAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = s(8278);
      function m() {
        let [e, t] = (0, i.useState)(null);
        return (0, a.jsx)("div", {
          id: "process",
          className: "mx-[%] mt-80 hidden2",
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex justify-between max-sm:justify-center items-end mx-[3%] max-sm:flex flex-wrap max-sm:gap-10",
                children: [
                  (0, a.jsxs)("h1", {
                    className:
                      "text-[76px] max-sm:text-[30px] max-sm:text-center text-[#ffffff] font-[700]  w-[70%] max-sm:w-full max-sm:leading-9 leading-[72px]",
                    children: [
                      "See the factors that drive your",
                      " ",
                      (0, a.jsx)("span", {
                        className: " text-[#e0f63c]",
                        children: "growth",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-10  items-center",
                    children: [
                      (0, a.jsx)("button", {
                        onClick: () => {
                          e && e.slidePrev();
                        },
                        className:
                          "bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300  rounded-full px-7 py-6",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          stroke: "currentColor",
                          className: "w-6 h-6 font-bold",
                          children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
                          }),
                        }),
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => {
                          e && e.slideNext();
                        },
                        className:
                          "bg-[#4c4d4a43] capitalize text-[#ffffff] text-[22px] font-[500] hover:text-[#0d0d0dd9] hover:bg-[#e0f63c] duration-300  rounded-full px-7 py-6",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          stroke: "currentColor",
                          className: "w-6 h-6 font-bold",
                          children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mt-20",
                children: (0, a.jsx)(x.tq, {
                  onSwiper: t,
                  pagination: { clickable: !0 },
                  breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 1, spaceBetween: 10 },
                    580: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    980: { slidesPerView: 3.7 },
                  },
                  children: [
                    {
                      title: "viral edits",
                      desc: "Want your audience to watch your entire video? Get it done with our highly engaging edits!  Retention-based edits is the easiest way to increase your watch time which boosts the YouTube Algorithm to push out your content to the mass audience. ",
                      subtitle: "200% ",
                      bottomtext: "views increase",
                    },
                    {
                      title: " Thumbnails",
                      desc: "Want your audience to stop scrolling? Get our clickable/ killer thumbnails that is sure to get the CTR high. A compelling thumbnail makes your content more eye-catching, appealing, the higher the CTR the higher your views!",
                      subtitle: "15%",
                      bottomtext: "CTR increase",
                    },
                    {
                      title: "engaging Title",
                      desc: "Did you know 80% of your ranking depends on a good title? Dont worry! We generate banger/crazy titles for you.  Titles spark curiosity, and help you reach to the top of YouTube search result through proper keywords and tags.",
                      subtitle: "10%",
                      bottomtext: " more clicks",
                    },
                    {
                      title: "SEO",
                      desc: "Killer videos but no reach? Our team helps you rank first on YouTube with proper SEO optimization & tags. SEO helps you rank better as well as pop up in YouTube’s suggested videos.                 ",
                      subtitle: "30%",
                      bottomtext: "more reach",
                    },
                    {
                      title: "Fire Hooks                ",
                      desc: "8 seconds is all you get for your viewers attention! Want to get your reels viral? Get the best hooks from your existing videos! Hooks get you the immediate engagements and cut down the click-away rates to almost 50%                ",
                      subtitle: "5x",
                      bottomtext: "more engagement",
                    },
                  ].map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        children: (0, a.jsx)(x.o5, {
                          children: (0, a.jsxs)("div", {
                            className:
                              "group h-[480px] md:min-w-[400px] max-sm:h-[450px] max-sm:m-auto  border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer   rounded-lg  p-8 hover:bg-[#e0f63c] hover:text-black duration-300 ",
                            children: [
                              (0, a.jsx)("h1", {
                                className:
                                  "text-[40px] max-sm:text-[30px]   text-center text-[#fff] group-hover:text-black duration-300 font-bold uppercase ",
                                children: null == e ? void 0 : e.title,
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "group-hover:bg-black bg-white w-full h-[1px]",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mt-20 group-hover:hidden duration-300 ",
                                children: [
                                  (0, a.jsxs)("h1", {
                                    className:
                                      "text-[96px] max-sm:text-[80px] text-[#ffffff] group-hover:hidden duration-300 mainfont font-extrabold text-center leading-[100px]",
                                    children: [e.subtitle, " "],
                                  }),
                                  (0, a.jsx)("h1", {
                                    className:
                                      "text-[33px] max-sm:text-[26px] text-center text-[#fff] group-hover:hidden duration-300 font-bold uppercase  ",
                                    children: null == e ? void 0 : e.bottomtext,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("h1", {
                                className:
                                  "hidden group-hover:block duration-300 text-[20px] text-left font-bold mt-10 capitalize",
                                children: null == e ? void 0 : e.desc,
                              }),
                            ],
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "grid grid-cols-4 gap-5 items-center place-items-center mt-40 max-sm:grid-cols-1 mx-[3%]",
                children: [
                  {
                    title: "Talking-Head Videos",
                    desc: "Grow a personal brand  in any niche with our trendy edits.              ",
                  },
                  {
                    title: "Automated Videos",
                    desc: "Get edits like MagnatesMedia with zero efforts.",
                  },
                  {
                    title: "Podcast Editing",
                    desc: "Make those lengthy podcasts interesting by cutting out the fluff.",
                  },
                  {
                    title: "Podcast to Shorts ",
                    desc: "Clip short form videos from your lengthy podcasts.",
                  },
                  {
                    title: "UGC ADS",
                    desc: "High converting ads for any site, facebook, Instagram, TikTok.",
                  },
                  {
                    title: "YouTube Shorts              ",
                    desc: "Get viral with our highly engaging short-form videos.              ",
                  },
                  {
                    title: "Vlogs",
                    desc: "Dynamic edits to turn your vlogs into a real cinematic experience.              ",
                  },
                  {
                    title: "Webinars",
                    desc: "Turn those seminars, webinars into interesting pieces of content.",
                  },
                ].map((e, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "group border border-[#e0f63c]  bg-[#0c0c0c]  cursor-pointer  p-4 rounded-xl  h-[12rem] hover:bg-[#e0f63c] hover:text-black duration-300",
                      children: [
                        (0, a.jsx)("h1", {
                          className:
                            "text-[#f9f9f9] group-hover:text-black text-[25px] font-bold ",
                          children: null == e ? void 0 : e.title,
                        }),
                        (0, a.jsx)("article", {
                          className:
                            "text-[20px]  font-medium mt-4 text-white group-hover:text-black",
                          children: null == e ? void 0 : e.desc,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-3 place-items-center justify-center items-center gap-10 mx-[3%]  mt-40 max-sm:grid-cols-1",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "block  items-center border  hover:border-[#fff] duration-300 border-[#e0f63c]  p-4 rounded-xl h-[350px]",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-[#fafafa] p-5 rounded-full w-fit m-auto",
                        children: (0, a.jsx)(n(), {
                          src: o,
                          alt: "action",
                          width: 50,
                          height: 50,
                          className: "m-auto block ",
                        }),
                      }),
                      (0, a.jsx)("h3", {
                        className:
                          "text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center",
                        children: "Raw footage",
                      }),
                      (0, a.jsx)("article", {
                        className:
                          "text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center",
                        children:
                          "Share your pre-recorded or raw videos in your own unlimited storage Google drive folder.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "block  items-center border  hover:border-[#fff] duration-300 border-[#e0f63c]  p-4 rounded-xl h-[350px]",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-[#fafafa] p-5 rounded-full w-fit m-auto",
                        children: (0, a.jsx)(n(), {
                          src: l,
                          alt: "WhatsApp",
                          width: 50,
                          height: 50,
                          className: "m-auto block ",
                        }),
                      }),
                      (0, a.jsx)("h3", {
                        className:
                          "text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center",
                        children: "Available 24/7",
                      }),
                      (0, a.jsx)("article", {
                        className:
                          "text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center",
                        children:
                          "Contact us regarding anything on WhatsApp whenever you want.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "block  items-center border  hover:border-[#fff] duration-300 border-[#e0f63c]  p-4 rounded-xl h-[350px]",
                    children: [
                      (0, a.jsx)("div", {
                        className: "bg-[#fafafa] p-5 rounded-full w-fit m-auto",
                        children: (0, a.jsx)(n(), {
                          src: d,
                          alt: "Sheet",
                          width: 50,
                          height: 50,
                          className: "m-auto block ",
                        }),
                      }),
                      (0, a.jsx)("h3", {
                        className:
                          "text-[#fdfdfd] mt-12  text-[28px] max-sm:text-[20px] mainfont font-bold leading-[32px] text-center",
                        children: "Real-time Updates",
                      }),
                      (0, a.jsx)("article", {
                        className:
                          "text-[22px] mt-12 max-sm:text-[18px] leading-[32px] text-[#fdfdfc] mainfont text-center",
                        children:
                          "Check out our personalized CRM system anytime you wanna know about the process.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      s(4612), s(501);
    },
    8887: function () {},
    480: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logopng.fad4244e.png",
        height: 219,
        width: 768,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX9/f3////9/f25ubn///+rq6vW1tbHx8ckafynAAAACHRSTlM2LEbQJezO7Gd978AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BmZWJgZGJgZGBjZ2BkYWBgBAABWQAiWdKFgwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
  },
  function (e) {
    e.O(0, [982, 420, 213, 691, 409, 971, 938, 744], function () {
      return e((e.s = 6534));
    }),
      (_N_E = e.O());
  },
]);
