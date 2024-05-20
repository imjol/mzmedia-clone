(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [409],
  {
    7128: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        UQ: function () {
          return C;
        },
      });
      var o,
        a,
        i,
        l,
        s = r(7437),
        d = r(2265),
        c = r.t(d, 2),
        u = r(7431),
        f = r(4769);
      function p(e) {
        return null !== e && "object" == typeof e && e.constructor === Object;
      }
      function g(e) {
        if (!p(e)) return e;
        let t = {};
        for (let r in e) t[r] = g(e[r]);
        return t;
      }
      function h(e, t) {
        if (p(t) && 0 === Object.keys(t).length) return g({ ...e, ...t });
        let r = { ...e, ...t };
        if (p(t) && p(e))
          for (let n in t)
            p(t[n]) && n in e && p(e[n])
              ? (r[n] = h(e[n], t[n]))
              : (r[n] = p(t[n]) ? g(t[n]) : t[n]);
        return r;
      }
      let m = {
          accordion: {
            root: {
              base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
              flush: { off: "rounded-lg border", on: "border-b" },
            },
            content: {
              base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
            },
            title: {
              arrow: {
                base: "h-6 w-6 shrink-0",
                open: { off: "", on: "rotate-180" },
              },
              base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
              flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "bg-transparent dark:bg-transparent",
              },
              heading: "",
              open: {
                off: "",
                on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
              },
            },
          },
          alert: {
            base: "flex flex-col gap-2 p-4 text-sm",
            borderAccent: "border-t-4",
            closeButton: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
              icon: "w-5 h-5",
              color: {
                info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                failure:
                  "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                success:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                green:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                yellow:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                blue: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                indigo:
                  "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                light:
                  "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
              },
            },
            color: {
              info: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
              failure:
                "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              success:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              warning:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              green:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              yellow:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              blue: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
              lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
              dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
              indigo:
                "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
              purple:
                "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
              teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
              light:
                "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
            },
            icon: "mr-3 inline h-5 w-5 flex-shrink-0",
            rounded: "rounded-lg",
            wrapper: "flex items-center",
          },
          avatar: {
            root: {
              base: "flex justify-center items-center space-x-4 rounded",
              bordered: "p-1 ring-2",
              rounded: "rounded-full",
              color: {
                dark: "ring-gray-800 dark:ring-gray-800",
                failure: "ring-red-500 dark:ring-red-700",
                gray: "ring-gray-500 dark:ring-gray-400",
                info: "ring-cyan-400 dark:ring-cyan-800",
                light: "ring-gray-300 dark:ring-gray-500",
                purple: "ring-purple-500 dark:ring-purple-600",
                success: "ring-green-500 dark:ring-green-500",
                warning: "ring-yellow-300 dark:ring-yellow-500",
                pink: "ring-pink-500 dark:ring-pink-500",
              },
              img: {
                base: "rounded",
                off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
                on: "",
                placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1",
              },
              size: {
                xs: "w-6 h-6",
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-20 h-20",
                xl: "w-36 h-36",
              },
              stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
              statusPosition: {
                "bottom-left": "-bottom-1 -left-1",
                "bottom-center": "-bottom-1 center",
                "bottom-right": "-bottom-1 -right-1",
                "top-left": "-top-1 -left-1",
                "top-center": "-top-1 center",
                "top-right": "-top-1 -right-1",
                "center-right": "center -right-1",
                center: "center center",
                "center-left": "center -left-1",
              },
              status: {
                away: "bg-yellow-400",
                base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
                busy: "bg-red-400",
                offline: "bg-gray-400",
                online: "bg-green-400",
              },
              initials: {
                text: "font-medium text-gray-600 dark:text-gray-300",
                base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600",
              },
            },
            group: { base: "flex -space-x-4" },
            groupCounter: {
              base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
            },
          },
          badge: {
            root: {
              base: "flex h-fit items-center gap-1 font-semibold",
              color: {
                info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
                failure:
                  "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                success:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                indigo:
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
                pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
                blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
                light:
                  "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
                green:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
                red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
                yellow:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
              },
              href: "group",
              size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
            },
            icon: {
              off: "rounded px-2 py-0.5",
              on: "rounded-full p-1.5",
              size: { xs: "w-3 h-3", sm: "w-3.5 h-3.5" },
            },
          },
          blockquote: {
            root: {
              base: "text-xl italic font-semibold text-gray-900 dark:text-white",
            },
          },
          breadcrumb: {
            root: { base: "", list: "flex items-center" },
            item: {
              base: "group flex items-center",
              chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
              href: {
                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
                on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
              },
              icon: "mr-2 h-4 w-4",
            },
          },
          button: {
            base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
            fullSized: "w-full",
            color: {
              dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
              failure:
                "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
              gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
              info: "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
              light:
                "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
              purple:
                "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
              success:
                "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
              warning:
                "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
              blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
              green:
                "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
              indigo:
                "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
              lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
              pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
              red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
              teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
              yellow:
                "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700",
            },
            disabled: "cursor-not-allowed opacity-50",
            isProcessing: "cursor-wait",
            spinnerSlot:
              "absolute h-full top-0 flex items-center animate-fade-in",
            spinnerLeftPosition: {
              xs: "left-2",
              sm: "left-3",
              md: "left-4",
              lg: "left-5",
              xl: "left-6",
            },
            gradient: {
              cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              failure:
                "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
              info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
              lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
              pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
              purple:
                "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
              success:
                "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
              teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
            },
            gradientDuoTone: {
              cyanToBlue:
                "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              greenToBlue:
                "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
              pinkToOrange:
                "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
              purpleToBlue:
                "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              purpleToPink:
                "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
              redToYellow:
                "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
              tealToLime:
                "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
            },
            inner: {
              base: "flex items-stretch items-center transition-all duration-200",
              position: {
                none: "",
                start: "rounded-r-none",
                middle: "rounded-none",
                end: "rounded-l-none",
              },
              outline: "border border-transparent",
              isProcessingPadding: {
                xs: "pl-8",
                sm: "pl-10",
                md: "pl-12",
                lg: "pl-16",
                xl: "pl-20",
              },
            },
            label:
              "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
            outline: {
              color: {
                gray: "border border-gray-900 dark:border-white",
                default: "border-0",
                light: "",
              },
              off: "",
              on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
              pill: { off: "rounded-md", on: "rounded-full" },
            },
            pill: { off: "rounded-lg", on: "rounded-full" },
            size: {
              xs: "text-xs px-2 py-1",
              sm: "text-sm px-3 py-1.5",
              md: "text-sm px-4 py-2",
              lg: "text-base px-5 py-2.5",
              xl: "text-base px-6 py-3",
            },
          },
          buttonGroup: {
            base: "inline-flex",
            position: {
              none: "focus:ring-2",
              start: "rounded-r-none",
              middle: "rounded-none border-l-0 pl-0",
              end: "rounded-l-none border-l-0 pl-0",
            },
          },
          card: {
            root: {
              base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
              children: "flex h-full flex-col justify-center gap-4 p-6",
              horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row",
              },
              href: "hover:bg-gray-100 dark:hover:bg-gray-700",
            },
            img: {
              base: "",
              horizontal: {
                off: "rounded-t-lg",
                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
              },
            },
          },
          carousel: {
            root: {
              base: "relative h-full w-full",
              leftControl:
                "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl:
                "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
            },
            item: {
              base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              wrapper: {
                off: "w-full flex-shrink-0 transform cursor-default snap-center",
                on: "w-full flex-shrink-0 transform cursor-grab snap-center",
              },
            },
            control: {
              base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
              icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
              snap: "snap-x",
            },
          },
          checkbox: {
            root: {
              base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
              color: {
                default:
                  "focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600",
                dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
                failure:
                  "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
                gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                info: "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
                light:
                  "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                purple:
                  "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
                success:
                  "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
                warning:
                  "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
                blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
                cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
                green:
                  "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
                indigo:
                  "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
                lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
                pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
                red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
                teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
                yellow:
                  "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
              },
            },
          },
          datepicker: {
            root: { base: "relative" },
            popup: {
              root: {
                base: "absolute top-10 z-50 block pt-2",
                inline: "relative top-0 z-auto",
                inner:
                  "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
              },
              header: {
                base: "",
                title:
                  "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
                selectors: {
                  base: "flex justify-between mb-2",
                  button: {
                    base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                    prev: "",
                    next: "",
                    view: "",
                  },
                },
              },
              view: { base: "p-1" },
              footer: {
                base: "flex mt-2 space-x-2",
                button: {
                  base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                  today:
                    "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
                  clear:
                    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                },
              },
            },
            views: {
              days: {
                header: {
                  base: "grid grid-cols-7 mb-1",
                  title:
                    "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
                },
                items: {
                  base: "grid w-64 grid-cols-7",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500",
                  },
                },
              },
              months: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500",
                  },
                },
              },
              years: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500",
                  },
                },
              },
              decades: {
                items: {
                  base: "grid w-64 grid-cols-4",
                  item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500",
                  },
                },
              },
            },
          },
          darkThemeToggle: {
            root: {
              base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
              icon: "h-5 w-5",
            },
          },
          dropdown: {
            arrowIcon: "ml-2 h-4 w-4",
            content: "py-1 focus:outline-none",
            floating: {
              animation: "transition-opacity",
              arrow: {
                base: "absolute z-10 h-2 w-2 rotate-45",
                style: {
                  dark: "bg-gray-900 dark:bg-gray-700",
                  light: "bg-white",
                  auto: "bg-white dark:bg-gray-700",
                },
                placement: "-4px",
              },
              base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
              content: "py-1 text-sm text-gray-700 dark:text-gray-200",
              divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
              header:
                "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
              hidden: "invisible opacity-0",
              item: {
                container: "",
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                icon: "mr-2 h-4 w-4",
              },
              style: {
                dark: "bg-gray-900 text-white dark:bg-gray-700",
                light: "border border-gray-200 bg-white text-gray-900",
                auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
              },
              target: "w-fit",
            },
            inlineWrapper: "flex items-center",
          },
          fileInput: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-md" },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          floatingLabel: {
            input: {
              default: {
                filled: {
                  sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                  md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                },
                outlined: {
                  sm: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                  md: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                },
                standard: {
                  sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                },
              },
              success: {
                filled: {
                  sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                  md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                },
                outlined: {
                  sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                  md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                },
                standard: {
                  sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                  md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                },
              },
              error: {
                filled: {
                  sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
                  md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
                },
                outlined: {
                  sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                  md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                },
                standard: {
                  sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                  md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                },
              },
            },
            label: {
              default: {
                filled: {
                  sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-gray-500  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                  md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                },
                outlined: {
                  sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                  md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                },
                standard: {
                  sm: "absolute text-xs text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                  md: "absolute text-sm text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                },
              },
              success: {
                filled: {
                  sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                  md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                },
                outlined: {
                  sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                  md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                },
                standard: {
                  sm: "absolute text-xs text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                  md: "absolute text-sm text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                },
              },
              error: {
                filled: {
                  sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                  md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                },
                outlined: {
                  sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                  md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                },
                standard: {
                  sm: "absolute text-xs text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                  md: "absolute text-sm text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                },
              },
            },
            helperText: {
              default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
              success: "mt-2 text-xs text-green-600 dark:text-green-400",
              error: "mt-2 text-xs text-red-600 dark:text-red-400",
            },
          },
          footer: {
            root: {
              base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
              container: "w-full p-6",
              bgDark: "bg-gray-800",
            },
            groupLink: {
              base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
              link: { base: "last:mr-0 md:mr-6 me-4", href: "hover:underline" },
              col: "flex-col space-y-4",
            },
            icon: {
              base: "text-gray-500 dark:hover:text-white",
              size: "h-5 w-5",
            },
            title: {
              base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
            },
            divider: {
              base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
            },
            copyright: {
              base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
              href: "ml-1 hover:underline",
              span: "ml-1",
            },
            brand: {
              base: "mb-4 flex items-center sm:mb-0",
              img: "mr-3 h-8",
              span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
            },
          },
          helperText: {
            root: {
              base: "mt-2 text-sm",
              colors: {
                gray: "text-gray-500 dark:text-gray-400",
                info: "text-cyan-700 dark:text-cyan-800",
                success: "text-green-600 dark:text-green-500",
                failure: "text-red-600 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
              },
            },
          },
          kbd: {
            root: {
              base: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
              icon: "inline-block",
            },
          },
          label: {
            root: {
              base: "text-sm font-medium",
              disabled: "opacity-50",
              colors: {
                default: "text-gray-900 dark:text-white",
                info: "text-cyan-500 dark:text-cyan-600",
                failure: "text-red-700 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
                success: "text-green-700 dark:text-green-500",
              },
            },
          },
          listGroup: {
            root: {
              base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left",
            },
            item: {
              base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
              link: {
                base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
                active: {
                  off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                  on: "bg-cyan-700 text-white dark:bg-gray-800",
                },
                disabled: {
                  off: "",
                  on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed",
                },
                href: { off: "", on: "" },
                icon: "mr-2 h-4 w-4 fill-current",
              },
            },
          },
          list: {
            root: {
              base: "space-y-1 text-gray-500 list-inside dark:text-gray-400",
              ordered: { off: "list-disc", on: "list-decimal" },
              horizontal:
                "flex flex-wrap items-center space-x-4 space-y-0 justify-center list-none",
              unstyled: "list-none",
              nested: "ps-5 mt-2",
            },
          },
          modal: {
            root: {
              base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
              show: {
                on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                off: "hidden",
              },
              sizes: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl",
              },
              positions: {
                "top-left": "items-start justify-start",
                "top-center": "items-start justify-center",
                "top-right": "items-start justify-end",
                "center-left": "items-center justify-start",
                center: "items-center justify-center",
                "center-right": "items-center justify-end",
                "bottom-right": "items-end justify-end",
                "bottom-center": "items-end justify-center",
                "bottom-left": "items-end justify-start",
              },
            },
            content: {
              base: "relative h-full w-full p-4 md:h-auto",
              inner:
                "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]",
            },
            body: { base: "p-6 flex-1 overflow-auto", popup: "pt-0" },
            header: {
              base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
              popup: "p-2 border-b-0",
              title: "text-xl font-medium text-gray-900 dark:text-white",
              close: {
                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "h-5 w-5",
              },
            },
            footer: {
              base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
              popup: "border-t",
            },
          },
          navbar: {
            root: {
              base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
              rounded: { on: "rounded", off: "" },
              bordered: { on: "border", off: "" },
              inner: {
                base: "mx-auto flex flex-wrap items-center justify-between",
                fluid: { on: "", off: "container" },
              },
            },
            brand: { base: "flex items-center" },
            collapse: {
              base: "w-full md:block md:w-auto",
              list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
              hidden: { on: "hidden", off: "" },
            },
            link: {
              base: "block py-2 pr-4 pl-3 md:p-0",
              active: {
                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
              disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: "",
              },
            },
            toggle: {
              base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
              icon: "h-6 w-6 shrink-0",
            },
          },
          pagination: {
            base: "",
            layout: {
              table: {
                base: "text-sm text-gray-700 dark:text-gray-400",
                span: "font-semibold text-gray-900 dark:text-white",
              },
            },
            pages: {
              base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
              showIcon: "inline-flex",
              previous: {
                base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                icon: "h-5 w-5",
              },
              next: {
                base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                icon: "h-5 w-5",
              },
              selector: {
                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                active:
                  "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                disabled: "opacity-50 cursor-normal",
              },
            },
          },
          progress: {
            base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
            label: "mb-1 flex justify-between font-medium dark:text-white",
            bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
            color: {
              dark: "bg-gray-600 dark:bg-gray-300",
              blue: "bg-blue-600",
              red: "bg-red-600 dark:bg-red-500",
              green: "bg-green-600 dark:bg-green-500",
              yellow: "bg-yellow-400",
              indigo: "bg-indigo-600 dark:bg-indigo-500",
              purple: "bg-purple-600 dark:bg-purple-500",
              cyan: "bg-cyan-600",
              gray: "bg-gray-500",
              lime: "bg-lime-600",
              pink: "bg-pink-500",
              teal: "bg-teal-600",
            },
            size: { sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" },
          },
          radio: {
            root: {
              base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
            },
          },
          rangeSlider: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
                sizes: { sm: "h-1 range-sm", md: "h-2", lg: "h-3 range-lg" },
              },
            },
          },
          rating: {
            root: { base: "flex items-center" },
            star: {
              empty: "text-gray-300 dark:text-gray-500",
              filled: "text-yellow-400",
              sizes: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-10 h-10" },
            },
          },
          ratingAdvanced: {
            base: "flex items-center",
            label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
            progress: {
              base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
              fill: "h-5 rounded bg-yellow-400",
              label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
            },
          },
          select: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              select: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          textInput: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              rightIcon: {
                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
                withRightIcon: { on: "pr-10", off: "" },
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
              },
            },
          },
          textarea: {
            base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
            colors: {
              gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              failure:
                "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              warning:
                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              success:
                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            },
            withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
          },
          toggleSwitch: {
            root: {
              base: "group relative flex items-center rounded-lg focus:outline-none",
              active: {
                on: "cursor-pointer",
                off: "cursor-not-allowed opacity-50",
              },
              label:
                "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
            },
            toggle: {
              base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
              checked: {
                on: "after:translate-x-full after:border-white",
                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                color: {
                  blue: " bg-cyan-700 border-cyan-700",
                  dark: "bg-dark-700 border-dark-900",
                  failure: "bg-red-700 border-red-900",
                  gray: "bg-gray-500 border-gray-600",
                  green: "bg-green-600 border-green-700",
                  light: "bg-light-700 border-light-900",
                  red: "bg-red-700 border-red-900",
                  purple: "bg-purple-700 border-purple-900",
                  success: "bg-green-500 border-green-500",
                  yellow: "bg-yellow-400 border-yellow-400",
                  warning: "bg-yellow-600 border-yellow-600",
                  cyan: "bg-cyan-500 border-cyan-500",
                  lime: "bg-lime-400 border-lime-400",
                  indigo: "bg-indigo-400 border-indigo-400",
                  teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                  info: "bg-cyan-600 border-cyan-600",
                  pink: "bg-pink-600 border-pink-600",
                },
              },
              sizes: {
                sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
                md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
                lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6",
              },
            },
          },
          sidebar: {
            root: {
              base: "h-full",
              collapsed: { on: "w-16", off: "w-64" },
              inner:
                "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800",
            },
            collapse: {
              button:
                "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              icon: {
                base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                open: { off: "", on: "text-gray-900" },
              },
              label: {
                base: "ml-3 flex-1 whitespace-nowrap text-left",
                icon: {
                  base: "h-6 w-6 transition ease-in-out delay-0",
                  open: { on: "rotate-180", off: "" },
                },
              },
              list: "space-y-2 py-2",
            },
            cta: {
              base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
              color: {
                blue: "bg-cyan-50 dark:bg-cyan-900",
                dark: "bg-dark-50 dark:bg-dark-900",
                failure: "bg-red-50 dark:bg-red-900",
                gray: "bg-alternative-50 dark:bg-alternative-900",
                green: "bg-green-50 dark:bg-green-900",
                light: "bg-light-50 dark:bg-light-900",
                red: "bg-red-50 dark:bg-red-900",
                purple: "bg-purple-50 dark:bg-purple-900",
                success: "bg-green-50 dark:bg-green-900",
                yellow: "bg-yellow-50 dark:bg-yellow-900",
                warning: "bg-yellow-50 dark:bg-yellow-900",
              },
            },
            item: {
              base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              active: "bg-gray-100 dark:bg-gray-700",
              collapsed: {
                insideCollapse: "group w-full pl-8 transition duration-75",
                noIcon: "font-bold",
              },
              content: { base: "px-3 flex-1 whitespace-nowrap" },
              icon: {
                base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                active: "text-gray-700 dark:text-gray-100",
              },
              label: "",
              listItem: "",
            },
            items: { base: "" },
            itemGroup: {
              base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
            },
            logo: {
              base: "mb-5 flex items-center pl-2.5",
              collapsed: {
                on: "hidden",
                off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
              },
              img: "mr-3 h-6 sm:h-7",
            },
          },
          spinner: {
            base: "inline animate-spin text-gray-200",
            color: {
              failure: "fill-red-600",
              gray: "fill-gray-600",
              info: "fill-cyan-600",
              pink: "fill-pink-600",
              purple: "fill-purple-600",
              success: "fill-green-500",
              warning: "fill-yellow-400",
            },
            light: {
              off: {
                base: "dark:text-gray-600",
                color: {
                  failure: "",
                  gray: "dark:fill-gray-300",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
              on: {
                base: "",
                color: {
                  failure: "",
                  gray: "",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
            },
            size: {
              xs: "w-3 h-3",
              sm: "w-4 h-4",
              md: "w-6 h-6",
              lg: "w-8 h-8",
              xl: "w-10 h-10",
            },
          },
          table: {
            root: {
              base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
              shadow:
                "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
              wrapper: "relative",
            },
            body: {
              base: "group/body",
              cell: {
                base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
              },
            },
            head: {
              base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
              cell: {
                base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3",
              },
            },
            row: {
              base: "group/row",
              hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
              striped:
                "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
            },
          },
          tabs: {
            base: "flex flex-col gap-2",
            tablist: {
              base: "flex text-center",
              styles: {
                default:
                  "flex-wrap border-b border-gray-200 dark:border-gray-700",
                underline:
                  "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
                pills:
                  "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
                fullWidth:
                  "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
              },
              tabitem: {
                base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
                styles: {
                  default: {
                    base: "rounded-t-lg",
                    active: {
                      on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                      off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
                    },
                  },
                  underline: {
                    base: "rounded-t-lg",
                    active: {
                      on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                      off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                  pills: {
                    base: "",
                    active: {
                      on: "rounded-lg bg-cyan-600 text-white",
                      off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
                    },
                  },
                  fullWidth: {
                    base: "ml-0 first:ml-0 w-full rounded-none flex",
                    active: {
                      on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
                      off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
                    },
                  },
                },
                icon: "mr-2 h-5 w-5",
              },
            },
            tabitemcontainer: {
              base: "",
              styles: { default: "", underline: "", pills: "", fullWidth: "" },
            },
            tabpanel: "py-3",
          },
          timeline: {
            root: {
              direction: {
                horizontal: "items-base sm:flex",
                vertical:
                  "relative border-l border-gray-200 dark:border-gray-700",
              },
            },
            item: {
              root: {
                horizontal: "relative mb-6 sm:mb-0",
                vertical: "mb-10 ml-6",
              },
              content: {
                root: { base: "mt-3 sm:pr-8" },
                body: {
                  base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
                },
                time: {
                  base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                },
                title: {
                  base: "text-lg font-semibold text-gray-900 dark:text-white",
                },
              },
              point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                marker: {
                  base: {
                    horizontal:
                      "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                    vertical:
                      "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                  },
                  icon: {
                    base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
                    wrapper:
                      "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
                  },
                },
                vertical: "",
              },
            },
          },
          toast: {
            root: {
              base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
              closed: "opacity-0 ease-out",
            },
            toggle: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
              icon: "h-5 w-5 shrink-0",
            },
          },
          tooltip: {
            target: "w-fit",
            animation: "transition-opacity",
            arrow: {
              base: "absolute z-10 h-2 w-2 rotate-45",
              style: {
                dark: "bg-gray-900 dark:bg-gray-700",
                light: "bg-white",
                auto: "bg-white dark:bg-gray-700",
              },
              placement: "-4px",
            },
            base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
            hidden: "invisible opacity-0",
            style: {
              dark: "bg-gray-900 text-white dark:bg-gray-700",
              light: "border border-gray-200 bg-white text-gray-900",
              auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
            },
            content: "relative z-20",
          },
        },
        b = { theme: g(m) };
      function y(e) {
        e && (b.theme = h(m, e));
      }
      function v() {
        return g(b.theme);
      }
      let x = (0, d.createContext)(void 0);
      function w() {
        let e = (0, d.useContext)(x);
        if (!e)
          throw Error(
            "useAccordionContext should be used within the AccordionPanelContext provider!"
          );
        return e;
      }
      let k = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { isOpen: o } = w(),
            a = h(v().accordion.content, r);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(a.base, t),
            "data-testid": "flowbite-accordion-content",
            hidden: !o,
            ...n,
            children: e,
          });
        },
        E = ({ children: e, ...t }) => {
          let { alwaysOpen: r } = t,
            [n, o] = (0, d.useState)(t.isOpen),
            a = r ? { ...t, isOpen: n, setOpen: () => o(!n) } : t;
          return (0, s.jsx)(x.Provider, { value: a, children: e });
        },
        S = ({
          as: e = "h2",
          children: t,
          className: r,
          theme: n = {},
          ...o
        }) => {
          let { arrowIcon: a, flush: i, isOpen: l, setOpen: d } = w(),
            c = h(v().accordion.title, n);
          return (0, s.jsxs)("button", {
            className: (0, f.m6)(
              c.base,
              c.flush[i ? "on" : "off"],
              c.open[l ? "on" : "off"],
              r
            ),
            onClick: () => void 0 !== d && d(),
            type: "button",
            ...o,
            children: [
              (0, s.jsx)(e, {
                className: c.heading,
                "data-testid": "flowbite-accordion-heading",
                children: t,
              }),
              a &&
                (0, s.jsx)(a, {
                  "aria-hidden": !0,
                  className: (0, f.m6)(
                    c.arrow.base,
                    c.arrow.open[l ? "on" : "off"]
                  ),
                  "data-testid": "flowbite-accordion-arrow",
                }),
            ],
          });
        },
        T = ({
          alwaysOpen: e = !1,
          arrowIcon: t = u.kWQ,
          children: r,
          flush: n = !1,
          collapseAll: o = !1,
          className: a,
          theme: i = {},
          ...l
        }) => {
          let [c, p] = (0, d.useState)(o ? -1 : 0),
            g = (0, d.useMemo)(
              () =>
                d.Children.map(r, (r, o) =>
                  (0, d.cloneElement)(r, {
                    alwaysOpen: e,
                    arrowIcon: t,
                    flush: n,
                    isOpen: c === o,
                    setOpen: () => p(c === o ? -1 : o),
                  })
                ),
              [e, t, r, n, c]
            ),
            m = h(v().accordion.root, i);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(m.base, m.flush[n ? "on" : "off"], a),
            "data-testid": "flowbite-accordion",
            ...l,
            children: g,
          });
        };
      (T.displayName = "Accordion"),
        (E.displayName = "Accordion.Panel"),
        (S.displayName = "Accordion.Title"),
        (k.displayName = "Accordion.Content");
      let C = Object.assign(T, { Panel: E, Title: S, Content: k }),
        j = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let o = h(v().avatar.group, r);
          return (0, s.jsx)("div", {
            "data-testid": "avatar-group-element",
            className: (0, f.m6)(o.base, t),
            ...n,
            children: e,
          });
        };
      j.displayName = "Avatar.Group";
      let M = ({ className: e, href: t, theme: r = {}, total: n, ...o }) => {
        let a = h(v().avatar.groupCounter, r);
        return (0, s.jsxs)("a", {
          href: t,
          className: (0, f.m6)(a.base, e),
          ...o,
          children: ["+", n],
        });
      };
      M.displayName = "Avatar.GroupCounter";
      let N = ({
        alt: e = "",
        bordered: t = !1,
        children: r,
        className: n,
        color: o = "light",
        img: a,
        placeholderInitials: i = "",
        rounded: l = !1,
        size: d = "md",
        stacked: c = !1,
        status: u,
        statusPosition: p = "top-left",
        theme: g = {},
        ...m
      }) => {
        let b = h(v().avatar, g),
          y = (0, f.m6)(
            b.root.img.base,
            t && b.root.bordered,
            t && b.root.color[o],
            l && b.root.rounded,
            c && b.root.stacked,
            b.root.img.on,
            b.root.size[d]
          ),
          x = {
            className: (0, f.m6)(y, b.root.img.on),
            "data-testid": "flowbite-avatar-img",
          };
        return (0, s.jsxs)("div", {
          className: (0, f.m6)(b.root.base, n),
          "data-testid": "flowbite-avatar",
          ...m,
          children: [
            (0, s.jsxs)("div", {
              className: "relative",
              children: [
                a
                  ? "string" == typeof a
                    ? (0, s.jsx)("img", { alt: e, src: a, ...x })
                    : a({ alt: e, ...x })
                  : i
                  ? (0, s.jsx)("div", {
                      className: (0, f.m6)(
                        b.root.img.off,
                        b.root.initials.base,
                        c && b.root.stacked,
                        t && b.root.bordered,
                        t && b.root.color[o],
                        b.root.size[d],
                        l && b.root.rounded
                      ),
                      "data-testid": "flowbite-avatar-initials-placeholder",
                      children: (0, s.jsx)("span", {
                        className: (0, f.m6)(b.root.initials.text),
                        "data-testid":
                          "flowbite-avatar-initials-placeholder-text",
                        children: i,
                      }),
                    })
                  : (0, s.jsx)("div", {
                      className: (0, f.m6)(y, b.root.img.off),
                      "data-testid": "flowbite-avatar-img",
                      children: (0, s.jsx)("svg", {
                        className: b.root.img.placeholder,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                          clipRule: "evenodd",
                        }),
                      }),
                    }),
                u &&
                  (0, s.jsx)("span", {
                    "data-testid": "flowbite-avatar-status",
                    className: (0, f.m6)(
                      b.root.status.base,
                      b.root.status[u],
                      b.root.statusPosition[p]
                    ),
                  }),
              ],
            }),
            r && (0, s.jsx)("div", { children: r }),
          ],
        });
      };
      (N.displayName = "Avatar"), Object.assign(N, { Group: j, Counter: M });
      let P = ({
        children: e,
        color: t = "info",
        href: r,
        icon: n,
        size: o = "xs",
        className: a,
        theme: i = {},
        ...l
      }) => {
        let d = h(v().badge, i),
          c = () =>
            (0, s.jsxs)("span", {
              className: (0, f.m6)(
                d.root.base,
                d.root.color[t],
                d.root.size[o],
                d.icon[n ? "on" : "off"],
                a
              ),
              "data-testid": "flowbite-badge",
              ...l,
              children: [
                n &&
                  (0, s.jsx)(n, {
                    "aria-hidden": !0,
                    className: d.icon.size[o],
                    "data-testid": "flowbite-badge-icon",
                  }),
                e && (0, s.jsx)("span", { children: e }),
              ],
            });
        return r
          ? (0, s.jsx)("a", {
              className: d.root.href,
              href: r,
              children: (0, s.jsx)(c, {}),
            })
          : (0, s.jsx)(c, {});
      };
      P.displayName = "Badge";
      let O = d.forwardRef,
        L = ({
          className: e,
          color: t = "info",
          light: r,
          size: n = "md",
          theme: o = {},
          ...a
        }) => {
          let i = h(v().spinner, o);
          return (0, s.jsx)("span", {
            role: "status",
            ...a,
            children: (0, s.jsxs)("svg", {
              fill: "none",
              viewBox: "0 0 100 101",
              className: (0, f.m6)(
                i.base,
                i.color[t],
                i.light[r ? "on" : "off"].base,
                i.light[r ? "on" : "off"].color[t],
                i.size[n],
                e
              ),
              children: [
                (0, s.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, s.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
          });
        };
      L.displayName = "Spinner";
      let I = O(
          ({ children: e, as: t, href: r, type: n = "button", ...o }, a) =>
            (0, d.createElement)(
              t || (r ? "a" : "button"),
              { ref: a, href: r, type: n, ...o },
              e
            )
        ),
        _ = ({
          children: e,
          className: t,
          outline: r,
          pill: n,
          theme: o = {},
          ...a
        }) => {
          let i = (0, d.useMemo)(
              () =>
                d.Children.map(e, (t, o) =>
                  (0, d.cloneElement)(t, {
                    outline: r,
                    pill: n,
                    positionInGroup:
                      0 === o ? "start" : o === e.length - 1 ? "end" : "middle",
                  })
                ),
              [e, r, n]
            ),
            l = h(v().buttonGroup, o);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(l.base, t),
            role: "group",
            ...a,
            children: i,
          });
        };
      _.displayName = "Button.Group";
      let R = (
        {
          children: e,
          className: t,
          color: r = "info",
          disabled: n,
          fullSized: o,
          isProcessing: a = !1,
          processingLabel: i = "Loading...",
          processingSpinner: l,
          gradientDuoTone: d,
          gradientMonochrome: c,
          label: u,
          outline: p = !1,
          pill: g = !1,
          positionInGroup: m = "none",
          size: b = "md",
          theme: y = {},
          ...x
        },
        w
      ) => {
        let { buttonGroup: k, button: E } = v(),
          S = h(E, y);
        return (0, s.jsx)(I, {
          ref: w,
          disabled: n,
          className: (0, f.m6)(
            S.base,
            n && S.disabled,
            !d && !c && S.color[r],
            d && !c && S.gradientDuoTone[d],
            !d && c && S.gradient[c],
            p && (S.outline.color[r] ?? S.outline.color.default),
            S.pill[g ? "on" : "off"],
            o && S.fullSized,
            k.position[m],
            t
          ),
          ...x,
          children: (0, s.jsx)("span", {
            className: (0, f.m6)(
              S.inner.base,
              S.outline[p ? "on" : "off"],
              S.outline.pill[p && g ? "on" : "off"],
              S.size[b],
              p && !S.outline.color[r] && S.inner.outline,
              a && S.isProcessing,
              a && S.inner.isProcessingPadding[b],
              S.inner.position[m]
            ),
            children: (0, s.jsxs)(s.Fragment, {
              children: [
                a &&
                  (0, s.jsx)("span", {
                    className: (0, f.m6)(
                      S.spinnerSlot,
                      S.spinnerLeftPosition[b]
                    ),
                    children: l || (0, s.jsx)(L, { size: b }),
                  }),
                void 0 !== e
                  ? e
                  : (0, s.jsx)("span", {
                      "data-testid": "flowbite-button-label",
                      className: (0, f.m6)(S.label),
                      children: a ? i : u,
                    }),
              ],
            }),
          }),
        });
      };
      R.displayName = "Button";
      let A = Object.assign(O(R), { Group: _ }),
        z = ({ children: e, ...t }) =>
          (0, s.jsx)(A, {
            onClick: (e) => {
              let t = e.target.closest('[role="banner"]');
              t?.remove();
            },
            ...t,
            children: e,
          });
      z.displayName = "Banner.CollapseButton";
      let D = ({ children: e, ...t }) =>
        (0, s.jsx)("div", {
          "data-testid": "flowbite-banner",
          role: "banner",
          tabIndex: -1,
          ...t,
          children: e,
        });
      (D.displayName = "Banner"), Object.assign(D, { CollapseButton: z });
      let F = (0, d.forwardRef)(
        (
          { children: e, className: t, href: r, icon: n, theme: o = {}, ...a },
          i
        ) => {
          let l = void 0 !== r,
            d = h(v().breadcrumb.item, o);
          return (0, s.jsxs)("li", {
            className: (0, f.m6)(d.base, t),
            ...a,
            children: [
              (0, s.jsx)(u.yoF, {
                "aria-hidden": !0,
                className: d.chevron,
                "data-testid": "flowbite-breadcrumb-separator",
              }),
              (0, s.jsxs)(l ? "a" : "span", {
                ref: i,
                className: d.href[l ? "on" : "off"],
                "data-testid": "flowbite-breadcrumb-item",
                href: r,
                children: [
                  n && (0, s.jsx)(n, { "aria-hidden": !0, className: d.icon }),
                  e,
                ],
              }),
            ],
          });
        }
      );
      F.displayName = "Breadcrumb.Item";
      let B = ({ children: e, className: t, theme: r = {}, ...n }) => {
        let o = h(v().breadcrumb.root, r);
        return (0, s.jsx)("nav", {
          "aria-label": "Breadcrumb",
          className: (0, f.m6)(o.base, t),
          ...n,
          children: (0, s.jsx)("ol", { className: o.list, children: e }),
        });
      };
      (B.displayName = "Breadcrumb"),
        Object.assign(B, { Item: F }),
        (H = [
          "renderImage",
          "imgSrc",
          "imgAlt",
          "children",
          "className",
          "horizontal",
          "href",
          "theme",
        ]),
        (e) => {
          let t = {};
          for (let r in e) H.includes(r) || (t[r] = e[r]);
          return t;
        };
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var H,
        $,
        G,
        W = function (e, t) {
          return (W =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        },
        V =
          (($ = G =
            {
              path: void 0,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && G.path);
              },
            }),
          G.exports,
          (function () {
            var e = {}.hasOwnProperty;
            function t() {
              for (var r = [], n = 0; n < arguments.length; n++) {
                var o = arguments[n];
                if (o) {
                  var a = typeof o;
                  if ("string" === a || "number" === a) r.push(o);
                  else if (Array.isArray(o) && o.length) {
                    var i = t.apply(null, o);
                    i && r.push(i);
                  } else if ("object" === a)
                    for (var l in o) e.call(o, l) && o[l] && r.push(l);
                }
              }
              return r.join(" ");
            }
            $.exports
              ? ((t.default = t), ($.exports = t))
              : (window.classNames = t);
          })(),
          G.exports);
      function Y(e, t, r) {
        function n() {
          var d = Date.now() - l;
          d < t && d >= 0
            ? (o = setTimeout(n, t - d))
            : ((o = null), r || ((s = e.apply(i, a)), (i = a = null)));
        }
        null == t && (t = 100);
        var o,
          a,
          i,
          l,
          s,
          d = function () {
            (i = this), (a = arguments), (l = Date.now());
            var d = r && !o;
            return (
              o || (o = setTimeout(n, t)),
              d && ((s = e.apply(i, a)), (i = a = null)),
              s
            );
          };
        return (
          (d.clear = function () {
            o && (clearTimeout(o), (o = null));
          }),
          (d.flush = function () {
            o &&
              ((s = e.apply(i, a)),
              (i = a = null),
              clearTimeout(o),
              (o = null));
          }),
          d
        );
      }
      (Y.debounce = Y),
        (function (e, t) {
          void 0 === t && (t = {});
          var r = t.insertAt;
          if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
              o = document.createElement("style");
            (o.type = "text/css"),
              "top" === r && n.firstChild
                ? n.insertBefore(o, n.firstChild)
                : n.appendChild(o),
              o.styleSheet
                ? (o.styleSheet.cssText = e)
                : o.appendChild(document.createTextNode(e));
          }
        })(
          ".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n"
        );
      var q,
        X =
          ((q = "indiana-scroll-container"),
          function (e, t) {
            if (!e) return q;
            "string" == typeof e ? (r = e) : (t = e);
            var r,
              n = q;
            return (
              r && (n += "__" + r),
              n +
                (t
                  ? Object.keys(t).reduce(function (e, r) {
                      var o = t[r];
                      return (
                        o &&
                          (e +=
                            " " +
                            ("boolean" == typeof o
                              ? n + "--" + r
                              : n + "--" + r + "_" + o)),
                        e
                      );
                    }, "")
                  : "")
            );
          });
      !(function (e) {
        function t(t) {
          var r = e.call(this, t) || this;
          return (
            (r.onEndScroll = function () {
              (r.scrolling = !1), !r.pressed && r.started && r.processEnd();
            }),
            (r.onScroll = function (e) {
              var t = r.container.current;
              (t.scrollLeft === r.scrollLeft && t.scrollTop === r.scrollTop) ||
                ((r.scrolling = !0), r.processScroll(e), r.onEndScroll());
            }),
            (r.onTouchStart = function (e) {
              var t = r.props.nativeMobileScroll;
              if (r.isDraggable(e.target)) {
                if (((r.internal = !0), t && r.scrolling)) r.pressed = !0;
                else {
                  var n = e.touches[0];
                  r.processClick(e, n.clientX, n.clientY),
                    !t && r.props.stopPropagation && e.stopPropagation();
                }
              }
            }),
            (r.onTouchEnd = function (e) {
              var t = r.props.nativeMobileScroll;
              r.pressed &&
                (!r.started || (r.scrolling && t)
                  ? (r.pressed = !1)
                  : r.processEnd(),
                r.forceUpdate());
            }),
            (r.onTouchMove = function (e) {
              var t = r.props.nativeMobileScroll;
              if (r.pressed && (!t || !r.isMobile)) {
                var n = e.touches[0];
                n && r.processMove(e, n.clientX, n.clientY),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation();
              }
            }),
            (r.onMouseDown = function (e) {
              r.isDraggable(e.target) &&
                r.isScrollable() &&
                ((r.internal = !0),
                -1 !== r.props.buttons.indexOf(e.button) &&
                  (r.processClick(e, e.clientX, e.clientY),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation()));
            }),
            (r.onMouseMove = function (e) {
              r.pressed &&
                (r.processMove(e, e.clientX, e.clientY),
                e.preventDefault(),
                r.props.stopPropagation && e.stopPropagation());
            }),
            (r.onMouseUp = function (e) {
              r.pressed &&
                (r.started
                  ? r.processEnd()
                  : ((r.internal = !1),
                    (r.pressed = !1),
                    r.forceUpdate(),
                    r.props.onClick && r.props.onClick(e)),
                e.preventDefault(),
                r.props.stopPropagation && e.stopPropagation());
            }),
            (r.container = d.createRef()),
            (r.onEndScroll = Y(r.onEndScroll, 300)),
            (r.scrolling = !1),
            (r.started = !1),
            (r.pressed = !1),
            (r.internal = !1),
            (r.getRef = r.getRef.bind(r)),
            r
          );
        }
        (function (e, t) {
          function r() {
            this.constructor = e;
          }
          W(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        })(t, e),
          (t.prototype.componentDidMount = function () {
            var e = this.props.nativeMobileScroll,
              t = this.container.current;
            window.addEventListener("mouseup", this.onMouseUp),
              window.addEventListener("mousemove", this.onMouseMove),
              window.addEventListener("touchmove", this.onTouchMove, {
                passive: !1,
              }),
              window.addEventListener("touchend", this.onTouchEnd),
              t.addEventListener("touchstart", this.onTouchStart, {
                passive: !1,
              }),
              t.addEventListener("mousedown", this.onMouseDown, {
                passive: !1,
              }),
              e &&
                ((this.isMobile = this.isMobileDevice()),
                this.isMobile && this.forceUpdate());
          }),
          (t.prototype.componentWillUnmount = function () {
            window.removeEventListener("mouseup", this.onMouseUp),
              window.removeEventListener("mousemove", this.onMouseMove),
              window.removeEventListener("touchmove", this.onTouchMove),
              window.removeEventListener("touchend", this.onTouchEnd);
          }),
          (t.prototype.getElement = function () {
            return this.container.current;
          }),
          (t.prototype.isMobileDevice = function () {
            return (
              void 0 !== window.orientation ||
              -1 !== navigator.userAgent.indexOf("IEMobile")
            );
          }),
          (t.prototype.isDraggable = function (e) {
            var t = this.props.ignoreElements;
            if (t) {
              var r = e.closest(t);
              return null === r || r.contains(this.getElement());
            }
            return !0;
          }),
          (t.prototype.isScrollable = function () {
            var e = this.container.current;
            return (
              e &&
              (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight)
            );
          }),
          (t.prototype.processClick = function (e, t, r) {
            var n = this.container.current;
            (this.scrollLeft = n.scrollLeft),
              (this.scrollTop = n.scrollTop),
              (this.clientX = t),
              (this.clientY = r),
              (this.pressed = !0);
          }),
          (t.prototype.processStart = function (e) {
            void 0 === e && (e = !0);
            var t = this.props.onStartScroll;
            (this.started = !0),
              e && document.body.classList.add("indiana-dragging"),
              t && t({ external: !this.internal }),
              this.forceUpdate();
          }),
          (t.prototype.processScroll = function (e) {
            if (this.started) {
              var t = this.props.onScroll;
              t && t({ external: !this.internal });
            } else this.processStart(!1);
          }),
          (t.prototype.processMove = function (e, t, r) {
            var n = this.props,
              o = n.horizontal,
              a = n.vertical,
              i = n.activationDistance,
              l = n.onScroll,
              s = this.container.current;
            this.started
              ? (o && (s.scrollLeft -= t - this.clientX),
                a && (s.scrollTop -= r - this.clientY),
                l && l({ external: !this.internal }),
                (this.clientX = t),
                (this.clientY = r),
                (this.scrollLeft = s.scrollLeft),
                (this.scrollTop = s.scrollTop))
              : ((o && Math.abs(t - this.clientX) > i) ||
                  (a && Math.abs(r - this.clientY) > i)) &&
                ((this.clientX = t), (this.clientY = r), this.processStart());
          }),
          (t.prototype.processEnd = function () {
            var e = this.props.onEndScroll;
            this.container.current && e && e({ external: !this.internal }),
              (this.pressed = !1),
              (this.started = !1),
              (this.scrolling = !1),
              (this.internal = !1),
              document.body.classList.remove("indiana-dragging"),
              this.forceUpdate();
          }),
          (t.prototype.getRef = function (e) {
            [this.container, this.props.innerRef].forEach(function (t) {
              t && ("function" == typeof t ? t(e) : (t.current = e));
            });
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.children,
              r = e.draggingClassName,
              n = e.className,
              o = e.style,
              a = e.hideScrollbars,
              i = e.component;
            return d.createElement(
              i,
              {
                className: V(
                  n,
                  this.pressed && r,
                  X({
                    dragging: this.pressed,
                    "hide-scrollbars": a,
                    "native-scroll": this.isMobile,
                  })
                ),
                style: o,
                ref: this.getRef,
                onScroll: this.onScroll,
              },
              t
            );
          }),
          (t.defaultProps = {
            nativeMobileScroll: !0,
            hideScrollbars: !0,
            activationDistance: 10,
            vertical: !0,
            horizontal: !0,
            stopPropagation: !1,
            style: {},
            component: "div",
            buttons: [0],
          });
      })(d.PureComponent);
      let U = () => "undefined" != typeof window;
      (0, d.forwardRef)(
        ({ className: e, color: t = "default", theme: r = {}, ...n }, o) => {
          let a = h(v().checkbox, r);
          return (0, s.jsx)("input", {
            ref: o,
            type: "checkbox",
            className: (0, f.m6)(a.root.base, a.root.color[t], e),
            ...n,
          });
        }
      ).displayName = "Checkbox";
      let K = ({ key: e, onChange: t }) => {
          function r({ key: r, newValue: n }) {
            r === e && t(n);
          }
          (0, d.useEffect)(
            () => (
              window.addEventListener("storage", r),
              () => window.removeEventListener("storage", r)
            ),
            []
          );
        },
        Q = "light",
        Z = "flowbite-theme-mode",
        J = "flowbite-theme-mode-sync",
        ee = () => {
          let [e, t] = (0, d.useState)(eo(b.mode));
          (0, d.useEffect)(() => {
            er(e), en(e);
          }, []),
            K({
              key: Z,
              onChange(e) {
                if (e) return r(e);
              },
            }),
            et((e) => t(e));
          let r = (e) => {
            t(e),
              er(e),
              en(e),
              document.dispatchEvent(new CustomEvent(J, { detail: e }));
          };
          return {
            mode: e,
            computedMode: ea(e),
            setMode: r,
            toggleMode: () => {
              let t = e;
              "auto" === t && (t = ea(t)),
                r((t = "dark" === t ? "light" : "dark"));
            },
            clearMode: () => {
              r(b.mode ?? Q);
            },
          };
        },
        et = (e) => {
          (0, d.useEffect)(() => {
            function t(t) {
              e(t.detail);
            }
            return (
              document.addEventListener(J, t),
              () => document.removeEventListener(J, t)
            );
          }, []);
        },
        er = (e) => localStorage.setItem(Z, e),
        en = (e) => {
          "dark" === ea(e)
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
        },
        eo = (e) => (U() ? localStorage.getItem(Z) ?? e ?? Q : Q),
        ea = (e) => ("auto" === e ? ei() : e),
        ei = () =>
          window.matchMedia?.("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        el = ({
          children: e,
          className: t,
          color: r = "default",
          theme: n = {},
          value: o,
          ...a
        }) => {
          let i = h(v().helperText, n);
          return (0, s.jsx)("p", {
            className: (0, f.m6)(i.root.base, i.root.colors[r], t),
            ...a,
            children: o ?? e ?? "",
          });
        };
      (el.displayName = "HelperText"),
        ((0, d.forwardRef)(
          (
            {
              addon: e,
              className: t,
              color: r = "gray",
              helperText: n,
              icon: o,
              rightIcon: a,
              shadow: i,
              sizing: l = "md",
              theme: d = {},
              ...c
            },
            u
          ) => {
            let p = h(v().textInput, d);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: (0, f.m6)(p.base, t),
                  children: [
                    e &&
                      (0, s.jsx)("span", { className: p.addon, children: e }),
                    (0, s.jsxs)("div", {
                      className: p.field.base,
                      children: [
                        o &&
                          (0, s.jsx)("div", {
                            className: p.field.icon.base,
                            children: (0, s.jsx)(o, {
                              className: p.field.icon.svg,
                            }),
                          }),
                        a &&
                          (0, s.jsx)("div", {
                            "data-testid": "right-icon",
                            className: p.field.rightIcon.base,
                            children: (0, s.jsx)(a, {
                              className: p.field.rightIcon.svg,
                            }),
                          }),
                        (0, s.jsx)("input", {
                          className: (0, f.m6)(
                            p.field.input.base,
                            p.field.input.colors[r],
                            p.field.input.sizes[l],
                            p.field.input.withIcon[o ? "on" : "off"],
                            p.field.input.withRightIcon[a ? "on" : "off"],
                            p.field.input.withAddon[e ? "on" : "off"],
                            p.field.input.withShadow[i ? "on" : "off"]
                          ),
                          ...c,
                          ref: u,
                        }),
                      ],
                    }),
                  ],
                }),
                n && (0, s.jsx)(el, { color: r, children: n }),
              ],
            });
          }
        ).displayName = "TextInput");
      let es = (0, d.createContext)(void 0);
      function ed() {
        let e = (0, d.useContext)(es);
        if (!e)
          throw Error(
            "useDatePickerContext should be used within the DatePickerContext provider!"
          );
        return e;
      }
      ((o = i || (i = {}))[(o.Days = 0)] = "Days"),
        (o[(o.Months = 1)] = "Months"),
        (o[(o.Years = 2)] = "Years"),
        (o[(o.Decades = 3)] = "Decades"),
        ((a = l || (l = {}))[(a.Sunday = 0)] = "Sunday"),
        (a[(a.Monday = 1)] = "Monday"),
        (a[(a.Tuesday = 2)] = "Tuesday"),
        (a[(a.Wednesday = 3)] = "Wednesday"),
        (a[(a.Thursday = 4)] = "Thursday"),
        (a[(a.Friday = 5)] = "Friday"),
        (a[(a.Saturday = 6)] = "Saturday");
      let ec = (e, t, r) => {
          let n = new Date(
            e.getFullYear(),
            e.getMonth(),
            e.getDate()
          ).getTime();
          if (t && r) {
            let e = new Date(
                t.getFullYear(),
                t.getMonth(),
                t.getDate()
              ).getTime(),
              o = new Date(
                r.getFullYear(),
                r.getMonth(),
                r.getDate()
              ).getTime();
            return n >= e && n <= o;
          }
          return t
            ? n >=
                new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
            : !r ||
                n <=
                  new Date(
                    r.getFullYear(),
                    r.getMonth(),
                    r.getDate()
                  ).getTime();
        },
        eu = (e, t) => (
          (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())),
          (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())),
          e.getTime() === t.getTime()
        ),
        ef = (e, t) => {
          let r = new Date(e.getFullYear(), e.getMonth(), 1),
            n = r.getDay() - t;
          return n < 0 && (n += 7), eg(r, -n);
        },
        ep = (e, t) => {
          let r = [],
            n = new Date(0);
          n.setDate(n.getDate() - n.getDay() + t);
          let o = new Intl.DateTimeFormat(e, { weekday: "short" });
          for (let e = 0; e < 7; e++) r.push(o.format(eg(n, e)));
          return r;
        },
        eg = (e, t) => {
          let r = new Date(e);
          return r.setDate(r.getDate() + t), r;
        },
        eh = (e, t) => {
          let r = new Date(e);
          return r.setFullYear(r.getFullYear() + t), r;
        },
        em = (e, t, r) => {
          let n = { day: "numeric", month: "long", year: "numeric" };
          return r && (n = r), new Intl.DateTimeFormat(e, n).format(t);
        },
        eb = (e, t) => Math.floor(e.getFullYear() / t) * t,
        ey = (e, t) => {
          let r = e.getFullYear();
          return r >= t && r <= t + 9;
        };
      function ev(e) {
        return ek(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function ex(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function ew(e) {
        var t;
        return null ==
          (t = (ek(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function ek(e) {
        return e instanceof Node || e instanceof ex(e).Node;
      }
      function eE(e) {
        return e instanceof Element || e instanceof ex(e).Element;
      }
      function eS(e) {
        return e instanceof HTMLElement || e instanceof ex(e).HTMLElement;
      }
      function eT(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof ex(e).ShadowRoot)
        );
      }
      function eC(e) {
        let { overflow: t, overflowX: r, overflowY: n, display: o } = eP(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
          !["inline", "contents"].includes(o)
        );
      }
      function ej(e) {
        let t = eM(),
          r = eP(e);
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!!r.containerType && "normal" !== r.containerType) ||
          (!t && !!r.backdropFilter && "none" !== r.backdropFilter) ||
          (!t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (r.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (r.contain || "").includes(e)
          )
        );
      }
      function eM() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function eN(e) {
        return ["html", "body", "#document"].includes(ev(e));
      }
      function eP(e) {
        return ex(e).getComputedStyle(e);
      }
      function eO(e) {
        return eE(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function eL(e) {
        if ("html" === ev(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eT(e) && e.host) || ew(e);
        return eT(t) ? t.host : t;
      }
      function eI(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        let o = (function e(t) {
            let r = eL(t);
            return eN(r)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eS(r) && eC(r)
              ? r
              : e(r);
          })(e),
          a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = ex(o);
        return a
          ? t.concat(
              i,
              i.visualViewport || [],
              eC(o) ? o : [],
              i.frameElement && r ? eI(i.frameElement) : []
            )
          : t.concat(o, eI(o, [], r));
      }
      function e_(e) {
        let t = e.activeElement;
        for (
          ;
          (null == (r = t) || null == (r = r.shadowRoot)
            ? void 0
            : r.activeElement) != null;

        ) {
          var r;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function eR(e, t) {
        if (!e || !t) return !1;
        let r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && eT(r)) {
          let r = t;
          for (; r; ) {
            if (e === r) return !0;
            r = r.parentNode || r.host;
          }
        }
        return !1;
      }
      function eA() {
        let e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function ez(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          (eB() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function eD(e) {
        return (
          (!eB() && 0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" === e.pointerType) ||
          (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail)
        );
      }
      function eF() {
        return /apple/i.test(navigator.vendor);
      }
      function eB() {
        let e = /android/i;
        return (
          e.test(eA()) ||
          e.test(
            (function () {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: r } = e;
                      return t + "/" + r;
                    })
                    .join(" ")
                : navigator.userAgent;
            })()
          )
        );
      }
      function eH() {
        return (
          eA().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
        );
      }
      function e$(e, t) {
        let r = ["mouse", "pen"];
        return t || r.push("", void 0), r.includes(e);
      }
      function eG(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function eW(e, t) {
        return (
          null != t &&
          ("composedPath" in e
            ? e.composedPath().includes(t)
            : null != e.target && t.contains(e.target))
        );
      }
      function eV(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      function eY(e) {
        return (
          eS(e) &&
          e.matches(
            "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"
          )
        );
      }
      function eq(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function eX(e) {
        return !!e && "combobox" === e.getAttribute("role") && eY(e);
      }
      let eU = ["top", "right", "bottom", "left"].reduce(
          (e, t) => e.concat(t, t + "-start", t + "-end"),
          []
        ),
        eK = Math.min,
        eQ = Math.max,
        eZ = Math.round,
        eJ = Math.floor,
        e0 = (e) => ({ x: e, y: e }),
        e1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
        e5 = { start: "end", end: "start" };
      function e2(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function e6(e) {
        return e.split("-")[0];
      }
      function e4(e) {
        return e.split("-")[1];
      }
      function e7(e) {
        return "x" === e ? "y" : "x";
      }
      function e3(e) {
        return "y" === e ? "height" : "width";
      }
      function e9(e) {
        return ["top", "bottom"].includes(e6(e)) ? "y" : "x";
      }
      function e8(e, t, r) {
        void 0 === r && (r = !1);
        let n = e4(e),
          o = e7(e9(e)),
          a = e3(o),
          i =
            "x" === o
              ? n === (r ? "end" : "start")
                ? "right"
                : "left"
              : "start" === n
              ? "bottom"
              : "top";
        return t.reference[a] > t.floating[a] && (i = tt(i)), [i, tt(i)];
      }
      function te(e) {
        return e.replace(/start|end/g, (e) => e5[e]);
      }
      function tt(e) {
        return e.replace(/left|right|bottom|top/g, (e) => e1[e]);
      }
      function tr(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function tn(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function to(e, t, r) {
        let n,
          { reference: o, floating: a } = e,
          i = e9(t),
          l = e7(e9(t)),
          s = e3(l),
          d = e6(t),
          c = "y" === i,
          u = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          p = o[s] / 2 - a[s] / 2;
        switch (d) {
          case "top":
            n = { x: u, y: o.y - a.height };
            break;
          case "bottom":
            n = { x: u, y: o.y + o.height };
            break;
          case "right":
            n = { x: o.x + o.width, y: f };
            break;
          case "left":
            n = { x: o.x - a.width, y: f };
            break;
          default:
            n = { x: o.x, y: o.y };
        }
        switch (e4(t)) {
          case "start":
            n[l] -= p * (r && c ? -1 : 1);
            break;
          case "end":
            n[l] += p * (r && c ? -1 : 1);
        }
        return n;
      }
      let ta = async (e, t, r) => {
        let {
            placement: n = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = r,
          l = a.filter(Boolean),
          s = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          d = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: u } = to(d, n, s),
          f = n,
          p = {},
          g = 0;
        for (let r = 0; r < l.length; r++) {
          let { name: a, fn: h } = l[r],
            {
              x: m,
              y: b,
              data: y,
              reset: v,
            } = await h({
              x: c,
              y: u,
              initialPlacement: n,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: d,
              platform: i,
              elements: { reference: e, floating: t },
            });
          if (
            ((c = null != m ? m : c),
            (u = null != b ? b : u),
            (p = { ...p, [a]: { ...p[a], ...y } }),
            v && g <= 50)
          ) {
            g++,
              "object" == typeof v &&
                (v.placement && (f = v.placement),
                v.rects &&
                  (d =
                    !0 === v.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : v.rects),
                ({ x: c, y: u } = to(d, f, s))),
              (r = -1);
            continue;
          }
        }
        return { x: c, y: u, placement: f, strategy: o, middlewareData: p };
      };
      async function ti(e, t) {
        var r;
        void 0 === t && (t = {});
        let { x: n, y: o, platform: a, rects: i, elements: l, strategy: s } = e,
          {
            boundary: d = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: u = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = e2(t, e),
          g = tr(p),
          h = l[f ? ("floating" === u ? "reference" : "floating") : u],
          m = tn(
            await a.getClippingRect({
              element:
                null ==
                  (r = await (null == a.isElement ? void 0 : a.isElement(h))) ||
                r
                  ? h
                  : h.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: d,
              rootBoundary: c,
              strategy: s,
            })
          ),
          b = "floating" === u ? { ...i.floating, x: n, y: o } : i.reference,
          y = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          v = ((await (null == a.isElement ? void 0 : a.isElement(y))) &&
            (await (null == a.getScale ? void 0 : a.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          x = tn(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: b,
                  offsetParent: y,
                  strategy: s,
                })
              : b
          );
        return {
          top: (m.top - x.top + g.top) / v.y,
          bottom: (x.bottom - m.bottom + g.bottom) / v.y,
          left: (m.left - x.left + g.left) / v.x,
          right: (x.right - m.right + g.right) / v.x,
        };
      }
      let tl = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          let {
              x: r,
              y: n,
              placement: o,
              rects: a,
              platform: i,
              elements: l,
              middlewareData: s,
            } = t,
            { element: d, padding: c = 0 } = e2(e, t) || {};
          if (null == d) return {};
          let u = tr(c),
            f = { x: r, y: n },
            p = e7(e9(o)),
            g = e3(p),
            h = await i.getDimensions(d),
            m = "y" === p,
            b = m ? "clientHeight" : "clientWidth",
            y = a.reference[g] + a.reference[p] - f[p] - a.floating[g],
            v = f[p] - a.reference[p],
            x = await (null == i.getOffsetParent
              ? void 0
              : i.getOffsetParent(d)),
            w = x ? x[b] : 0;
          (w && (await (null == i.isElement ? void 0 : i.isElement(x)))) ||
            (w = l.floating[b] || a.floating[g]);
          let k = w / 2 - h[g] / 2 - 1,
            E = eK(u[m ? "top" : "left"], k),
            S = eK(u[m ? "bottom" : "right"], k),
            T = w - h[g] - S,
            C = w / 2 - h[g] / 2 + (y / 2 - v / 2),
            j = eQ(E, eK(C, T)),
            M =
              !s.arrow &&
              null != e4(o) &&
              C != j &&
              a.reference[g] / 2 - (C < E ? E : S) - h[g] / 2 < 0,
            N = M ? (C < E ? C - E : C - T) : 0;
          return {
            [p]: f[p] + N,
            data: {
              [p]: j,
              centerOffset: C - j - N,
              ...(M && { alignmentOffset: N }),
            },
            reset: M,
          };
        },
      });
      async function ts(e, t) {
        let { placement: r, platform: n, elements: o } = e,
          a = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)),
          i = e6(r),
          l = e4(r),
          s = "y" === e9(r),
          d = ["left", "top"].includes(i) ? -1 : 1,
          c = a && s ? -1 : 1,
          u = e2(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: g,
          } = "number" == typeof u
            ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
        return (
          l && "number" == typeof g && (p = "end" === l ? -1 * g : g),
          s ? { x: p * c, y: f * d } : { x: f * d, y: p * c }
        );
      }
      function td(e) {
        let t = eP(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          o = eS(e),
          a = o ? e.offsetWidth : r,
          i = o ? e.offsetHeight : n,
          l = eZ(r) !== a || eZ(n) !== i;
        return l && ((r = a), (n = i)), { width: r, height: n, $: l };
      }
      function tc(e) {
        return eE(e) ? e : e.contextElement;
      }
      function tu(e) {
        let t = tc(e);
        if (!eS(t)) return e0(1);
        let r = t.getBoundingClientRect(),
          { width: n, height: o, $: a } = td(t),
          i = (a ? eZ(r.width) : r.width) / n,
          l = (a ? eZ(r.height) : r.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: i, y: l }
        );
      }
      let tf = e0(0);
      function tp(e) {
        let t = ex(e);
        return eM() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : tf;
      }
      function tg(e, t, r, n) {
        var o;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let a = e.getBoundingClientRect(),
          i = tc(e),
          l = e0(1);
        t && (n ? eE(n) && (l = tu(n)) : (l = tu(e)));
        let s = (void 0 === (o = r) && (o = !1), n && (!o || n === ex(i)) && o)
            ? tp(i)
            : e0(0),
          d = (a.left + s.x) / l.x,
          c = (a.top + s.y) / l.y,
          u = a.width / l.x,
          f = a.height / l.y;
        if (i) {
          let e = ex(i),
            t = n && eE(n) ? ex(n) : n,
            r = e.frameElement;
          for (; r && n && t !== e; ) {
            let e = tu(r),
              t = r.getBoundingClientRect(),
              n = eP(r),
              o = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              a = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            (d *= e.x),
              (c *= e.y),
              (u *= e.x),
              (f *= e.y),
              (d += o),
              (c += a),
              (r = ex(r).frameElement);
          }
        }
        return tn({ width: u, height: f, x: d, y: c });
      }
      function th(e) {
        return tg(ew(e)).left + eO(e).scrollLeft;
      }
      function tm(e, t, r) {
        let n;
        if ("viewport" === t)
          n = (function (e, t) {
            let r = ex(e),
              n = ew(e),
              o = r.visualViewport,
              a = n.clientWidth,
              i = n.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = eM();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: s };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            let t = ew(e),
              r = eO(e),
              n = e.ownerDocument.body,
              o = eQ(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth
              ),
              a = eQ(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              i = -r.scrollLeft + th(e),
              l = -r.scrollTop;
            return (
              "rtl" === eP(n).direction &&
                (i += eQ(t.clientWidth, n.clientWidth) - o),
              { width: o, height: a, x: i, y: l }
            );
          })(ew(e));
        else if (eE(t))
          n = (function (e, t) {
            let r = tg(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              o = r.left + e.clientLeft,
              a = eS(e) ? tu(e) : e0(1),
              i = e.clientWidth * a.x;
            return {
              width: i,
              height: e.clientHeight * a.y,
              x: o * a.x,
              y: n * a.y,
            };
          })(t, r);
        else {
          let r = tp(e);
          n = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return tn(n);
      }
      function tb(e, t) {
        return eS(e) && "fixed" !== eP(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function ty(e, t) {
        let r = ex(e);
        if (!eS(e)) return r;
        let n = tb(e, t);
        for (
          ;
          n &&
          ["table", "td", "th"].includes(ev(n)) &&
          "static" === eP(n).position;

        )
          n = tb(n, t);
        return n &&
          ("html" === ev(n) ||
            ("body" === ev(n) && "static" === eP(n).position && !ej(n)))
          ? r
          : n ||
              (function (e) {
                let t = eL(e);
                for (; eS(t) && !eN(t); ) {
                  if (ej(t)) return t;
                  t = eL(t);
                }
                return null;
              })(e) ||
              r;
      }
      let tv = async function (e) {
          let { reference: t, floating: r, strategy: n } = e,
            o = this.getOffsetParent || ty,
            a = this.getDimensions;
          return {
            reference: (function (e, t, r) {
              let n = eS(t),
                o = ew(t),
                a = "fixed" === r,
                i = tg(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                s = e0(0);
              if (n || (!n && !a)) {
                if ((("body" !== ev(t) || eC(o)) && (l = eO(t)), n)) {
                  let e = tg(t, !0, a, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else o && (s.x = th(o));
              }
              return {
                x: i.left + l.scrollLeft - s.x,
                y: i.top + l.scrollTop - s.y,
                width: i.width,
                height: i.height,
              };
            })(t, await o(r), n),
            floating: { x: 0, y: 0, ...(await a(r)) },
          };
        },
        tx = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: r, strategy: n } = e,
              o = eS(r),
              a = ew(r);
            if (r === a) return t;
            let i = { scrollLeft: 0, scrollTop: 0 },
              l = e0(1),
              s = e0(0);
            if (
              (o || (!o && "fixed" !== n)) &&
              (("body" !== ev(r) || eC(a)) && (i = eO(r)), eS(r))
            ) {
              let e = tg(r);
              (l = tu(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            return {
              width: t.width * l.x,
              height: t.height * l.y,
              x: t.x * l.x - i.scrollLeft * l.x + s.x,
              y: t.y * l.y - i.scrollTop * l.y + s.y,
            };
          },
          getDocumentElement: ew,
          getClippingRect: function (e) {
            let { element: t, boundary: r, rootBoundary: n, strategy: o } = e,
              a = [
                ...("clippingAncestors" === r
                  ? (function (e, t) {
                      let r = t.get(e);
                      if (r) return r;
                      let n = eI(e, [], !1).filter(
                          (e) => eE(e) && "body" !== ev(e)
                        ),
                        o = null,
                        a = "fixed" === eP(e).position,
                        i = a ? eL(e) : e;
                      for (; eE(i) && !eN(i); ) {
                        let t = eP(i),
                          r = ej(i);
                        r || "fixed" !== t.position || (o = null),
                          (
                            a
                              ? !r && !o
                              : (!r &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (eC(i) &&
                                  !r &&
                                  (function e(t, r) {
                                    let n = eL(t);
                                    return (
                                      !(n === r || !eE(n) || eN(n)) &&
                                      ("fixed" === eP(n).position || e(n, r))
                                    );
                                  })(e, i))
                          )
                            ? (n = n.filter((e) => e !== i))
                            : (o = t),
                          (i = eL(i));
                      }
                      return t.set(e, n), n;
                    })(t, this._c)
                  : [].concat(r)),
                n,
              ],
              i = a[0],
              l = a.reduce((e, r) => {
                let n = tm(t, r, o);
                return (
                  (e.top = eQ(n.top, e.top)),
                  (e.right = eK(n.right, e.right)),
                  (e.bottom = eK(n.bottom, e.bottom)),
                  (e.left = eQ(n.left, e.left)),
                  e
                );
              }, tm(t, i, o));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: ty,
          getElementRects: tv,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return td(e);
          },
          getScale: tu,
          isElement: eE,
          isRTL: function (e) {
            return "rtl" === eP(e).direction;
          },
        };
      function tw(e, t, r, n) {
        let o;
        void 0 === n && (n = {});
        let {
            ancestorScroll: a = !0,
            ancestorResize: i = !0,
            elementResize: l = "function" == typeof ResizeObserver,
            layoutShift: s = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = n,
          c = tc(e),
          u = a || i ? [...(c ? eI(c) : []), ...eI(t)] : [];
        u.forEach((e) => {
          a && e.addEventListener("scroll", r, { passive: !0 }),
            i && e.addEventListener("resize", r);
        });
        let f =
            c && s
              ? (function (e, t) {
                  let r,
                    n = null,
                    o = ew(e);
                  function a() {
                    clearTimeout(r), n && n.disconnect(), (n = null);
                  }
                  return (
                    !(function i(l, s) {
                      void 0 === l && (l = !1), void 0 === s && (s = 1), a();
                      let {
                        left: d,
                        top: c,
                        width: u,
                        height: f,
                      } = e.getBoundingClientRect();
                      if ((l || t(), !u || !f)) return;
                      let p = eJ(c),
                        g = eJ(o.clientWidth - (d + u)),
                        h = {
                          rootMargin:
                            -p +
                            "px " +
                            -g +
                            "px " +
                            -eJ(o.clientHeight - (c + f)) +
                            "px " +
                            -eJ(d) +
                            "px",
                          threshold: eQ(0, eK(1, s)) || 1,
                        },
                        m = !0;
                      function b(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== s) {
                          if (!m) return i();
                          t
                            ? i(!1, t)
                            : (r = setTimeout(() => {
                                i(!1, 1e-7);
                              }, 100));
                        }
                        m = !1;
                      }
                      try {
                        n = new IntersectionObserver(b, {
                          ...h,
                          root: o.ownerDocument,
                        });
                      } catch (e) {
                        n = new IntersectionObserver(b, h);
                      }
                      n.observe(e);
                    })(!0),
                    a
                  );
                })(c, r)
              : null,
          p = -1,
          g = null;
        l &&
          ((g = new ResizeObserver((e) => {
            let [n] = e;
            n &&
              n.target === c &&
              g &&
              (g.unobserve(t),
              cancelAnimationFrame(p),
              (p = requestAnimationFrame(() => {
                g && g.observe(t);
              }))),
              r();
          })),
          c && !d && g.observe(c),
          g.observe(t));
        let h = d ? tg(e) : null;
        return (
          d &&
            (function t() {
              let n = tg(e);
              h &&
                (n.x !== h.x ||
                  n.y !== h.y ||
                  n.width !== h.width ||
                  n.height !== h.height) &&
                r(),
                (h = n),
                (o = requestAnimationFrame(t));
            })(),
          r(),
          () => {
            u.forEach((e) => {
              a && e.removeEventListener("scroll", r),
                i && e.removeEventListener("resize", r);
            }),
              f && f(),
              g && g.disconnect(),
              (g = null),
              d && cancelAnimationFrame(o);
          }
        );
      }
      let tk = (e, t, r) => {
        let n = new Map(),
          o = { platform: tx, ...r },
          a = { ...o.platform, _c: n };
        return ta(e, t, { ...o, platform: a });
      };
      var tE = r(4887);
      let tS = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: r, padding: n } = "function" == typeof e ? e(t) : e;
          if (r && {}.hasOwnProperty.call(r, "current")) {
            if (null != r.current)
              return tl({ element: r.current, padding: n }).fn(t);
          } else if (r) return tl({ element: r, padding: n }).fn(t);
          return {};
        },
      });
      var tT = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect;
      function tC(e, t) {
        let r, n, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 != n--; ) if (!tC(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 != n--; )
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--; ) {
            let r = o[n];
            if (("_owner" !== r || !e.$$typeof) && !tC(e[r], t[r])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function tj(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function tM(e, t) {
        let r = tj(e);
        return Math.round(t * r) / r;
      }
      function tN(e) {
        let t = d.useRef(e);
        return (
          tT(() => {
            t.current = e;
          }),
          t
        );
      }
      var tP =
          'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
        tO = "undefined" == typeof Element,
        tL = tO
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        tI =
          !tO && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e
                  ? void 0
                  : null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        t_ = function e(t, r) {
          void 0 === r && (r = !0);
          var n,
            o =
              null == t
                ? void 0
                : null === (n = t.getAttribute) || void 0 === n
                ? void 0
                : n.call(t, "inert");
          return "" === o || "true" === o || (r && t && e(t.parentNode));
        },
        tR = function (e) {
          var t,
            r =
              null == e
                ? void 0
                : null === (t = e.getAttribute) || void 0 === t
                ? void 0
                : t.call(e, "contenteditable");
          return "" === r || "true" === r;
        },
        tA = function (e, t, r) {
          if (t_(e)) return [];
          var n = Array.prototype.slice.apply(e.querySelectorAll(tP));
          return t && tL.call(e, tP) && n.unshift(e), (n = n.filter(r));
        },
        tz = function e(t, r, n) {
          for (var o = [], a = Array.from(t); a.length; ) {
            var i = a.shift();
            if (!t_(i, !1)) {
              if ("SLOT" === i.tagName) {
                var l = i.assignedElements(),
                  s = e(l.length ? l : i.children, !0, n);
                n.flatten
                  ? o.push.apply(o, s)
                  : o.push({ scopeParent: i, candidates: s });
              } else {
                tL.call(i, tP) &&
                  n.filter(i) &&
                  (r || !t.includes(i)) &&
                  o.push(i);
                var d =
                    i.shadowRoot ||
                    ("function" == typeof n.getShadowRoot &&
                      n.getShadowRoot(i)),
                  c =
                    !t_(d, !1) &&
                    (!n.shadowRootFilter || n.shadowRootFilter(i));
                if (d && c) {
                  var u = e(!0 === d ? i.children : d.children, !0, n);
                  n.flatten
                    ? o.push.apply(o, u)
                    : o.push({ scopeParent: i, candidates: u });
                } else a.unshift.apply(a, i.children);
              }
            }
          }
          return o;
        },
        tD = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        tF = function (e) {
          if (!e) throw Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || tR(e)) &&
            !tD(e)
            ? 0
            : e.tabIndex;
        },
        tB = function (e, t) {
          var r = tF(e);
          return r < 0 && t && !tD(e) ? 0 : r;
        },
        tH = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        t$ = function (e) {
          return "INPUT" === e.tagName;
        },
        tG = function (e, t) {
          for (var r = 0; r < e.length; r++)
            if (e[r].checked && e[r].form === t) return e[r];
        },
        tW = function (e) {
          if (!e.name) return !0;
          var t,
            r = e.form || tI(e),
            n = function (e) {
              return r.querySelectorAll(
                'input[type="radio"][name="' + e + '"]'
              );
            };
          if (
            "undefined" != typeof window &&
            void 0 !== window.CSS &&
            "function" == typeof window.CSS.escape
          )
            t = n(window.CSS.escape(e.name));
          else
            try {
              t = n(e.name);
            } catch (e) {
              return (
                console.error(
                  "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                  e.message
                ),
                !1
              );
            }
          var o = tG(t, e.form);
          return !o || o === e;
        },
        tV = function (e) {
          var t,
            r,
            n,
            o,
            a,
            i,
            l,
            s = e && tI(e),
            d = null === (t = s) || void 0 === t ? void 0 : t.host,
            c = !1;
          if (s && s !== e)
            for (
              c = !!(
                (null !== (r = d) &&
                  void 0 !== r &&
                  null !== (n = r.ownerDocument) &&
                  void 0 !== n &&
                  n.contains(d)) ||
                (null != e &&
                  null !== (o = e.ownerDocument) &&
                  void 0 !== o &&
                  o.contains(e))
              );
              !c && d;

            )
              c = !!(
                null !==
                  (i = d =
                    null === (a = s = tI(d)) || void 0 === a
                      ? void 0
                      : a.host) &&
                void 0 !== i &&
                null !== (l = i.ownerDocument) &&
                void 0 !== l &&
                l.contains(d)
              );
          return c;
        },
        tY = function (e) {
          var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
          return 0 === r && 0 === n;
        },
        tq = function (e, t) {
          var r = t.displayCheck,
            n = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = tL.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (tL.call(o, "details:not([open]) *")) return !0;
          if (r && "full" !== r && "legacy-full" !== r) {
            if ("non-zero-area" === r) return tY(e);
          } else {
            if ("function" == typeof n) {
              for (var a = e; e; ) {
                var i = e.parentElement,
                  l = tI(e);
                if (i && !i.shadowRoot && !0 === n(i)) return tY(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : i || l === e.ownerDocument
                  ? i
                  : l.host;
              }
              e = a;
            }
            if (tV(e)) return !e.getClientRects().length;
            if ("legacy-full" !== r) return !0;
          }
          return !1;
        },
        tX = function (e) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
              if ("FIELDSET" === t.tagName && t.disabled) {
                for (var r = 0; r < t.children.length; r++) {
                  var n = t.children.item(r);
                  if ("LEGEND" === n.tagName)
                    return (
                      !!tL.call(t, "fieldset[disabled] *") || !n.contains(e)
                    );
                }
                return !0;
              }
              t = t.parentElement;
            }
          return !1;
        },
        tU = function (e, t) {
          var r, n, o;
          return (
            !((t$((r = t)) && "radio" === r.type && !tW(r)) || 0 > tF(t)) &&
            ((n = e),
            !(
              (o = t).disabled ||
              t_(o) ||
              (t$(o) && "hidden" === o.type) ||
              tq(o, n) ||
              ("DETAILS" === o.tagName &&
                Array.prototype.slice.apply(o.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })) ||
              tX(o)
            ))
          );
        },
        tK = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!isNaN(t) || t >= 0;
        },
        tQ = function e(t) {
          var r = [],
            n = [];
          return (
            t.forEach(function (t, o) {
              var a = !!t.scopeParent,
                i = a ? t.scopeParent : t,
                l = tB(i, a),
                s = a ? e(t.candidates) : i;
              0 === l
                ? a
                  ? r.push.apply(r, s)
                  : r.push(i)
                : n.push({
                    documentOrder: o,
                    tabIndex: l,
                    item: t,
                    isScope: a,
                    content: s,
                  });
            }),
            n
              .sort(tH)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(r)
          );
        },
        tZ = function (e, t) {
          return tQ(
            (t = t || {}).getShadowRoot
              ? tz([e], t.includeContainer, {
                  filter: tU.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: tK,
                })
              : tA(e, t.includeContainer, tU.bind(null, t))
          );
        };
      let tJ = c["useInsertionEffect".toString()] || ((e) => e());
      function t0(e) {
        let t = d.useRef(() => {});
        return (
          tJ(() => {
            t.current = e;
          }),
          d.useCallback(function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return null == t.current ? void 0 : t.current(...r);
          }, [])
        );
      }
      let t1 = "ArrowUp",
        t5 = "ArrowDown",
        t2 = "ArrowLeft",
        t6 = "ArrowRight";
      function t4(e, t, r) {
        return Math.floor(e / t) !== r;
      }
      function t7(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function t3(e, t) {
        return t8(e, { disabledIndices: t });
      }
      function t9(e, t) {
        return t8(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function t8(e, t) {
        let {
            startingIndex: r = -1,
            decrement: n = !1,
            disabledIndices: o,
            amount: a = 1,
          } = void 0 === t ? {} : t,
          i = e.current,
          l = o
            ? (e) => o.includes(e)
            : (e) => {
                let t = i[e];
                return (
                  null == t ||
                  t.hasAttribute("disabled") ||
                  "true" === t.getAttribute("aria-disabled")
                );
              },
          s = r;
        do s += n ? -a : a;
        while (s >= 0 && s <= i.length - 1 && l(s));
        return s;
      }
      let re = 0;
      function rt(e, t) {
        void 0 === t && (t = {});
        let { preventScroll: r = !1, cancelPrevious: n = !0, sync: o = !1 } = t;
        n && cancelAnimationFrame(re);
        let a = () => (null == e ? void 0 : e.focus({ preventScroll: r }));
        o ? a() : (re = requestAnimationFrame(a));
      }
      var rr = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect;
      function rn(e, t) {
        let r = e.compareDocumentPosition(t);
        return r & Node.DOCUMENT_POSITION_FOLLOWING ||
          r & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : r & Node.DOCUMENT_POSITION_PRECEDING ||
            r & Node.DOCUMENT_POSITION_CONTAINS
          ? 1
          : 0;
      }
      let ro = d.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function ra(e) {
        let { children: t, elementsRef: r, labelsRef: n } = e,
          [o, a] = d.useState(() => new Map()),
          i = d.useCallback((e) => {
            a((t) => new Map(t).set(e, null));
          }, []),
          l = d.useCallback((e) => {
            a((t) => {
              let r = new Map(t);
              return r.delete(e), r;
            });
          }, []);
        return (
          rr(() => {
            let e = new Map(o);
            Array.from(e.keys())
              .sort(rn)
              .forEach((t, r) => {
                e.set(t, r);
              }),
              !(function (e, t) {
                if (e.size !== t.size) return !1;
                for (let [r, n] of e.entries()) if (n !== t.get(r)) return !1;
                return !0;
              })(o, e) && a(e);
          }, [o]),
          d.createElement(
            ro.Provider,
            {
              value: d.useMemo(
                () => ({
                  register: i,
                  unregister: l,
                  map: o,
                  elementsRef: r,
                  labelsRef: n,
                }),
                [i, l, o, r, n]
              ),
            },
            t
          )
        );
      }
      function ri() {
        return (ri = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      let rl = !1,
        rs = 0,
        rd = () => "floating-ui-" + rs++,
        rc =
          c["useId".toString()] ||
          function () {
            let [e, t] = d.useState(() => (rl ? rd() : void 0));
            return (
              rr(() => {
                null == e && t(rd());
              }, []),
              d.useEffect(() => {
                rl || (rl = !0);
              }, []),
              e
            );
          },
        ru = d.createContext(null),
        rf = d.createContext(null),
        rp = () => {
          var e;
          return (null == (e = d.useContext(ru)) ? void 0 : e.id) || null;
        },
        rg = () => d.useContext(rf);
      function rh(e) {
        return "data-floating-ui-" + e;
      }
      function rm(e) {
        let t = (0, d.useRef)(e);
        return (
          rr(() => {
            t.current = e;
          }),
          t
        );
      }
      let rb = rh("safe-polygon");
      function ry(e, t, r) {
        return r && !e$(r)
          ? 0
          : "number" == typeof e
          ? e
          : null == e
          ? void 0
          : e[t];
      }
      function rv(e, t) {
        let r = e.filter((e) => {
            var r;
            return (
              e.parentId === t && (null == (r = e.context) ? void 0 : r.open)
            );
          }),
          n = r;
        for (; n.length; )
          (n = e.filter((e) => {
            var t;
            return null == (t = n)
              ? void 0
              : t.some((t) => {
                  var r;
                  return (
                    e.parentId === t.id &&
                    (null == (r = e.context) ? void 0 : r.open)
                  );
                });
          })),
            (r = r.concat(n));
        return r;
      }
      let rx = new WeakMap(),
        rw = new WeakSet(),
        rk = {},
        rE = 0,
        rS = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        rT = (e) => e && (e.host || rT(e.parentNode)),
        rC = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              let r = rT(t);
              return e.contains(r) ? r : null;
            })
            .filter((e) => null != e);
      function rj(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        let n = eG(e[0]).body;
        return (function (e, t, r, n) {
          let o = "data-floating-ui-inert",
            a = n ? "inert" : r ? "aria-hidden" : null,
            i = rC(t, e),
            l = new Set(),
            s = new Set(i),
            d = [];
          rk[o] || (rk[o] = new WeakMap());
          let c = rk[o];
          return (
            i.forEach(function e(t) {
              !(!t || l.has(t)) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              !t ||
                s.has(t) ||
                Array.prototype.forEach.call(t.children, (t) => {
                  if (l.has(t)) e(t);
                  else {
                    let e = a ? t.getAttribute(a) : null,
                      r = null !== e && "false" !== e,
                      n = (rx.get(t) || 0) + 1,
                      i = (c.get(t) || 0) + 1;
                    rx.set(t, n),
                      c.set(t, i),
                      d.push(t),
                      1 === n && r && rw.add(t),
                      1 === i && t.setAttribute(o, ""),
                      !r && a && t.setAttribute(a, "true");
                  }
                });
            })(t),
            l.clear(),
            rE++,
            () => {
              d.forEach((e) => {
                let t = (rx.get(e) || 0) - 1,
                  r = (c.get(e) || 0) - 1;
                rx.set(e, t),
                  c.set(e, r),
                  t || (!rw.has(e) && a && e.removeAttribute(a), rw.delete(e)),
                  r || e.removeAttribute(o);
              }),
                --rE ||
                  ((rx = new WeakMap()),
                  (rx = new WeakMap()),
                  (rw = new WeakSet()),
                  (rk = {}));
            }
          );
        })(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r);
      }
      let rM = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function rN(e, t) {
        let r = tZ(e, rM());
        "prev" === t && r.reverse();
        let n = r.indexOf(e_(eG(e)));
        return r.slice(n + 1)[0];
      }
      function rP() {
        return rN(document.body, "next");
      }
      function rO() {
        return rN(document.body, "prev");
      }
      function rL(e, t) {
        let r = t || e.currentTarget,
          n = e.relatedTarget;
        return !n || !eR(r, n);
      }
      let rI = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0,
      };
      function r_(e) {
        "Tab" === e.key && (e.target, clearTimeout(n));
      }
      let rR = d.forwardRef(function (e, t) {
          let [r, n] = d.useState();
          rr(
            () => (
              eF() && n("button"),
              document.addEventListener("keydown", r_),
              () => {
                document.removeEventListener("keydown", r_);
              }
            ),
            []
          );
          let o = {
            ref: t,
            tabIndex: 0,
            role: r,
            "aria-hidden": !r || void 0,
            [rh("focus-guard")]: "",
            style: rI,
          };
          return d.createElement("span", ri({}, e, o));
        }),
        rA = d.createContext(null);
      function rz(e) {
        let {
            children: t,
            id: r,
            root: n = null,
            preserveTabOrder: o = !0,
          } = e,
          a = (function (e) {
            let { id: t, root: r } = void 0 === e ? {} : e,
              [n, o] = d.useState(null),
              a = rc(),
              i = rD(),
              l = d.useMemo(
                () => ({ id: t, root: r, portalContext: i, uniqueId: a }),
                [t, r, i, a]
              ),
              s = d.useRef();
            return (
              rr(
                () => () => {
                  null == n || n.remove();
                },
                [n, l]
              ),
              rr(() => {
                if (s.current === l) return;
                s.current = l;
                let { id: e, root: t, portalContext: r, uniqueId: n } = l,
                  a = e ? document.getElementById(e) : null,
                  i = rh("portal");
                if (a) {
                  let e = document.createElement("div");
                  (e.id = n), e.setAttribute(i, ""), a.appendChild(e), o(e);
                } else {
                  let a = t || (null == r ? void 0 : r.portalNode);
                  a && !eE(a) && (a = a.current), (a = a || document.body);
                  let l = null;
                  e &&
                    (((l = document.createElement("div")).id = e),
                    a.appendChild(l));
                  let s = document.createElement("div");
                  (s.id = n),
                    s.setAttribute(i, ""),
                    (a = l || a).appendChild(s),
                    o(s);
                }
              }, [l]),
              n
            );
          })({ id: r, root: n }),
          [i, l] = d.useState(null),
          s = d.useRef(null),
          c = d.useRef(null),
          u = d.useRef(null),
          f = d.useRef(null),
          p = !!i && !i.modal && i.open && o && !!(n || a);
        return (
          d.useEffect(() => {
            if (a && o && (null == i || !i.modal))
              return (
                a.addEventListener("focusin", e, !0),
                a.addEventListener("focusout", e, !0),
                () => {
                  a.removeEventListener("focusin", e, !0),
                    a.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              a &&
                rL(e) &&
                ("focusin" === e.type
                  ? function (e) {
                      e.querySelectorAll("[data-tabindex]").forEach((e) => {
                        let t = e.dataset.tabindex;
                        delete e.dataset.tabindex,
                          t
                            ? e.setAttribute("tabindex", t)
                            : e.removeAttribute("tabindex");
                      });
                    }
                  : function (e) {
                      tZ(e, rM()).forEach((e) => {
                        (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                          e.setAttribute("tabindex", "-1");
                      });
                    })(a);
            }
          }, [a, o, null == i ? void 0 : i.modal]),
          d.createElement(
            rA.Provider,
            {
              value: d.useMemo(
                () => ({
                  preserveTabOrder: o,
                  beforeOutsideRef: s,
                  afterOutsideRef: c,
                  beforeInsideRef: u,
                  afterInsideRef: f,
                  portalNode: a,
                  setFocusManagerState: l,
                }),
                [o, a]
              ),
            },
            p &&
              a &&
              d.createElement(rR, {
                "data-type": "outside",
                ref: s,
                onFocus: (e) => {
                  if (rL(e, a)) {
                    var t;
                    null == (t = u.current) || t.focus();
                  } else {
                    let e =
                      rO() ||
                      (null == i ? void 0 : i.refs.domReference.current);
                    null == e || e.focus();
                  }
                },
              }),
            p && a && d.createElement("span", { "aria-owns": a.id, style: rI }),
            a && (0, tE.createPortal)(t, a),
            p &&
              a &&
              d.createElement(rR, {
                "data-type": "outside",
                ref: c,
                onFocus: (e) => {
                  if (rL(e, a)) {
                    var t;
                    null == (t = f.current) || t.focus();
                  } else {
                    let t =
                      rP() ||
                      (null == i ? void 0 : i.refs.domReference.current);
                    null == t || t.focus(),
                      (null == i ? void 0 : i.closeOnFocusOut) &&
                        (null == i || i.onOpenChange(!1, e.nativeEvent));
                  }
                },
              })
          )
        );
      }
      let rD = () => d.useContext(rA),
        rF = [];
      function rB(e) {
        (rF = rF.filter((e) => e.isConnected)),
          e &&
            "body" !== ev(e) &&
            (rF.push(e), rF.length > 20 && (rF = rF.slice(-20)));
      }
      function rH() {
        return rF
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      let r$ = d.forwardRef(function (e, t) {
        return d.createElement(
          "button",
          ri({}, e, { type: "button", ref: t, tabIndex: -1, style: rI })
        );
      });
      function rG(e) {
        let {
            context: t,
            children: r,
            disabled: n = !1,
            order: o = ["content"],
            guards: a = !0,
            initialFocus: i = 0,
            returnFocus: l = !0,
            modal: s = !0,
            visuallyHiddenDismiss: c = !1,
            closeOnFocusOut: u = !0,
          } = e,
          {
            open: f,
            refs: p,
            nodeId: g,
            onOpenChange: h,
            events: m,
            dataRef: b,
            elements: { domReference: y, floating: v },
          } = t,
          x = "number" == typeof i && i < 0,
          w = eX(y) && x,
          k = !rS() || a,
          E = rm(o),
          S = rm(i),
          T = rm(l),
          C = rg(),
          j = rD(),
          M = d.useRef(null),
          N = d.useRef(null),
          P = d.useRef(!1),
          O = d.useRef(!1),
          L = null != j,
          I = d.useCallback(
            function (e) {
              return void 0 === e && (e = v), e ? tZ(e, rM()) : [];
            },
            [v]
          ),
          _ = d.useCallback(
            (e) => {
              let t = I(e);
              return E.current
                .map((e) =>
                  y && "reference" === e ? y : v && "floating" === e ? v : t
                )
                .filter(Boolean)
                .flat();
            },
            [y, v, E, I]
          );
        function R(e) {
          return !n && c && s
            ? d.createElement(
                r$,
                {
                  ref: "start" === e ? M : N,
                  onClick: (e) => h(!1, e.nativeEvent),
                },
                "string" == typeof c ? c : "Dismiss"
              )
            : null;
        }
        d.useEffect(() => {
          if (n || !s) return;
          function e(e) {
            if ("Tab" === e.key) {
              eR(v, e_(eG(v))) && 0 === I().length && !w && eq(e);
              let t = _(),
                r = eV(e);
              "reference" === E.current[0] &&
                r === y &&
                (eq(e), e.shiftKey ? rt(t[t.length - 1]) : rt(t[1])),
                "floating" === E.current[1] &&
                  r === v &&
                  e.shiftKey &&
                  (eq(e), rt(t[0]));
            }
          }
          let t = eG(v);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [n, y, v, s, E, p, w, I, _]),
          d.useEffect(() => {
            if (!n && u && v && eS(y))
              return (
                y.addEventListener("focusout", t),
                y.addEventListener("pointerdown", e),
                s || v.addEventListener("focusout", t),
                () => {
                  y.removeEventListener("focusout", t),
                    y.removeEventListener("pointerdown", e),
                    s || v.removeEventListener("focusout", t);
                }
              );
            function e() {
              (O.current = !0),
                setTimeout(() => {
                  O.current = !1;
                });
            }
            function t(e) {
              let t = e.relatedTarget;
              queueMicrotask(() => {
                let r = !(
                  eR(y, t) ||
                  eR(v, t) ||
                  eR(t, v) ||
                  eR(null == j ? void 0 : j.portalNode, t) ||
                  (null != t && t.hasAttribute(rh("focus-guard"))) ||
                  (C &&
                    (rv(C.nodesRef.current, g).find((e) => {
                      var r, n;
                      return (
                        eR(
                          null == (r = e.context)
                            ? void 0
                            : r.elements.floating,
                          t
                        ) ||
                        eR(
                          null == (n = e.context)
                            ? void 0
                            : n.elements.domReference,
                          t
                        )
                      );
                    }) ||
                      (function (e, t) {
                        var r;
                        let n = [],
                          o =
                            null == (r = e.find((e) => e.id === t))
                              ? void 0
                              : r.parentId;
                        for (; o; ) {
                          let t = e.find((e) => e.id === o);
                          (o = null == t ? void 0 : t.parentId),
                            t && (n = n.concat(t));
                        }
                        return n;
                      })(C.nodesRef.current, g).find((e) => {
                        var r, n;
                        return (
                          (null == (r = e.context)
                            ? void 0
                            : r.elements.floating) === t ||
                          (null == (n = e.context)
                            ? void 0
                            : n.elements.domReference) === t
                        );
                      })))
                );
                t &&
                  r &&
                  !O.current &&
                  t !== rH() &&
                  ((P.current = !0), h(!1, e));
              });
            }
          }, [n, y, v, s, g, C, j, h, u]),
          d.useEffect(() => {
            var e;
            if (n) return;
            let t = Array.from(
              (null == j || null == (e = j.portalNode)
                ? void 0
                : e.querySelectorAll("[" + rh("portal") + "]")) || []
            );
            if (v) {
              let e = [
                  v,
                  ...t,
                  M.current,
                  N.current,
                  E.current.includes("reference") || w ? y : null,
                ].filter((e) => null != e),
                r = s || w ? rj(e, k, !k) : rj(e);
              return () => {
                r();
              };
            }
          }, [n, y, v, s, E, j, w, k]),
          rr(() => {
            if (n || !v) return;
            let e = e_(eG(v));
            queueMicrotask(() => {
              let t = _(v),
                r = S.current,
                n = ("number" == typeof r ? t[r] : r.current) || v,
                o = eR(v, e);
              x || o || !f || rt(n, { preventScroll: n === v });
            });
          }, [n, f, v, x, _, S]),
          rr(() => {
            if (n || !v) return;
            let e = !1,
              t = eG(v),
              r = e_(t),
              o = b.current;
            function a(t) {
              let { reason: r, event: n, nested: o } = t;
              "escape-key" === r &&
                p.domReference.current &&
                rB(p.domReference.current),
                "hover" === r && "mouseleave" === n.type && (P.current = !0),
                "outside-press" === r &&
                  (o
                    ? ((P.current = !1), (e = !0))
                    : (P.current = !(ez(n) || eD(n))));
            }
            return (
              rB(r),
              m.on("openchange", a),
              () => {
                m.off("openchange", a);
                let r = e_(t),
                  n =
                    eR(v, r) ||
                    (C &&
                      rv(C.nodesRef.current, g).some((e) => {
                        var t;
                        return eR(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r
                        );
                      }));
                (n ||
                  (o.openEvent &&
                    ["click", "mousedown"].includes(o.openEvent.type))) &&
                  p.domReference.current &&
                  rB(p.domReference.current);
                let i = rH();
                T.current &&
                  !P.current &&
                  eS(i) &&
                  (i === r || r === t.body || n) &&
                  rt(i, { cancelPrevious: !1, preventScroll: e });
              }
            );
          }, [n, v, T, b, p, m, C, g]),
          rr(() => {
            if (!n && j)
              return (
                j.setFocusManagerState({
                  modal: s,
                  closeOnFocusOut: u,
                  open: f,
                  onOpenChange: h,
                  refs: p,
                }),
                () => {
                  j.setFocusManagerState(null);
                }
              );
          }, [n, j, s, f, h, p, u]),
          rr(() => {
            if (n || !v || "function" != typeof MutationObserver || x) return;
            let e = () => {
              let e = v.getAttribute("tabindex");
              E.current.includes("floating") ||
              (e_(eG(v)) !== p.domReference.current && 0 === I().length)
                ? "0" !== e && v.setAttribute("tabindex", "0")
                : "-1" !== e && v.setAttribute("tabindex", "-1");
            };
            e();
            let t = new MutationObserver(e);
            return (
              t.observe(v, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [n, v, p, E, I, x]);
        let A = !n && k && (L || s);
        return d.createElement(
          d.Fragment,
          null,
          A &&
            d.createElement(rR, {
              "data-type": "inside",
              ref: null == j ? void 0 : j.beforeInsideRef,
              onFocus: (e) => {
                if (s) {
                  let e = _();
                  rt("reference" === o[0] ? e[0] : e[e.length - 1]);
                } else if (null != j && j.preserveTabOrder && j.portalNode) {
                  if (((P.current = !1), rL(e, j.portalNode))) {
                    let e = rP() || y;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = j.beforeOutsideRef.current) || t.focus();
                  }
                }
              },
            }),
          !w && R("start"),
          r,
          R("end"),
          A &&
            d.createElement(rR, {
              "data-type": "inside",
              ref: null == j ? void 0 : j.afterInsideRef,
              onFocus: (e) => {
                if (s) rt(_()[0]);
                else if (null != j && j.preserveTabOrder && j.portalNode) {
                  if ((u && (P.current = !0), rL(e, j.portalNode))) {
                    let e = rO() || y;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = j.afterOutsideRef.current) || t.focus();
                  }
                }
              },
            })
        );
      }
      let rW = new Set(),
        rV = d.forwardRef(function (e, t) {
          let { lockScroll: r = !1, ...n } = e,
            o = rc();
          return (
            rr(() => {
              if (!r) return;
              rW.add(o);
              let e = /iP(hone|ad|od)|iOS/.test(eA()),
                t = document.body.style,
                n =
                  Math.round(
                    document.documentElement.getBoundingClientRect().left
                  ) + document.documentElement.scrollLeft
                    ? "paddingLeft"
                    : "paddingRight",
                a = window.innerWidth - document.documentElement.clientWidth,
                i = t.left ? parseFloat(t.left) : window.pageXOffset,
                l = t.top ? parseFloat(t.top) : window.pageYOffset;
              if (((t.overflow = "hidden"), a && (t[n] = a + "px"), e)) {
                var s, d;
                let e =
                  (null == (s = window.visualViewport)
                    ? void 0
                    : s.offsetLeft) || 0;
                Object.assign(t, {
                  position: "fixed",
                  top:
                    -(
                      l -
                      Math.floor(
                        (null == (d = window.visualViewport)
                          ? void 0
                          : d.offsetTop) || 0
                      )
                    ) + "px",
                  left: -(i - Math.floor(e)) + "px",
                  right: "0",
                });
              }
              return () => {
                rW.delete(o),
                  0 === rW.size &&
                    (Object.assign(t, { overflow: "", [n]: "" }),
                    e &&
                      (Object.assign(t, {
                        position: "",
                        top: "",
                        left: "",
                        right: "",
                      }),
                      window.scrollTo(i, l)));
              };
            }, [o, r]),
            d.createElement(
              "div",
              ri({ ref: t }, n, {
                style: {
                  position: "fixed",
                  overflow: "auto",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  ...n.style,
                },
              })
            )
          );
        });
      function rY(e) {
        return eS(e.target) && "BUTTON" === e.target.tagName;
      }
      function rq(e, t) {
        void 0 === t && (t = {});
        let {
            open: r,
            onOpenChange: n,
            dataRef: o,
            elements: { domReference: a },
          } = e,
          {
            enabled: i = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: c = !1,
            keyboardHandlers: u = !0,
          } = t,
          f = d.useRef(),
          p = d.useRef(!1);
        return d.useMemo(
          () =>
            i
              ? {
                  reference: {
                    onPointerDown(e) {
                      f.current = e.pointerType;
                    },
                    onMouseDown(e) {
                      0 !== e.button ||
                        (e$(f.current, !0) && c) ||
                        "click" === l ||
                        (r &&
                        s &&
                        (!o.current.openEvent ||
                          "mousedown" === o.current.openEvent.type)
                          ? n(!1, e.nativeEvent, "click")
                          : (e.preventDefault(),
                            n(!0, e.nativeEvent, "click")));
                    },
                    onClick(e) {
                      if ("mousedown" === l && f.current) {
                        f.current = void 0;
                        return;
                      }
                      (e$(f.current, !0) && c) ||
                        (r &&
                        s &&
                        (!o.current.openEvent ||
                          "click" === o.current.openEvent.type)
                          ? n(!1, e.nativeEvent, "click")
                          : n(!0, e.nativeEvent, "click"));
                    },
                    onKeyDown(e) {
                      (f.current = void 0),
                        e.defaultPrevented ||
                          !u ||
                          rY(e) ||
                          (" " !== e.key ||
                            eY(a) ||
                            (e.preventDefault(), (p.current = !0)),
                          "Enter" === e.key &&
                            (r && s
                              ? n(!1, e.nativeEvent, "click")
                              : n(!0, e.nativeEvent, "click")));
                    },
                    onKeyUp(e) {
                      !(e.defaultPrevented || !u || rY(e) || eY(a)) &&
                        " " === e.key &&
                        p.current &&
                        ((p.current = !1),
                        r && s
                          ? n(!1, e.nativeEvent, "click")
                          : n(!0, e.nativeEvent, "click"));
                    },
                  },
                }
              : {},
          [i, o, l, c, u, a, s, r, n]
        );
      }
      let rX = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        rU = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        rK = (e) => {
          var t, r;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (r = null == e ? void 0 : e.outsidePress) || r,
          };
        };
      function rQ(e, t) {
        void 0 === t && (t = {});
        let {
            open: r,
            onOpenChange: n,
            nodeId: o,
            elements: { reference: a, domReference: i, floating: l },
            dataRef: s,
          } = e,
          {
            enabled: c = !0,
            escapeKey: u = !0,
            outsidePress: f = !0,
            outsidePressEvent: p = "pointerdown",
            referencePress: g = !1,
            referencePressEvent: h = "pointerdown",
            ancestorScroll: m = !1,
            bubbles: b,
            capture: y,
          } = t,
          v = rg(),
          x = t0("function" == typeof f ? f : () => !1),
          w = "function" == typeof f ? x : f,
          k = d.useRef(!1),
          E = d.useRef(!1),
          { escapeKey: S, outsidePress: T } = rK(b),
          { escapeKey: C, outsidePress: j } = rK(y),
          M = t0((e) => {
            if (!r || !c || !u || "Escape" !== e.key) return;
            let t = v ? rv(v.nodesRef.current, o) : [];
            if (!S && (e.stopPropagation(), t.length > 0)) {
              let e = !0;
              if (
                (t.forEach((t) => {
                  var r;
                  if (
                    null != (r = t.context) &&
                    r.open &&
                    !t.context.dataRef.current.__escapeKeyBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            n(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key");
          }),
          N = t0((e) => {
            var t;
            let r = () => {
              var t;
              M(e), null == (t = eV(e)) || t.removeEventListener("keydown", r);
            };
            null == (t = eV(e)) || t.addEventListener("keydown", r);
          }),
          P = t0((e) => {
            let t = k.current;
            k.current = !1;
            let r = E.current;
            if (
              ((E.current = !1),
              ("click" === p && r) || t || ("function" == typeof w && !w(e)))
            )
              return;
            let a = eV(e),
              s = "[" + rh("inert") + "]",
              d = eG(l).querySelectorAll(s),
              c = eE(a) ? a : null;
            for (; c && !eN(c); ) {
              let e = eL(c);
              if (eN(e) || !eE(e)) break;
              c = e;
            }
            if (
              d.length &&
              eE(a) &&
              !a.matches("html,body") &&
              !eR(a, l) &&
              Array.from(d).every((e) => !eR(c, e))
            )
              return;
            if (eS(a) && l) {
              let t = a.clientWidth > 0 && a.scrollWidth > a.clientWidth,
                r = a.clientHeight > 0 && a.scrollHeight > a.clientHeight,
                n = r && e.offsetX > a.clientWidth;
              if (
                (r &&
                  "rtl" === eP(a).direction &&
                  (n = e.offsetX <= a.offsetWidth - a.clientWidth),
                n || (t && e.offsetY > a.clientHeight))
              )
                return;
            }
            let u =
              v &&
              rv(v.nodesRef.current, o).some((t) => {
                var r;
                return eW(
                  e,
                  null == (r = t.context) ? void 0 : r.elements.floating
                );
              });
            if (eW(e, l) || eW(e, i) || u) return;
            let f = v ? rv(v.nodesRef.current, o) : [];
            if (f.length > 0) {
              let e = !0;
              if (
                (f.forEach((t) => {
                  var r;
                  if (
                    null != (r = t.context) &&
                    r.open &&
                    !t.context.dataRef.current.__outsidePressBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            n(!1, e, "outside-press");
          }),
          O = t0((e) => {
            var t;
            let r = () => {
              var t;
              P(e), null == (t = eV(e)) || t.removeEventListener(p, r);
            };
            null == (t = eV(e)) || t.addEventListener(p, r);
          });
        return (
          d.useEffect(() => {
            if (!r || !c) return;
            function e(e) {
              n(!1, e, "ancestor-scroll");
            }
            (s.current.__escapeKeyBubbles = S),
              (s.current.__outsidePressBubbles = T);
            let t = eG(l);
            u && t.addEventListener("keydown", C ? N : M, C),
              w && t.addEventListener(p, j ? O : P, j);
            let o = [];
            return (
              m &&
                (eE(i) && (o = eI(i)),
                eE(l) && (o = o.concat(eI(l))),
                !eE(a) &&
                  a &&
                  a.contextElement &&
                  (o = o.concat(eI(a.contextElement)))),
              (o = o.filter((e) => {
                var r;
                return (
                  e !==
                  (null == (r = t.defaultView) ? void 0 : r.visualViewport)
                );
              })).forEach((t) => {
                t.addEventListener("scroll", e, { passive: !0 });
              }),
              () => {
                u && t.removeEventListener("keydown", C ? N : M, C),
                  w && t.removeEventListener(p, j ? O : P, j),
                  o.forEach((t) => {
                    t.removeEventListener("scroll", e);
                  });
              }
            );
          }, [s, l, i, a, u, w, p, r, n, m, c, S, T, M, C, N, P, j, O]),
          d.useEffect(() => {
            k.current = !1;
          }, [w, p]),
          d.useMemo(
            () =>
              c
                ? {
                    reference: {
                      onKeyDown: M,
                      [rX[h]]: (e) => {
                        g && n(!1, e.nativeEvent, "reference-press");
                      },
                    },
                    floating: {
                      onKeyDown: M,
                      onMouseDown() {
                        E.current = !0;
                      },
                      onMouseUp() {
                        E.current = !0;
                      },
                      [rU[p]]: () => {
                        k.current = !0;
                      },
                    },
                  }
                : {},
            [c, g, p, h, n, M]
          )
        );
      }
      function rZ(e) {
        var t;
        void 0 === e && (e = {});
        let { open: r = !1, onOpenChange: n, nodeId: o } = e,
          [a, i] = d.useState(null),
          l = (null == (t = e.elements) ? void 0 : t.reference) || a,
          s = (function (e) {
            void 0 === e && (e = {});
            let {
                placement: t = "bottom",
                strategy: r = "absolute",
                middleware: n = [],
                platform: o,
                elements: { reference: a, floating: i } = {},
                transform: l = !0,
                whileElementsMounted: s,
                open: c,
              } = e,
              [u, f] = d.useState({
                x: 0,
                y: 0,
                strategy: r,
                placement: t,
                middlewareData: {},
                isPositioned: !1,
              }),
              [p, g] = d.useState(n);
            tC(p, n) || g(n);
            let [h, m] = d.useState(null),
              [b, y] = d.useState(null),
              v = d.useCallback(
                (e) => {
                  e != E.current && ((E.current = e), m(e));
                },
                [m]
              ),
              x = d.useCallback(
                (e) => {
                  e !== S.current && ((S.current = e), y(e));
                },
                [y]
              ),
              w = a || h,
              k = i || b,
              E = d.useRef(null),
              S = d.useRef(null),
              T = d.useRef(u),
              C = tN(s),
              j = tN(o),
              M = d.useCallback(() => {
                if (!E.current || !S.current) return;
                let e = { placement: t, strategy: r, middleware: p };
                j.current && (e.platform = j.current),
                  tk(E.current, S.current, e).then((e) => {
                    let t = { ...e, isPositioned: !0 };
                    N.current &&
                      !tC(T.current, t) &&
                      ((T.current = t),
                      tE.flushSync(() => {
                        f(t);
                      }));
                  });
              }, [p, t, r, j]);
            tT(() => {
              !1 === c &&
                T.current.isPositioned &&
                ((T.current.isPositioned = !1),
                f((e) => ({ ...e, isPositioned: !1 })));
            }, [c]);
            let N = d.useRef(!1);
            tT(
              () => (
                (N.current = !0),
                () => {
                  N.current = !1;
                }
              ),
              []
            ),
              tT(() => {
                if ((w && (E.current = w), k && (S.current = k), w && k)) {
                  if (C.current) return C.current(w, k, M);
                  M();
                }
              }, [w, k, M, C]);
            let P = d.useMemo(
                () => ({
                  reference: E,
                  floating: S,
                  setReference: v,
                  setFloating: x,
                }),
                [v, x]
              ),
              O = d.useMemo(() => ({ reference: w, floating: k }), [w, k]),
              L = d.useMemo(() => {
                let e = { position: r, left: 0, top: 0 };
                if (!O.floating) return e;
                let t = tM(O.floating, u.x),
                  n = tM(O.floating, u.y);
                return l
                  ? {
                      ...e,
                      transform: "translate(" + t + "px, " + n + "px)",
                      ...(tj(O.floating) >= 1.5 && { willChange: "transform" }),
                    }
                  : { position: r, left: t, top: n };
              }, [r, l, O.floating, u.x, u.y]);
            return d.useMemo(
              () => ({
                ...u,
                update: M,
                refs: P,
                elements: O,
                floatingStyles: L,
              }),
              [u, M, P, O, L]
            );
          })(e),
          c = rg(),
          u = null != rp(),
          f = t0((e, t, r) => {
            e && (g.current.openEvent = t),
              h.emit("openchange", { open: e, event: t, reason: r, nested: u }),
              null == n || n(e, t, r);
          }),
          p = d.useRef(null),
          g = d.useRef({}),
          h = d.useState(() =>
            (function () {
              let e = new Map();
              return {
                emit(t, r) {
                  var n;
                  null == (n = e.get(t)) || n.forEach((e) => e(r));
                },
                on(t, r) {
                  e.set(t, [...(e.get(t) || []), r]);
                },
                off(t, r) {
                  var n;
                  e.set(
                    t,
                    (null == (n = e.get(t))
                      ? void 0
                      : n.filter((e) => e !== r)) || []
                  );
                },
              };
            })()
          )[0],
          m = rc(),
          b = d.useCallback(
            (e) => {
              let t = eE(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              s.refs.setReference(t);
            },
            [s.refs]
          ),
          y = d.useCallback(
            (e) => {
              (eE(e) || null === e) && ((p.current = e), i(e)),
                (eE(s.refs.reference.current) ||
                  null === s.refs.reference.current ||
                  (null !== e && !eE(e))) &&
                  s.refs.setReference(e);
            },
            [s.refs]
          ),
          v = d.useMemo(
            () => ({
              ...s.refs,
              setReference: y,
              setPositionReference: b,
              domReference: p,
            }),
            [s.refs, y, b]
          ),
          x = d.useMemo(
            () => ({ ...s.elements, domReference: l }),
            [s.elements, l]
          ),
          w = d.useMemo(
            () => ({
              ...s,
              refs: v,
              elements: x,
              dataRef: g,
              nodeId: o,
              floatingId: m,
              events: h,
              open: r,
              onOpenChange: f,
            }),
            [s, o, m, h, r, f, v, x]
          );
        return (
          rr(() => {
            let e =
              null == c ? void 0 : c.nodesRef.current.find((e) => e.id === o);
            e && (e.context = w);
          }),
          d.useMemo(
            () => ({ ...s, context: w, refs: v, elements: x }),
            [s, v, x, w]
          )
        );
      }
      let rJ = "active",
        r0 = "selected";
      function r1(e, t, r) {
        let n = new Map(),
          o = "item" === r,
          a = e;
        if (o && e) {
          let { [rJ]: t, [r0]: r, ...n } = e;
          a = n;
        }
        return {
          ...("floating" === r && { tabIndex: -1 }),
          ...a,
          ...t
            .map((t) => {
              let n = t ? t[r] : null;
              return "function" == typeof n ? (e ? n(e) : null) : n;
            })
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [r, a] = t;
                    if (!(o && [rJ, r0].includes(r))) {
                      if (0 === r.indexOf("on")) {
                        if (
                          (n.has(r) || n.set(r, []), "function" == typeof a)
                        ) {
                          var i;
                          null == (i = n.get(r)) || i.push(a),
                            (e[r] = function () {
                              for (
                                var e,
                                  t = arguments.length,
                                  o = Array(t),
                                  a = 0;
                                a < t;
                                a++
                              )
                                o[a] = arguments[a];
                              return null == (e = n.get(r))
                                ? void 0
                                : e
                                    .map((e) => e(...o))
                                    .find((e) => void 0 !== e);
                            });
                        }
                      } else e[r] = a;
                    }
                  }),
                e
              ),
              {}
            ),
        };
      }
      function r5(e) {
        void 0 === e && (e = []);
        let t = e,
          r = d.useCallback((t) => r1(t, e, "reference"), t),
          n = d.useCallback((t) => r1(t, e, "floating"), t),
          o = d.useCallback(
            (t) => r1(t, e, "item"),
            e.map((e) => (null == e ? void 0 : e.item))
          );
        return d.useMemo(
          () => ({
            getReferenceProps: r,
            getFloatingProps: n,
            getItemProps: o,
          }),
          [r, n, o]
        );
      }
      let r2 = !1;
      function r6(e, t, r) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return r;
          default:
            return t || r;
        }
      }
      function r4(e, t) {
        return r6(t, e === t1 || e === t5, e === t2 || e === t6);
      }
      function r7(e, t, r) {
        return (
          r6(t, e === t5, r ? e === t2 : e === t6) ||
          "Enter" === e ||
          " " == e ||
          "" === e
        );
      }
      function r3(e, t, r) {
        return r6(t, r ? e === t6 : e === t2, e === t1);
      }
      let r9 = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function r8(e, t) {
        var r;
        void 0 === t && (t = {});
        let { open: n, floatingId: o } = e,
          { enabled: a = !0, role: i = "dialog" } = t,
          l = null != (r = r9.get(i)) ? r : i,
          s = rc(),
          c = null != rp();
        return d.useMemo(() => {
          if (!a) return {};
          let e = { id: o, ...(l && { role: l }) };
          return "tooltip" === l || "label" === i
            ? {
                reference: {
                  ["aria-" + ("label" === i ? "labelledby" : "describedby")]: n
                    ? o
                    : void 0,
                },
                floating: e,
              }
            : {
                reference: {
                  "aria-expanded": n ? "true" : "false",
                  "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                  "aria-controls": n ? o : void 0,
                  ...("listbox" === l && { role: "combobox" }),
                  ...("menu" === l && { id: s }),
                  ...("menu" === l && c && { role: "menuitem" }),
                  ...("select" === i && { "aria-autocomplete": "none" }),
                  ...("combobox" === i && { "aria-autocomplete": "list" }),
                },
                floating: {
                  ...e,
                  ...("menu" === l && { "aria-labelledby": s }),
                },
                item(e) {
                  let { active: t, selected: r } = e,
                    n = { role: "option", ...(t && { id: o + "-option" }) };
                  switch (i) {
                    case "select":
                      return { ...n, "aria-selected": t && r };
                    case "combobox":
                      return { ...n, ...(t && { "aria-selected": !0 }) };
                  }
                  return {};
                },
              };
        }, [a, i, l, n, o, s, c]);
      }
      function ne(e, t) {
        let [r, n] = e,
          o = !1,
          a = t.length;
        for (let e = 0, i = a - 1; e < a; i = e++) {
          let [a, l] = t[e] || [0, 0],
            [s, d] = t[i] || [0, 0];
          l >= n != d >= n &&
            r <= ((s - a) * (n - l)) / (d - l) + a &&
            (o = !o);
        }
        return o;
      }
      let nt = ({ arrowRef: e, placement: t }) => {
          var r, n, o;
          let a = [];
          return (
            a.push({
              name: "offset",
              options: 8,
              async fn(e) {
                var t, r;
                let { x: n, y: o, placement: a, middlewareData: i } = e,
                  l = await ts(e, 8);
                return a === (null == (t = i.offset) ? void 0 : t.placement) &&
                  null != (r = i.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: n + l.x, y: o + l.y, data: { ...l, placement: a } };
              },
            }),
            a.push(
              "auto" === t
                ? (void 0 === r && (r = {}),
                  {
                    name: "autoPlacement",
                    options: r,
                    async fn(e) {
                      var t, n, o, a;
                      let {
                          rects: i,
                          middlewareData: l,
                          placement: s,
                          platform: d,
                          elements: c,
                        } = e,
                        {
                          crossAxis: u = !1,
                          alignment: f,
                          allowedPlacements: p = eU,
                          autoAlignment: g = !0,
                          ...h
                        } = e2(r, e),
                        m =
                          void 0 !== f || p === eU
                            ? ((a = f || null)
                                ? [
                                    ...p.filter((e) => e4(e) === a),
                                    ...p.filter((e) => e4(e) !== a),
                                  ]
                                : p.filter((e) => e6(e) === e)
                              ).filter(
                                (e) => !a || e4(e) === a || (!!g && te(e) !== e)
                              )
                            : p,
                        b = await ti(e, h),
                        y =
                          (null == (t = l.autoPlacement) ? void 0 : t.index) ||
                          0,
                        v = m[y];
                      if (null == v) return {};
                      let x = e8(
                        v,
                        i,
                        await (null == d.isRTL ? void 0 : d.isRTL(c.floating))
                      );
                      if (s !== v) return { reset: { placement: m[0] } };
                      let w = [b[e6(v)], b[x[0]], b[x[1]]],
                        k = [
                          ...((null == (n = l.autoPlacement)
                            ? void 0
                            : n.overflows) || []),
                          { placement: v, overflows: w },
                        ],
                        E = m[y + 1];
                      if (E)
                        return {
                          data: { index: y + 1, overflows: k },
                          reset: { placement: E },
                        };
                      let S = k
                          .map((e) => {
                            let t = e4(e.placement);
                            return [
                              e.placement,
                              t && u
                                ? e.overflows
                                    .slice(0, 2)
                                    .reduce((e, t) => e + t, 0)
                                : e.overflows[0],
                              e.overflows,
                            ];
                          })
                          .sort((e, t) => e[1] - t[1]),
                        T =
                          (null ==
                          (o = S.filter((e) =>
                            e[2].slice(0, e4(e[0]) ? 2 : 3).every((e) => e <= 0)
                          )[0])
                            ? void 0
                            : o[0]) || S[0][0];
                      return T !== s
                        ? {
                            data: { index: y + 1, overflows: k },
                            reset: { placement: T },
                          }
                        : {};
                    },
                  })
                : (void 0 === n && (n = {}),
                  {
                    name: "flip",
                    options: n,
                    async fn(e) {
                      var t, r, o, a, i;
                      let {
                          placement: l,
                          middlewareData: s,
                          rects: d,
                          initialPlacement: c,
                          platform: u,
                          elements: f,
                        } = e,
                        {
                          mainAxis: p = !0,
                          crossAxis: g = !0,
                          fallbackPlacements: h,
                          fallbackStrategy: m = "bestFit",
                          fallbackAxisSideDirection: b = "none",
                          flipAlignment: y = !0,
                          ...v
                        } = e2(n, e);
                      if (null != (t = s.arrow) && t.alignmentOffset) return {};
                      let x = e6(l),
                        w = e6(c) === c,
                        k = await (null == u.isRTL
                          ? void 0
                          : u.isRTL(f.floating)),
                        E =
                          h ||
                          (w || !y
                            ? [tt(c)]
                            : (function (e) {
                                let t = tt(e);
                                return [te(e), t, te(t)];
                              })(c));
                      h ||
                        "none" === b ||
                        E.push(
                          ...(function (e, t, r, n) {
                            let o = e4(e),
                              a = (function (e, t, r) {
                                let n = ["left", "right"],
                                  o = ["right", "left"];
                                switch (e) {
                                  case "top":
                                  case "bottom":
                                    if (r) return t ? o : n;
                                    return t ? n : o;
                                  case "left":
                                  case "right":
                                    return t
                                      ? ["top", "bottom"]
                                      : ["bottom", "top"];
                                  default:
                                    return [];
                                }
                              })(e6(e), "start" === r, n);
                            return (
                              o &&
                                ((a = a.map((e) => e + "-" + o)),
                                t && (a = a.concat(a.map(te)))),
                              a
                            );
                          })(c, y, b, k)
                        );
                      let S = [c, ...E],
                        T = await ti(e, v),
                        C = [],
                        j = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                      if ((p && C.push(T[x]), g)) {
                        let e = e8(l, d, k);
                        C.push(T[e[0]], T[e[1]]);
                      }
                      if (
                        ((j = [...j, { placement: l, overflows: C }]),
                        !C.every((e) => e <= 0))
                      ) {
                        let e =
                            ((null == (o = s.flip) ? void 0 : o.index) || 0) +
                            1,
                          t = S[e];
                        if (t)
                          return {
                            data: { index: e, overflows: j },
                            reset: { placement: t },
                          };
                        let r =
                          null ==
                          (a = j
                            .filter((e) => e.overflows[0] <= 0)
                            .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                            ? void 0
                            : a.placement;
                        if (!r)
                          switch (m) {
                            case "bestFit": {
                              let e =
                                null ==
                                (i = j
                                  .map((e) => [
                                    e.placement,
                                    e.overflows
                                      .filter((e) => e > 0)
                                      .reduce((e, t) => e + t, 0),
                                  ])
                                  .sort((e, t) => e[1] - t[1])[0])
                                  ? void 0
                                  : i[0];
                              e && (r = e);
                              break;
                            }
                            case "initialPlacement":
                              r = c;
                          }
                        if (l !== r) return { reset: { placement: r } };
                      }
                      return {};
                    },
                  })
            ),
            a.push({
              name: "shift",
              options: (o = { padding: 8 }),
              async fn(e) {
                let { x: t, y: r, placement: n } = e,
                  {
                    mainAxis: a = !0,
                    crossAxis: i = !1,
                    limiter: l = {
                      fn: (e) => {
                        let { x: t, y: r } = e;
                        return { x: t, y: r };
                      },
                    },
                    ...s
                  } = e2(o, e),
                  d = { x: t, y: r },
                  c = await ti(e, s),
                  u = e9(e6(n)),
                  f = e7(u),
                  p = d[f],
                  g = d[u];
                if (a) {
                  let e = "y" === f ? "top" : "left",
                    t = "y" === f ? "bottom" : "right",
                    r = p + c[e],
                    n = p - c[t];
                  p = eQ(r, eK(p, n));
                }
                if (i) {
                  let e = "y" === u ? "top" : "left",
                    t = "y" === u ? "bottom" : "right",
                    r = g + c[e],
                    n = g - c[t];
                  g = eQ(r, eK(g, n));
                }
                let h = l.fn({ ...e, [f]: p, [u]: g });
                return { ...h, data: { x: h.x - t, y: h.y - r } };
              },
            }),
            e?.current && a.push(tS({ element: e.current })),
            a
          );
        },
        nr = ({ placement: e }) => ("auto" === e ? void 0 : e),
        nn = ({ placement: e }) =>
          ({ top: "bottom", right: "left", bottom: "top", left: "right" }[
            e.split("-")[0]
          ]),
        no = ({ open: e, arrowRef: t, placement: r = "top", setOpen: n }) =>
          rZ({
            placement: nr({ placement: r }),
            open: e,
            onOpenChange: n,
            whileElementsMounted: tw,
            middleware: nt({ placement: r, arrowRef: t }),
          }),
        na = ({
          context: e,
          trigger: t,
          role: r = "tooltip",
          interactions: n = [],
        }) =>
          r5([
            rq(e, { enabled: "click" === t }),
            (function (e, t) {
              void 0 === t && (t = {});
              let {
                  open: r,
                  onOpenChange: n,
                  dataRef: o,
                  events: a,
                  elements: { domReference: i, floating: l },
                  refs: s,
                } = e,
                {
                  enabled: c = !0,
                  delay: u = 0,
                  handleClose: f = null,
                  mouseOnly: p = !1,
                  restMs: g = 0,
                  move: h = !0,
                } = t,
                m = rg(),
                b = rp(),
                y = rm(f),
                v = rm(u),
                x = d.useRef(),
                w = d.useRef(),
                k = d.useRef(),
                E = d.useRef(),
                S = d.useRef(!0),
                T = d.useRef(!1),
                C = d.useRef(() => {}),
                j = d.useCallback(() => {
                  var e;
                  let t = null == (e = o.current.openEvent) ? void 0 : e.type;
                  return (
                    (null == t ? void 0 : t.includes("mouse")) &&
                    "mousedown" !== t
                  );
                }, [o]);
              d.useEffect(() => {
                if (c)
                  return (
                    a.on("openchange", e),
                    () => {
                      a.off("openchange", e);
                    }
                  );
                function e(e) {
                  let { open: t } = e;
                  t ||
                    (clearTimeout(w.current),
                    clearTimeout(E.current),
                    (S.current = !0));
                }
              }, [c, a]),
                d.useEffect(() => {
                  if (!c || !y.current || !r) return;
                  function e(e) {
                    j() && n(!1, e, "hover");
                  }
                  let t = eG(l).documentElement;
                  return (
                    t.addEventListener("mouseleave", e),
                    () => {
                      t.removeEventListener("mouseleave", e);
                    }
                  );
                }, [l, r, n, c, y, o, j]);
              let M = d.useCallback(
                  function (e, t, r) {
                    void 0 === t && (t = !0), void 0 === r && (r = "hover");
                    let o = ry(v.current, "close", x.current);
                    o && !k.current
                      ? (clearTimeout(w.current),
                        (w.current = setTimeout(() => n(!1, e, r), o)))
                      : t && (clearTimeout(w.current), n(!1, e, r));
                  },
                  [v, n]
                ),
                N = d.useCallback(() => {
                  C.current(), (k.current = void 0);
                }, []),
                P = d.useCallback(() => {
                  if (T.current) {
                    let e = eG(s.floating.current).body;
                    (e.style.pointerEvents = ""),
                      e.removeAttribute(rb),
                      (T.current = !1);
                  }
                }, [s]);
              return (
                d.useEffect(() => {
                  if (c && eE(i))
                    return (
                      r && i.addEventListener("mouseleave", d),
                      null == l || l.addEventListener("mouseleave", d),
                      h && i.addEventListener("mousemove", a, { once: !0 }),
                      i.addEventListener("mouseenter", a),
                      i.addEventListener("mouseleave", s),
                      () => {
                        r && i.removeEventListener("mouseleave", d),
                          null == l || l.removeEventListener("mouseleave", d),
                          h && i.removeEventListener("mousemove", a),
                          i.removeEventListener("mouseenter", a),
                          i.removeEventListener("mouseleave", s);
                      }
                    );
                  function t() {
                    return (
                      !!o.current.openEvent &&
                      ["click", "mousedown"].includes(o.current.openEvent.type)
                    );
                  }
                  function a(e) {
                    if (
                      (clearTimeout(w.current),
                      (S.current = !1),
                      (p && !e$(x.current)) ||
                        (g > 0 && 0 === ry(v.current, "open")))
                    )
                      return;
                    let t = ry(v.current, "open", x.current);
                    t
                      ? (w.current = setTimeout(() => {
                          n(!0, e, "hover");
                        }, t))
                      : n(!0, e, "hover");
                  }
                  function s(n) {
                    if (t()) return;
                    C.current();
                    let o = eG(l);
                    if ((clearTimeout(E.current), y.current)) {
                      r || clearTimeout(w.current),
                        (k.current = y.current({
                          ...e,
                          tree: m,
                          x: n.clientX,
                          y: n.clientY,
                          onClose() {
                            P(), N(), M(n, !0, "safe-polygon");
                          },
                        }));
                      let t = k.current;
                      o.addEventListener("mousemove", t),
                        (C.current = () => {
                          o.removeEventListener("mousemove", t);
                        });
                      return;
                    }
                    ("touch" === x.current && eR(l, n.relatedTarget)) || M(n);
                  }
                  function d(r) {
                    t() ||
                      null == y.current ||
                      y.current({
                        ...e,
                        tree: m,
                        x: r.clientX,
                        y: r.clientY,
                        onClose() {
                          P(), N(), M(r);
                        },
                      })(r);
                  }
                }, [i, l, c, e, p, g, h, M, N, P, n, r, m, v, y, o]),
                rr(() => {
                  var e, t;
                  if (
                    c &&
                    r &&
                    null != (e = y.current) &&
                    e.__options.blockPointerEvents &&
                    j()
                  ) {
                    let e = eG(l).body;
                    if (
                      (e.setAttribute(rb, ""),
                      (e.style.pointerEvents = "none"),
                      (T.current = !0),
                      eE(i) && l)
                    ) {
                      let e =
                        null == m ||
                        null ==
                          (t = m.nodesRef.current.find((e) => e.id === b)) ||
                        null == (t = t.context)
                          ? void 0
                          : t.elements.floating;
                      return (
                        e && (e.style.pointerEvents = ""),
                        (i.style.pointerEvents = "auto"),
                        (l.style.pointerEvents = "auto"),
                        () => {
                          (i.style.pointerEvents = ""),
                            (l.style.pointerEvents = "");
                        }
                      );
                    }
                  }
                }, [c, r, b, l, i, m, y, o, j]),
                rr(() => {
                  r || ((x.current = void 0), N(), P());
                }, [r, N, P]),
                d.useEffect(
                  () => () => {
                    N(), clearTimeout(w.current), clearTimeout(E.current), P();
                  },
                  [c, i, N, P]
                ),
                d.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    x.current = e.pointerType;
                  }
                  return {
                    reference: {
                      onPointerDown: e,
                      onPointerEnter: e,
                      onMouseMove(e) {
                        r ||
                          0 === g ||
                          (clearTimeout(E.current),
                          (E.current = setTimeout(() => {
                            S.current || n(!0, e.nativeEvent, "hover");
                          }, g)));
                      },
                    },
                    floating: {
                      onMouseEnter() {
                        clearTimeout(w.current);
                      },
                      onMouseLeave(e) {
                        M(e.nativeEvent, !1);
                      },
                    },
                  };
                }, [c, g, r, n, M])
              );
            })(e, {
              enabled: "hover" === t,
              handleClose: (function (e) {
                let t;
                void 0 === e && (e = {});
                let {
                    buffer: r = 0.5,
                    blockPointerEvents: n = !1,
                    requireIntent: o = !0,
                  } = e,
                  a = !1,
                  i = null,
                  l = null,
                  s = performance.now(),
                  d = (e) => {
                    let {
                      x: n,
                      y: d,
                      placement: c,
                      elements: u,
                      onClose: f,
                      nodeId: p,
                      tree: g,
                    } = e;
                    return function (e) {
                      function h() {
                        clearTimeout(t), f();
                      }
                      if (
                        (clearTimeout(t),
                        !u.domReference ||
                          !u.floating ||
                          null == c ||
                          null == n ||
                          null == d)
                      )
                        return;
                      let { clientX: m, clientY: b } = e,
                        y = [m, b],
                        v = eV(e),
                        x = "mouseleave" === e.type,
                        w = eR(u.floating, v),
                        k = eR(u.domReference, v),
                        E = u.domReference.getBoundingClientRect(),
                        S = u.floating.getBoundingClientRect(),
                        T = c.split("-")[0],
                        C = n > S.right - S.width / 2,
                        j = d > S.bottom - S.height / 2,
                        M =
                          y[0] >= E.x &&
                          y[0] <= E.x + E.width &&
                          y[1] >= E.y &&
                          y[1] <= E.y + E.height,
                        N = S.width > E.width,
                        P = S.height > E.height,
                        O = (N ? E : S).left,
                        L = (N ? E : S).right,
                        I = (P ? E : S).top,
                        _ = (P ? E : S).bottom;
                      if (w && ((a = !0), !x)) return;
                      if ((k && (a = !1), k && !x)) {
                        a = !0;
                        return;
                      }
                      if (
                        (x &&
                          eE(e.relatedTarget) &&
                          eR(u.floating, e.relatedTarget)) ||
                        (g &&
                          rv(g.nodesRef.current, p).some((e) => {
                            let { context: t } = e;
                            return null == t ? void 0 : t.open;
                          }))
                      )
                        return;
                      if (
                        ("top" === T && d >= E.bottom - 1) ||
                        ("bottom" === T && d <= E.top + 1) ||
                        ("left" === T && n >= E.right - 1) ||
                        ("right" === T && n <= E.left + 1)
                      )
                        return h();
                      let R = [];
                      switch (T) {
                        case "top":
                          R = [
                            [O, E.top + 1],
                            [O, S.bottom - 1],
                            [L, S.bottom - 1],
                            [L, E.top + 1],
                          ];
                          break;
                        case "bottom":
                          R = [
                            [O, S.top + 1],
                            [O, E.bottom - 1],
                            [L, E.bottom - 1],
                            [L, S.top + 1],
                          ];
                          break;
                        case "left":
                          R = [
                            [S.right - 1, _],
                            [S.right - 1, I],
                            [E.left + 1, I],
                            [E.left + 1, _],
                          ];
                          break;
                        case "right":
                          R = [
                            [E.right - 1, _],
                            [E.right - 1, I],
                            [S.left + 1, I],
                            [S.left + 1, _],
                          ];
                      }
                      if (!ne([m, b], R)) {
                        if (a && !M) return h();
                        if (!x && o) {
                          let t = (function (e, t) {
                            let r = performance.now(),
                              n = r - s;
                            if (null === i || null === l || 0 === n)
                              return (i = e), (l = t), (s = r), null;
                            let o = e - i,
                              a = t - l;
                            return (
                              (i = e),
                              (l = t),
                              (s = r),
                              Math.sqrt(o * o + a * a) / n
                            );
                          })(e.clientX, e.clientY);
                          if (null !== t && t < 0.1) return h();
                        }
                        ne(
                          [m, b],
                          (function (e) {
                            let [t, n] = e;
                            switch (T) {
                              case "top": {
                                let e = [
                                  [
                                    S.left,
                                    C ? S.bottom - r : N ? S.bottom - r : S.top,
                                  ],
                                  [
                                    S.right,
                                    C
                                      ? N
                                        ? S.bottom - r
                                        : S.top
                                      : S.bottom - r,
                                  ],
                                ];
                                return [
                                  [
                                    N ? t + r / 2 : C ? t + 4 * r : t - 4 * r,
                                    n + r + 1,
                                  ],
                                  [
                                    N ? t - r / 2 : C ? t + 4 * r : t - 4 * r,
                                    n + r + 1,
                                  ],
                                  ...e,
                                ];
                              }
                              case "bottom": {
                                let e = [
                                  [
                                    S.left,
                                    C ? S.top + r : N ? S.top + r : S.bottom,
                                  ],
                                  [
                                    S.right,
                                    C ? (N ? S.top + r : S.bottom) : S.top + r,
                                  ],
                                ];
                                return [
                                  [
                                    N ? t + r / 2 : C ? t + 4 * r : t - 4 * r,
                                    n - r,
                                  ],
                                  [
                                    N ? t - r / 2 : C ? t + 4 * r : t - 4 * r,
                                    n - r,
                                  ],
                                  ...e,
                                ];
                              }
                              case "left":
                                return [
                                  [
                                    j ? S.right - r : P ? S.right - r : S.left,
                                    S.top,
                                  ],
                                  [
                                    j
                                      ? P
                                        ? S.right - r
                                        : S.left
                                      : S.right - r,
                                    S.bottom,
                                  ],
                                  [
                                    t + r + 1,
                                    P ? n + r / 2 : j ? n + 4 * r : n - 4 * r,
                                  ],
                                  [
                                    t + r + 1,
                                    P ? n - r / 2 : j ? n + 4 * r : n - 4 * r,
                                  ],
                                ];
                              case "right": {
                                let e = [
                                  [
                                    j ? S.left + r : P ? S.left + r : S.right,
                                    S.top,
                                  ],
                                  [
                                    j ? (P ? S.left + r : S.right) : S.left + r,
                                    S.bottom,
                                  ],
                                ];
                                return [
                                  [
                                    t - r,
                                    P ? n + r / 2 : j ? n + 4 * r : n - 4 * r,
                                  ],
                                  [
                                    t - r,
                                    P ? n - r / 2 : j ? n + 4 * r : n - 4 * r,
                                  ],
                                  ...e,
                                ];
                              }
                            }
                          })([n, d])
                        )
                          ? !a && o && (t = window.setTimeout(h, 40))
                          : h();
                      }
                    };
                  };
                return (d.__options = { blockPointerEvents: n }), d;
              })(),
            }),
            rQ(e),
            r8(e, { role: r }),
            ...n,
          ]),
        ni = (0, d.createContext)(void 0);
      function nl() {
        let e = (0, d.useContext)(ni);
        if (!e)
          throw Error(
            "useDropdownContext should be used within the DropdownContext provider!"
          );
        return e;
      }
      let ns = ({ className: e, theme: t = {}, ...r }) => {
          let { theme: n } = nl(),
            o = t.divider ?? n.floating.divider;
          return (0, s.jsx)("div", { className: (0, f.m6)(o, e), ...r });
        },
        nd = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = nl(),
            a = r.header ?? o.floating.header;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: (0, f.m6)(a, t),
                ...n,
                children: e,
              }),
              (0, s.jsx)(ns, {}),
            ],
          });
        },
        nc = { top: u.lVW, right: u.yoF, bottom: u.kzR, left: u.PSe },
        nu = ({
          refs: e,
          children: t,
          inline: r,
          theme: n,
          disabled: o,
          setButtonWidth: a,
          getReferenceProps: i,
          renderTrigger: l,
          ...c
        }) => {
          let u = e.reference,
            f = i();
          if (
            ((0, d.useEffect)(() => {
              u.current && a?.(u.current.clientWidth);
            }, [u, a]),
            l)
          ) {
            let t = l(n);
            return (0, d.cloneElement)(t, {
              ref: e.setReference,
              disabled: o,
              ...f,
              ...t.props,
            });
          }
          return r
            ? (0, s.jsx)("button", {
                type: "button",
                ref: e.setReference,
                className: n?.inlineWrapper,
                disabled: o,
                ...f,
                children: t,
              })
            : (0, s.jsx)(A, {
                ...c,
                disabled: o,
                type: "button",
                ref: e.setReference,
                ...f,
                children: t,
              });
        },
        nf = ({
          children: e,
          className: t,
          dismissOnClick: r = !0,
          theme: n = {},
          renderTrigger: o,
          ...a
        }) => {
          let [i, l] = (0, d.useState)(!1),
            [c, p] = (0, d.useState)(null),
            [g, m] = (0, d.useState)(null),
            [b, y] = (0, d.useState)(void 0),
            x = (0, d.useRef)([]),
            w = (0, d.useRef)([]),
            k = h(v().dropdown, n),
            E = a["data-testid"] || "flowbite-dropdown-target",
            {
              placement: S = a.inline ? "bottom-start" : "bottom",
              trigger: T = "click",
              label: C,
              inline: j,
              arrowIcon: M = !0,
              ...N
            } = a,
            P = (0, d.useCallback)((e) => {
              m(e), l(!1);
            }, []),
            O = (0, d.useCallback)(
              (e) => {
                i ? p(e) : P(e);
              },
              [i, P]
            ),
            {
              context: L,
              floatingStyles: I,
              refs: _,
            } = no({ open: i, setOpen: l, placement: S }),
            R = (function (e, t) {
              let {
                  open: r,
                  onOpenChange: n,
                  refs: o,
                  elements: { domReference: a, floating: i },
                } = e,
                {
                  listRef: l,
                  activeIndex: s,
                  onNavigate: c = () => {},
                  enabled: u = !0,
                  selectedIndex: f = null,
                  allowEscape: p = !1,
                  loop: g = !1,
                  nested: h = !1,
                  rtl: m = !1,
                  virtual: b = !1,
                  focusItemOnOpen: y = "auto",
                  focusItemOnHover: v = !0,
                  openOnArrowKeyDown: x = !0,
                  disabledIndices: w,
                  orientation: k = "vertical",
                  cols: E = 1,
                  scrollItemIntoView: S = !0,
                  virtualItemRef: T,
                } = t,
                C = rp(),
                j = rg(),
                M = t0(c),
                N = d.useRef(y),
                P = d.useRef(null != f ? f : -1),
                O = d.useRef(null),
                L = d.useRef(!0),
                I = d.useRef(M),
                _ = d.useRef(!!i),
                R = d.useRef(!1),
                A = d.useRef(!1),
                z = rm(w),
                D = rm(r),
                F = rm(S),
                [B, H] = d.useState(),
                [$, G] = d.useState(),
                W = t0(function (e, t, r) {
                  void 0 === r && (r = !1);
                  let n = e.current[t.current];
                  n &&
                    (b
                      ? (H(n.id),
                        null == j || j.events.emit("virtualfocus", n),
                        T && (T.current = n))
                      : rt(n, {
                          preventScroll: !0,
                          sync: !!(eH() && eF()) && (r2 || R.current),
                        }),
                    requestAnimationFrame(() => {
                      let e = F.current;
                      e &&
                        n &&
                        (r || !L.current) &&
                        (null == n.scrollIntoView ||
                          n.scrollIntoView(
                            "boolean" == typeof e
                              ? { block: "nearest", inline: "nearest" }
                              : e
                          ));
                    }));
                });
              rr(() => {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (r2 = !0), !1;
                  },
                });
              }, []),
                rr(() => {
                  u &&
                    (r && i
                      ? N.current && null != f && ((A.current = !0), M(f))
                      : _.current && ((P.current = -1), I.current(null)));
                }, [u, r, i, f, M]),
                rr(() => {
                  if (u && r && i) {
                    if (null == s) {
                      if (
                        ((R.current = !1),
                        null == f &&
                          (_.current && ((P.current = -1), W(l, P)),
                          !_.current &&
                            N.current &&
                            (null != O.current ||
                              (!0 === N.current && null == O.current))))
                      ) {
                        let e = 0,
                          t = () => {
                            null == l.current[0]
                              ? (e < 2 &&
                                  (e ? requestAnimationFrame : queueMicrotask)(
                                    t
                                  ),
                                e++)
                              : ((P.current =
                                  null == O.current || r7(O.current, k, m) || h
                                    ? t3(l, z.current)
                                    : t9(l, z.current)),
                                (O.current = null),
                                M(P.current));
                          };
                        t();
                      }
                    } else
                      t7(l, s) ||
                        ((P.current = s), W(l, P, A.current), (A.current = !1));
                  }
                }, [u, r, i, s, f, h, l, k, m, M, W, z]),
                rr(() => {
                  var e;
                  if (!u || i || !j || b || !_.current) return;
                  let t = j.nodesRef.current,
                    r =
                      null == (e = t.find((e) => e.id === C)) ||
                      null == (e = e.context)
                        ? void 0
                        : e.elements.floating,
                    n = e_(eG(i)),
                    o = t.some(
                      (e) => e.context && eR(e.context.elements.floating, n)
                    );
                  r && !o && L.current && r.focus({ preventScroll: !0 });
                }, [u, i, j, C, b]),
                rr(() => {
                  if (u && j && b && !C)
                    return (
                      j.events.on("virtualfocus", e),
                      () => {
                        j.events.off("virtualfocus", e);
                      }
                    );
                  function e(e) {
                    G(e.id), T && (T.current = e);
                  }
                }, [u, j, b, C, T]),
                rr(() => {
                  (I.current = M), (_.current = !!i);
                }),
                rr(() => {
                  r || (O.current = null);
                }, [r]);
              let V = null != s,
                Y = d.useMemo(() => {
                  function e(e) {
                    if (!r) return;
                    let t = l.current.indexOf(e);
                    -1 !== t && M(t);
                  }
                  return {
                    onFocus(t) {
                      let { currentTarget: r } = t;
                      e(r);
                    },
                    onClick: (e) => {
                      let { currentTarget: t } = e;
                      return t.focus({ preventScroll: !0 });
                    },
                    ...(v && {
                      onMouseMove(t) {
                        let { currentTarget: r } = t;
                        e(r);
                      },
                      onPointerLeave(e) {
                        let { pointerType: t } = e;
                        L.current &&
                          "touch" !== t &&
                          ((P.current = -1),
                          W(l, P),
                          M(null),
                          b || rt(o.floating.current, { preventScroll: !0 }));
                      },
                    }),
                  };
                }, [r, o, W, v, l, M, b]);
              return d.useMemo(() => {
                if (!u) return {};
                let e = z.current;
                function t(t) {
                  if (
                    ((L.current = !1),
                    (R.current = !0),
                    !D.current && t.currentTarget === o.floating.current)
                  )
                    return;
                  if (h && r3(t.key, k, m)) {
                    eq(t),
                      n(!1, t.nativeEvent, "list-navigation"),
                      eS(a) && !b && a.focus();
                    return;
                  }
                  let i = P.current,
                    s = t3(l, e),
                    d = t9(l, e);
                  if (
                    ("Home" === t.key && (eq(t), (P.current = s), M(P.current)),
                    "End" === t.key && (eq(t), (P.current = d), M(P.current)),
                    (!(E > 1) ||
                      ((P.current = (function (e, t) {
                        let {
                            event: r,
                            orientation: n,
                            loop: o,
                            cols: a,
                            disabledIndices: i,
                            minIndex: l,
                            maxIndex: s,
                            prevIndex: d,
                            stopEvent: c = !1,
                          } = t,
                          u = d;
                        if (r.key === t1) {
                          if ((c && eq(r), -1 === d)) u = s;
                          else if (
                            ((u = t8(e, {
                              startingIndex: u,
                              amount: a,
                              decrement: !0,
                              disabledIndices: i,
                            })),
                            o && (d - a < l || u < 0))
                          ) {
                            let e = d % a,
                              t = s % a,
                              r = s - (t - e);
                            u = t === e ? s : t > e ? r : r - a;
                          }
                          t7(e, u) && (u = d);
                        }
                        if (
                          (r.key === t5 &&
                            (c && eq(r),
                            -1 === d
                              ? (u = l)
                              : ((u = t8(e, {
                                  startingIndex: d,
                                  amount: a,
                                  disabledIndices: i,
                                })),
                                o &&
                                  d + a > s &&
                                  (u = t8(e, {
                                    startingIndex: (d % a) - a,
                                    amount: a,
                                    disabledIndices: i,
                                  }))),
                            t7(e, u) && (u = d)),
                          "both" === n)
                        ) {
                          let t = eJ(d / a);
                          r.key === t6 &&
                            (c && eq(r),
                            d % a != a - 1
                              ? ((u = t8(e, {
                                  startingIndex: d,
                                  disabledIndices: i,
                                })),
                                o &&
                                  t4(u, a, t) &&
                                  (u = t8(e, {
                                    startingIndex: d - (d % a) - 1,
                                    disabledIndices: i,
                                  })))
                              : o &&
                                (u = t8(e, {
                                  startingIndex: d - (d % a) - 1,
                                  disabledIndices: i,
                                })),
                            t4(u, a, t) && (u = d)),
                            r.key === t2 &&
                              (c && eq(r),
                              d % a != 0
                                ? ((u = t8(e, {
                                    startingIndex: d,
                                    disabledIndices: i,
                                    decrement: !0,
                                  })),
                                  o &&
                                    t4(u, a, t) &&
                                    (u = t8(e, {
                                      startingIndex: d + (a - (d % a)),
                                      decrement: !0,
                                      disabledIndices: i,
                                    })))
                                : o &&
                                  (u = t8(e, {
                                    startingIndex: d + (a - (d % a)),
                                    decrement: !0,
                                    disabledIndices: i,
                                  })),
                              t4(u, a, t) && (u = d));
                          let n = eJ(s / a) === t;
                          t7(e, u) &&
                            (u =
                              o && n
                                ? r.key === t2
                                  ? s
                                  : t8(e, {
                                      startingIndex: d - (d % a) - 1,
                                      disabledIndices: i,
                                    })
                                : d);
                        }
                        return u;
                      })(l, {
                        event: t,
                        orientation: k,
                        loop: g,
                        cols: E,
                        disabledIndices: e,
                        minIndex: s,
                        maxIndex: d,
                        prevIndex: P.current,
                        stopEvent: !0,
                      })),
                      M(P.current),
                      "both" !== k)) &&
                      r4(t.key, k))
                  ) {
                    if (
                      (eq(t),
                      r &&
                        !b &&
                        e_(t.currentTarget.ownerDocument) === t.currentTarget)
                    ) {
                      (P.current = r7(t.key, k, m) ? s : d), M(P.current);
                      return;
                    }
                    r7(t.key, k, m)
                      ? g
                        ? (P.current =
                            i >= d
                              ? p && i !== l.current.length
                                ? -1
                                : s
                              : t8(l, { startingIndex: i, disabledIndices: e }))
                        : (P.current = Math.min(
                            d,
                            t8(l, { startingIndex: i, disabledIndices: e })
                          ))
                      : g
                      ? (P.current =
                          i <= s
                            ? p && -1 !== i
                              ? l.current.length
                              : d
                            : t8(l, {
                                startingIndex: i,
                                decrement: !0,
                                disabledIndices: e,
                              }))
                      : (P.current = Math.max(
                          s,
                          t8(l, {
                            startingIndex: i,
                            decrement: !0,
                            disabledIndices: e,
                          })
                        )),
                      t7(l, P.current) ? M(null) : M(P.current);
                  }
                }
                function i(e) {
                  "auto" === y && ez(e.nativeEvent) && (N.current = !0);
                }
                let s = b && r && V && { "aria-activedescendant": $ || B },
                  d = l.current.find((e) => (null == e ? void 0 : e.id) === B);
                return {
                  reference: {
                    ...s,
                    onKeyDown(o) {
                      var a, i, s, c, u, p;
                      L.current = !1;
                      let g = 0 === o.key.indexOf("Arrow"),
                        y =
                          ((a = o.key),
                          r6(k, m ? a === t2 : a === t6, a === t5)),
                        v = r3(o.key, k, m),
                        w = r4(o.key, k),
                        E =
                          (h ? y : w) ||
                          "Enter" === o.key ||
                          "" === o.key.trim();
                      if (b && r) {
                        let e, r;
                        let n =
                            null == j
                              ? void 0
                              : j.nodesRef.current.find(
                                  (e) => null == e.parentId
                                ),
                          a =
                            j && n
                              ? ((i = j.nodesRef.current),
                                (s = n.id),
                                (r = -1),
                                !(function t(n, o) {
                                  o > r && ((e = n), (r = o)),
                                    rv(i, n).forEach((e) => {
                                      t(e.id, o + 1);
                                    });
                                })(s, 0),
                                i.find((t) => t.id === e))
                              : null;
                        if (g && a && T) {
                          let e = new KeyboardEvent("keydown", {
                            key: o.key,
                            bubbles: !0,
                          });
                          if (y || v) {
                            let t =
                                (null == (c = a.context)
                                  ? void 0
                                  : c.elements.domReference) ===
                                o.currentTarget,
                              r =
                                v && !t
                                  ? null == (u = a.context)
                                    ? void 0
                                    : u.elements.domReference
                                  : y
                                  ? d
                                  : null;
                            r && (eq(o), r.dispatchEvent(e), G(void 0));
                          }
                          if (
                            w &&
                            a.context &&
                            a.context.open &&
                            a.parentId &&
                            o.currentTarget !== a.context.elements.domReference
                          ) {
                            eq(o),
                              null == (p = a.context.elements.domReference) ||
                                p.dispatchEvent(e);
                            return;
                          }
                        }
                        return t(o);
                      }
                      if (r || x || !g) {
                        if ((E && (O.current = h && w ? null : o.key), h)) {
                          y &&
                            (eq(o),
                            r
                              ? ((P.current = t3(l, e)), M(P.current))
                              : n(!0, o.nativeEvent, "list-navigation"));
                          return;
                        }
                        w &&
                          (null != f && (P.current = f),
                          eq(o),
                          !r && x
                            ? n(!0, o.nativeEvent, "list-navigation")
                            : t(o),
                          r && M(P.current));
                      }
                    },
                    onFocus() {
                      r && M(null);
                    },
                    onPointerDown: function (e) {
                      (N.current = y),
                        "auto" === y && eD(e.nativeEvent) && (N.current = !0);
                    },
                    onMouseDown: i,
                    onClick: i,
                  },
                  floating: {
                    "aria-orientation": "both" === k ? void 0 : k,
                    ...(!eX(a) && s),
                    onKeyDown: t,
                    onPointerMove() {
                      L.current = !0;
                    },
                  },
                  item: Y,
                };
              }, [
                a,
                o,
                B,
                $,
                z,
                D,
                l,
                u,
                k,
                m,
                b,
                r,
                V,
                h,
                f,
                x,
                p,
                E,
                g,
                y,
                M,
                n,
                Y,
                j,
                T,
              ]);
            })(L, {
              listRef: x,
              activeIndex: c,
              selectedIndex: g,
              onNavigate: p,
            }),
            A = (function (e, t) {
              var r;
              let { open: n, dataRef: o } = e,
                {
                  listRef: a,
                  activeIndex: i,
                  onMatch: l,
                  onTypingChange: s,
                  enabled: c = !0,
                  findMatch: u = null,
                  resetMs: f = 750,
                  ignoreKeys: p = [],
                  selectedIndex: g = null,
                } = t,
                h = d.useRef(),
                m = d.useRef(""),
                b = d.useRef(null != (r = null != g ? g : i) ? r : -1),
                y = d.useRef(null),
                v = t0(l),
                x = t0(s),
                w = rm(u),
                k = rm(p);
              return (
                rr(() => {
                  n &&
                    (clearTimeout(h.current),
                    (y.current = null),
                    (m.current = ""));
                }, [n]),
                rr(() => {
                  if (n && "" === m.current) {
                    var e;
                    b.current = null != (e = null != g ? g : i) ? e : -1;
                  }
                }, [n, g, i]),
                d.useMemo(() => {
                  if (!c) return {};
                  function e(e) {
                    e
                      ? o.current.typing || ((o.current.typing = e), x(e))
                      : o.current.typing && ((o.current.typing = e), x(e));
                  }
                  function t(e, t, r) {
                    let n = w.current
                      ? w.current(t, r)
                      : t.find(
                          (e) =>
                            (null == e
                              ? void 0
                              : e
                                  .toLocaleLowerCase()
                                  .indexOf(r.toLocaleLowerCase())) === 0
                        );
                    return n ? e.indexOf(n) : -1;
                  }
                  function r(r) {
                    let o = a.current;
                    if (
                      (m.current.length > 0 &&
                        " " !== m.current[0] &&
                        (-1 === t(o, o, m.current)
                          ? e(!1)
                          : " " === r.key && eq(r)),
                      null == o ||
                        k.current.includes(r.key) ||
                        1 !== r.key.length ||
                        r.ctrlKey ||
                        r.metaKey ||
                        r.altKey)
                    )
                      return;
                    n && " " !== r.key && (eq(r), e(!0)),
                      o.every((e) => {
                        var t, r;
                        return (
                          !e ||
                          (null == (t = e[0])
                            ? void 0
                            : t.toLocaleLowerCase()) !==
                            (null == (r = e[1])
                              ? void 0
                              : r.toLocaleLowerCase())
                        );
                      }) &&
                        m.current === r.key &&
                        ((m.current = ""), (b.current = y.current)),
                      (m.current += r.key),
                      clearTimeout(h.current),
                      (h.current = setTimeout(() => {
                        (m.current = ""), (b.current = y.current), e(!1);
                      }, f));
                    let i = b.current,
                      l = t(
                        o,
                        [...o.slice((i || 0) + 1), ...o.slice(0, (i || 0) + 1)],
                        m.current
                      );
                    -1 !== l
                      ? (v(l), (y.current = l))
                      : " " !== r.key && ((m.current = ""), e(!1));
                  }
                  return {
                    reference: { onKeyDown: r },
                    floating: {
                      onKeyDown: r,
                      onKeyUp(t) {
                        " " === t.key && e(!1);
                      },
                    },
                  };
                }, [c, n, o, a, f, k, w, v, x])
              );
            })(L, { listRef: w, activeIndex: c, selectedIndex: g, onMatch: O }),
            {
              getReferenceProps: z,
              getFloatingProps: D,
              getItemProps: F,
            } = na({
              context: L,
              role: "menu",
              trigger: T,
              interactions: [R, A],
            }),
            B = (0, d.useMemo)(() => {
              let [e] = S.split("-");
              return nc[e] ?? u.kzR;
            }, [S]);
          return (0, s.jsxs)(ni.Provider, {
            value: {
              theme: k,
              activeIndex: c,
              dismissOnClick: r,
              getItemProps: F,
              handleSelect: P,
            },
            children: [
              (0, s.jsxs)(nu, {
                ...N,
                refs: _,
                inline: j,
                theme: k,
                "data-testid": E,
                className: (0, f.m6)(k.floating.target, N.className),
                setButtonWidth: y,
                getReferenceProps: z,
                renderTrigger: o,
                children: [C, M && (0, s.jsx)(B, { className: k.arrowIcon })],
              }),
              i &&
                (0, s.jsx)(rG, {
                  context: L,
                  modal: !1,
                  children: (0, s.jsx)("div", {
                    ref: _.setFloating,
                    style: { ...I, minWidth: b },
                    "data-testid": "flowbite-dropdown",
                    "aria-expanded": i,
                    ...D({
                      className: (0, f.m6)(
                        k.floating.base,
                        k.floating.animation,
                        "duration-100",
                        !i && k.floating.hidden,
                        k.floating.style.auto,
                        t
                      ),
                    }),
                    children: (0, s.jsx)(ra, {
                      elementsRef: x,
                      labelsRef: w,
                      children: (0, s.jsx)("ul", {
                        className: k.content,
                        tabIndex: -1,
                        children: e,
                      }),
                    }),
                  }),
                }),
            ],
          });
        };
      (nf.displayName = "Dropdown"),
        (nd.displayName = "Dropdown.Header"),
        (ns.displayName = "Dropdown.Divider"),
        Object.assign(nf, {
          Item: ({
            children: e,
            className: t,
            icon: r,
            onClick: n,
            theme: o = {},
            ...a
          }) => {
            let { ref: i, index: l } = (function (e) {
                let { label: t } = void 0 === e ? {} : e,
                  [r, n] = d.useState(null),
                  o = d.useRef(null),
                  {
                    register: a,
                    unregister: i,
                    map: l,
                    elementsRef: s,
                    labelsRef: c,
                  } = d.useContext(ro),
                  u = d.useCallback(
                    (e) => {
                      if (
                        ((o.current = e), null !== r && ((s.current[r] = e), c))
                      ) {
                        var n;
                        let o = void 0 !== t;
                        c.current[r] = o
                          ? t
                          : null != (n = null == e ? void 0 : e.textContent)
                          ? n
                          : null;
                      }
                    },
                    [r, s, c, t]
                  );
                return (
                  rr(() => {
                    let e = o.current;
                    if (e)
                      return (
                        a(e),
                        () => {
                          i(e);
                        }
                      );
                  }, [a, i]),
                  rr(() => {
                    let e = o.current ? l.get(o.current) : null;
                    null != e && n(e);
                  }, [l]),
                  d.useMemo(
                    () => ({ ref: u, index: null == r ? -1 : r }),
                    [r, u]
                  )
                );
              })({ label: "string" == typeof e ? e : void 0 }),
              {
                theme: c,
                activeIndex: u,
                dismissOnClick: p,
                getItemProps: g,
                handleSelect: m,
              } = nl(),
              b = h(c.floating.item, o);
            return (0, s.jsx)("li", {
              role: "menuitem",
              className: b.container,
              children: (0, s.jsxs)(I, {
                ref: i,
                className: (0, f.m6)(b.base, t),
                ...a,
                ...g({
                  onClick: () => {
                    n && n(), p && m(null);
                  },
                }),
                tabIndex: u === l ? 0 : -1,
                children: [r && (0, s.jsx)(r, { className: b.icon }), e],
              }),
            });
          },
          Header: nd,
          Divider: ns,
        }),
        ((0, d.forwardRef)(
          (
            {
              className: e,
              color: t = "gray",
              helperText: r,
              sizing: n = "md",
              theme: o = {},
              ...a
            },
            i
          ) => {
            let l = h(v().fileInput, o);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  className: (0, f.m6)(l.root.base, e),
                  children: (0, s.jsx)("div", {
                    className: l.field.base,
                    children: (0, s.jsx)("input", {
                      className: (0, f.m6)(
                        l.field.input.base,
                        l.field.input.colors[t],
                        l.field.input.sizes[n]
                      ),
                      ...a,
                      type: "file",
                      ref: i,
                    }),
                  }),
                }),
                r && (0, s.jsx)(el, { color: t, children: r }),
              ],
            });
          }
        ).displayName = "FileInput"),
        ((0, d.forwardRef)(
          (
            {
              label: e,
              helperText: t,
              color: r = "default",
              sizing: n = "md",
              variant: o,
              disabled: a = !1,
              theme: i = {},
              className: l,
              ...c
            },
            u
          ) => {
            let p = (0, d.useId)(),
              g = h(v().floatingLabel, i);
            return (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: (0, f.m6)(
                    "relative",
                    "standard" === o ? "z-0" : ""
                  ),
                  children: [
                    (0, s.jsx)("input", {
                      type: "text",
                      id: c.id ? c.id : "floatingLabel" + p,
                      "aria-describedby": "outlined_success_help",
                      className: (0, f.m6)(g.input[r][o][n], l),
                      placeholder: " ",
                      "data-testid": "floating-label",
                      disabled: a,
                      ...c,
                      ref: u,
                    }),
                    (0, s.jsx)("label", {
                      htmlFor: c.id ? c.id : "floatingLabel" + p,
                      className: (0, f.m6)(g.label[r][o][n], l),
                      children: e,
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  id: "outlined_helper_text" + p,
                  className: (0, f.m6)(g.helperText[r], l),
                  children: t,
                }),
              ],
            });
          }
        ).displayName = "FloatingLabel");
      let np = ({
          alt: e,
          className: t,
          children: r,
          href: n,
          name: o,
          src: a,
          theme: i = {},
          ...l
        }) => {
          let d = h(v().footer.brand, i);
          return (0, s.jsx)("div", {
            children: n
              ? (0, s.jsxs)("a", {
                  "data-testid": "flowbite-footer-brand",
                  href: n,
                  className: (0, f.m6)(d.base, t),
                  ...l,
                  children: [
                    (0, s.jsx)("img", { alt: e, src: a, className: d.img }),
                    (0, s.jsx)("span", {
                      "data-testid": "flowbite-footer-brand-span",
                      className: d.span,
                      children: o,
                    }),
                    r,
                  ],
                })
              : (0, s.jsx)("img", {
                  alt: e,
                  "data-testid": "flowbite-footer-brand",
                  src: a,
                  className: (0, f.m6)(d.img, t),
                  ...l,
                }),
          });
        },
        ng = ({
          by: e,
          className: t,
          href: r,
          theme: n = {},
          year: o,
          ...a
        }) => {
          let i = h(v().footer.copyright, n);
          return (0, s.jsxs)("div", {
            "data-testid": "flowbite-footer-copyright",
            className: (0, f.m6)(i.base, t),
            ...a,
            children: [
              "\xa9 ",
              o,
              r
                ? (0, s.jsx)("a", { href: r, className: i.href, children: e })
                : (0, s.jsx)("span", {
                    "data-testid": "flowbite-footer-copyright-span",
                    className: i.span,
                    children: e,
                  }),
            ],
          });
        },
        nh = ({ className: e, theme: t = {}, ...r }) => {
          let n = h(v().footer.divider, t);
          return (0, s.jsx)("hr", {
            "data-testid": "footer-divider",
            className: (0, f.m6)(n.base, e),
            ...r,
          });
        },
        nm = ({
          ariaLabel: e,
          className: t,
          href: r,
          icon: n,
          theme: o = {},
          ...a
        }) => {
          let i = h(v().footer.icon, o);
          return (0, s.jsx)("div", {
            children: r
              ? (0, s.jsx)("a", {
                  "aria-label": e,
                  "data-testid": "flowbite-footer-icon",
                  href: r,
                  className: (0, f.m6)(i.base, t),
                  ...a,
                  children: (0, s.jsx)(n, { className: i.size }),
                })
              : (0, s.jsx)(n, {
                  "data-testid": "flowbite-footer-icon",
                  className: i.size,
                  ...a,
                }),
          });
        },
        nb = ({
          as: e = "a",
          children: t,
          className: r,
          href: n,
          theme: o = {},
          ...a
        }) => {
          let i = h(v().footer.groupLink.link, o);
          return (0, s.jsx)("li", {
            className: (0, f.m6)(i.base, r),
            children: (0, s.jsx)(e, {
              href: n,
              className: i.href,
              ...a,
              children: t,
            }),
          });
        },
        ny = ({
          children: e,
          className: t,
          col: r = !1,
          theme: n = {},
          ...o
        }) => {
          let a = h(v().footer.groupLink, n);
          return (0, s.jsx)("ul", {
            "data-testid": "footer-groupLink",
            className: (0, f.m6)(a.base, r && a.col, t),
            ...o,
            children: e,
          });
        },
        nv = ({
          as: e = "h2",
          className: t,
          theme: r = {},
          title: n,
          ...o
        }) => {
          let a = h(v().footer.title, r);
          return (0, s.jsx)(e, {
            "data-testid": "flowbite-footer-title",
            className: (0, f.m6)(a.base, t),
            ...o,
            children: n,
          });
        },
        nx = ({
          bgDark: e = !1,
          children: t,
          className: r,
          container: n = !1,
          theme: o = {},
          ...a
        }) => {
          let i = h(v().footer, o);
          return (0, s.jsx)("footer", {
            "data-testid": "flowbite-footer",
            className: (0, f.m6)(
              i.root.base,
              e && i.root.bgDark,
              n && i.root.container,
              r
            ),
            ...a,
            children: t,
          });
        };
      (nx.displayName = "Footer"),
        (ng.displayName = "Footer.Copyright"),
        (nb.displayName = "Footer.Link"),
        (np.displayName = "Footer.Brand"),
        (ny.displayName = "Footer.LinkGroup"),
        (nm.displayName = "Footer.Icon"),
        (nv.displayName = "Footer.Title"),
        (nh.displayName = "Footer.Divider"),
        Object.assign(nx, {
          Copyright: ng,
          Link: nb,
          LinkGroup: ny,
          Brand: np,
          Icon: nm,
          Title: nv,
          Divider: nh,
        });
      let nw = ({ children: e, className: t, theme: r = {} }) => {
          let n = h(v().listGroup.item, r);
          return (0, s.jsx)("li", {
            className: (0, f.m6)(n.base, t),
            children: e,
          });
        },
        nk = ({
          children: e,
          className: t,
          unstyled: r,
          nested: n,
          ordered: o,
          horizontal: a,
          theme: i = {},
          ...l
        }) => {
          let d = h(v().list, i);
          return (0, s.jsx)(o ? "ol" : "ul", {
            className: (0, f.m6)(
              d.root.base,
              d.root.ordered[o ? "on" : "off"],
              r && d.root.unstyled,
              n && d.root.nested,
              a && d.root.horizontal,
              t
            ),
            ...l,
            children: e,
          });
        };
      (nk.displayName = "List"),
        (nw.displayName = "List.Item"),
        Object.assign(nk, { Item: nw });
      let nE = ({
          active: e,
          children: t,
          className: r,
          href: n,
          icon: o,
          onClick: a,
          theme: i = {},
          disabled: l,
          ...d
        }) => {
          let c = h(v().listGroup.item, i),
            u = void 0 !== n;
          return (0, s.jsx)("li", {
            className: (0, f.m6)(c.base, r),
            children: (0, s.jsxs)(u ? "a" : "button", {
              href: n,
              onClick: a,
              type: u ? void 0 : "button",
              disabled: l,
              className: (0, f.m6)(
                c.link.active[e ? "on" : "off"],
                c.link.disabled[l ? "on" : "off"],
                c.link.base,
                c.link.href[u ? "on" : "off"]
              ),
              ...d,
              children: [
                o &&
                  (0, s.jsx)(o, {
                    "aria-hidden": !0,
                    "data-testid": "flowbite-list-group-item-icon",
                    className: c.link.icon,
                  }),
                t,
              ],
            }),
          });
        },
        nS = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let o = h(v().listGroup, r);
          return (0, s.jsx)("ul", {
            className: (0, f.m6)(o.root.base, t),
            ...n,
            children: e,
          });
        };
      (nS.displayName = "ListGroup"),
        (nE.displayName = "ListGroup.Item"),
        Object.assign(nS, { Item: nE });
      let nT = (0, d.createContext)(void 0);
      function nC() {
        let e = (0, d.useContext)(nT);
        if (!e)
          throw Error(
            "useModalContext should be used within the ModalContext provider!"
          );
        return e;
      }
      let nj = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o, popup: a } = nC(),
            i = h(o.body, r);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(i.base, a && [i.popup], t),
            ...n,
            children: e,
          });
        },
        nM = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o, popup: a } = nC(),
            i = h(o.footer, r);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(i.base, !a && i.popup, t),
            ...n,
            children: e,
          });
        },
        nN = ({
          as: e = "h3",
          children: t,
          className: r,
          theme: n = {},
          id: o,
          ...a
        }) => {
          let i = (0, d.useId)(),
            l = o || i,
            { theme: c, popup: p, onClose: g, setHeaderId: m } = nC(),
            b = h(c.header, n);
          return (
            (0, d.useLayoutEffect)(() => (m(l), () => m(void 0)), [l, m]),
            (0, s.jsxs)("div", {
              className: (0, f.m6)(b.base, p && b.popup, r),
              ...a,
              children: [
                (0, s.jsx)(e, { id: l, className: b.title, children: t }),
                (0, s.jsx)("button", {
                  "aria-label": "Close",
                  className: b.close.base,
                  type: "button",
                  onClick: g,
                  children: (0, s.jsx)(u.fMW, {
                    "aria-hidden": !0,
                    className: b.close.icon,
                  }),
                }),
              ],
            })
          );
        },
        nP = (0, d.forwardRef)(
          (
            {
              children: e,
              className: t,
              dismissible: r = !1,
              onClose: n,
              popup: o,
              position: a = "center",
              root: i,
              show: l,
              size: c = "2xl",
              theme: u = {},
              initialFocus: p,
              ...g
            },
            m
          ) => {
            var b;
            let [y, x] = (0, d.useState)(void 0),
              w = h(v().modal, u),
              { context: k } = rZ({ open: l, onOpenChange: () => n && n() }),
              E =
                ((b = [k.refs.setFloating, m]),
                d.useMemo(
                  () =>
                    b.every((e) => null == e)
                      ? null
                      : (e) => {
                          b.forEach((t) => {
                            "function" == typeof t
                              ? t(e)
                              : null != t && (t.current = e);
                          });
                        },
                  b
                )),
              { getFloatingProps: S } = r5([
                rq(k),
                rQ(k, { outsidePressEvent: "mousedown", enabled: r }),
                r8(k),
              ]);
            return l
              ? (0, s.jsx)(nT.Provider, {
                  value: { theme: w, popup: o, onClose: n, setHeaderId: x },
                  children: (0, s.jsx)(rz, {
                    root: i,
                    children: (0, s.jsx)(rV, {
                      lockScroll: !0,
                      "data-testid": "modal-overlay",
                      className: (0, f.m6)(
                        w.root.base,
                        w.root.positions[a],
                        l ? w.root.show.on : w.root.show.off,
                        t
                      ),
                      ...g,
                      children: (0, s.jsx)(rG, {
                        context: k,
                        initialFocus: p,
                        children: (0, s.jsx)("div", {
                          ref: E,
                          ...S(g),
                          "aria-labelledby": y,
                          className: (0, f.m6)(w.content.base, w.root.sizes[c]),
                          children: (0, s.jsx)("div", {
                            className: w.content.inner,
                            children: e,
                          }),
                        }),
                      }),
                    }),
                  }),
                })
              : null;
          }
        );
      (nP.displayName = "Modal"),
        (nN.displayName = "Modal.Header"),
        (nj.displayName = "Modal.Body"),
        (nM.displayName = "Modal.Footer"),
        Object.assign(nP, { Header: nN, Body: nj, Footer: nM });
      let nO = (0, d.createContext)(void 0);
      function nL() {
        let e = (0, d.useContext)(nO);
        if (!e)
          throw Error(
            "useNavBarContext should be used within the NavbarContext provider!"
          );
        return e;
      }
      let nI = ({
          as: e = "a",
          children: t,
          className: r,
          theme: n = {},
          ...o
        }) => {
          let { theme: a } = nL(),
            i = h(a.brand, n);
          return (0, s.jsx)(e, {
            className: (0, f.m6)(i.base, r),
            ...o,
            children: t,
          });
        },
        n_ = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o, isOpen: a } = nL(),
            i = h(o.collapse, r);
          return (0, s.jsx)("div", {
            "data-testid": "flowbite-navbar-collapse",
            className: (0, f.m6)(i.base, i.hidden[a ? "off" : "on"], t),
            ...n,
            children: (0, s.jsx)("ul", { className: i.list, children: e }),
          });
        },
        nR = ({
          active: e,
          as: t = "a",
          disabled: r,
          children: n,
          className: o,
          theme: a = {},
          ...i
        }) => {
          let { theme: l } = nL(),
            d = h(l.link, a);
          return (0, s.jsx)("li", {
            children: (0, s.jsx)(t, {
              className: (0, f.m6)(
                d.base,
                e && d.active.on,
                !e && !r && d.active.off,
                d.disabled[r ? "on" : "off"],
                o
              ),
              ...i,
              children: n,
            }),
          });
        };
      var nA = r(3159);
      let nz = ({ barIcon: e = nA.Fm7, className: t, theme: r = {}, ...n }) => {
          let { theme: o, isOpen: a, setIsOpen: i } = nL(),
            l = h(o.toggle, r);
          return (0, s.jsxs)("button", {
            "data-testid": "flowbite-navbar-toggle",
            onClick: () => {
              i(!a);
            },
            className: (0, f.m6)(l.base, t),
            ...n,
            children: [
              (0, s.jsx)("span", {
                className: "sr-only",
                children: "Open main menu",
              }),
              (0, s.jsx)(e, { "aria-hidden": !0, className: l.icon }),
            ],
          });
        },
        nD = ({
          border: e,
          children: t,
          className: r,
          fluid: n = !1,
          menuOpen: o,
          rounded: a,
          theme: i = {},
          ...l
        }) => {
          let [c, u] = (0, d.useState)(o),
            p = h(v().navbar, i);
          return (0, s.jsx)(nO.Provider, {
            value: { theme: p, isOpen: c, setIsOpen: u },
            children: (0, s.jsx)("nav", {
              className: (0, f.m6)(
                p.root.base,
                p.root.bordered[e ? "on" : "off"],
                p.root.rounded[a ? "on" : "off"],
                r
              ),
              ...l,
              children: (0, s.jsx)("div", {
                className: (0, f.m6)(
                  p.root.inner.base,
                  p.root.inner.fluid[n ? "on" : "off"]
                ),
                children: t,
              }),
            }),
          });
        };
      (nD.displayName = "Navbar"),
        (nI.displayName = "Navbar.Brand"),
        (n_.displayName = "Navbar.Collapse"),
        (nR.displayName = "Navbar.Link"),
        (nz.displayName = "Navbar.Toggle"),
        Object.assign(nD, { Brand: nI, Collapse: n_, Link: nR, Toggle: nz });
      let nF = ({
        active: e,
        children: t,
        className: r,
        onClick: n,
        theme: o = {},
        ...a
      }) => {
        let i = h(v().pagination, o);
        return (0, s.jsx)("button", {
          type: "button",
          className: (0, f.m6)(e && i.pages.selector.active, r),
          onClick: n,
          ...a,
          children: t,
        });
      };
      nF.displayName = "Pagination.Button";
      let nB = ({
        children: e,
        className: t,
        onClick: r,
        theme: n = {},
        disabled: o = !1,
        ...a
      }) => {
        let i = h(v().pagination, n);
        return (0, s.jsx)("button", {
          type: "button",
          className: (0, f.m6)(o && i.pages.selector.disabled, t),
          disabled: o,
          onClick: r,
          ...a,
          children: e,
        });
      };
      nB.displayName = "Pagination.Navigation";
      let nH = (e, t) =>
          e >= t ? [] : [...Array(t - e + 1).keys()].map((t) => t + e),
        n$ = ({
          className: e,
          currentPage: t,
          layout: r = "pagination",
          nextLabel: n = "Next",
          onPageChange: o,
          previousLabel: a = "Previous",
          renderPaginationButton: i = (e) => (0, s.jsx)(nF, { ...e }),
          showIcons: l = !1,
          theme: d = {},
          totalPages: c,
          ...p
        }) => {
          let g = h(v().pagination, d),
            m = Math.min(Math.max("pagination" === r ? t + 2 : t + 4, 5), c),
            b = Math.max(1, m - 4);
          return (0, s.jsxs)("nav", {
            className: (0, f.m6)(g.base, e),
            ...p,
            children: [
              "table" === r &&
                (0, s.jsxs)("div", {
                  className: g.layout.table.base,
                  children: [
                    "Showing ",
                    (0, s.jsx)("span", {
                      className: g.layout.table.span,
                      children: b,
                    }),
                    " to\xa0",
                    (0, s.jsx)("span", {
                      className: g.layout.table.span,
                      children: m,
                    }),
                    " of\xa0",
                    (0, s.jsx)("span", {
                      className: g.layout.table.span,
                      children: c,
                    }),
                    " Entries",
                  ],
                }),
              (0, s.jsxs)("ul", {
                className: g.pages.base,
                children: [
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)(nB, {
                      className: (0, f.m6)(
                        g.pages.previous.base,
                        l && g.pages.showIcon
                      ),
                      onClick: () => {
                        o(Math.max(t - 1, 1));
                      },
                      disabled: 1 === t,
                      children: [
                        l &&
                          (0, s.jsx)(u.DEl, {
                            "aria-hidden": !0,
                            className: g.pages.previous.icon,
                          }),
                        a,
                      ],
                    }),
                  }),
                  "pagination" === r &&
                    nH(b, m).map((e) =>
                      (0, s.jsx)(
                        "li",
                        {
                          "aria-current": e === t ? "page" : void 0,
                          children: i({
                            className: (0, f.m6)(
                              g.pages.selector.base,
                              t === e && g.pages.selector.active
                            ),
                            active: e === t,
                            onClick: () => o(e),
                            children: e,
                          }),
                        },
                        e
                      )
                    ),
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)(nB, {
                      className: (0, f.m6)(
                        g.pages.next.base,
                        l && g.pages.showIcon
                      ),
                      onClick: () => {
                        o(Math.min(t + 1, c));
                      },
                      disabled: t === c,
                      children: [
                        n,
                        l &&
                          (0, s.jsx)(u.MOd, {
                            "aria-hidden": !0,
                            className: g.pages.next.icon,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      (n$.displayName = "Pagination"),
        Object.assign(n$, { Button: nF }),
        ((0, d.forwardRef)(({ className: e, theme: t = {}, ...r }, n) => {
          let o = h(v().radio, t);
          return (0, s.jsx)("input", {
            ref: n,
            type: "radio",
            className: (0, f.m6)(o.root.base, e),
            ...r,
          });
        }).displayName = "Radio"),
        ((0, d.forwardRef)(
          ({ className: e, sizing: t = "md", theme: r = {}, ...n }, o) => {
            let a = h(v().rangeSlider, r);
            return (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)("div", {
                "data-testid": "flowbite-range-slider",
                className: (0, f.m6)(a.root.base, e),
                children: (0, s.jsx)("div", {
                  className: a.field.base,
                  children: (0, s.jsx)("input", {
                    ref: o,
                    type: "range",
                    className: (0, f.m6)(
                      a.field.input.base,
                      a.field.input.sizes[t]
                    ),
                    ...n,
                  }),
                }),
              }),
            });
          }
        ).displayName = "RangeSlider");
      let nG = ({
          children: e,
          className: t,
          percentFilled: r = 0,
          theme: n = {},
          ...o
        }) => {
          let a = h(v().ratingAdvanced, n);
          return (0, s.jsxs)("div", {
            className: (0, f.m6)(a.base, t),
            ...o,
            children: [
              (0, s.jsx)("span", { className: a.label, children: e }),
              (0, s.jsx)("div", {
                className: a.progress.base,
                children: (0, s.jsx)("div", {
                  className: a.progress.fill,
                  "data-testid": "flowbite-rating-fill",
                  style: { width: `${r}%` },
                }),
              }),
              (0, s.jsx)("span", {
                className: a.progress.label,
                children: `${r}%`,
              }),
            ],
          });
        },
        nW = (0, d.createContext)(void 0),
        nV = ({
          className: e,
          filled: t = !0,
          starIcon: r = u.xiv,
          theme: n = {},
          ...o
        }) => {
          let { theme: a, size: i = "sm" } = (function () {
              let e = (0, d.useContext)(nW);
              if (!e)
                throw Error(
                  "useRatingContext should be used within the RatingContext provider!"
                );
              return e;
            })(),
            l = h(a.star, n);
          return (0, s.jsx)(r, {
            "data-testid": "flowbite-rating-star",
            className: (0, f.m6)(l.sizes[i], l[t ? "filled" : "empty"], e),
            ...o,
          });
        },
        nY = ({
          children: e,
          className: t,
          size: r = "sm",
          theme: n = {},
          ...o
        }) => {
          let a = h(v().rating, n);
          return (0, s.jsx)(nW.Provider, {
            value: { theme: a, size: r },
            children: (0, s.jsx)("div", {
              className: (0, f.m6)(a.root.base, t),
              ...o,
              children: e,
            }),
          });
        };
      (nY.displayName = "Rating"),
        (nV.displayName = "Rating.Star"),
        (nG.displayName = "Rating.Advanced"),
        Object.assign(nY, { Star: nV, Advanced: nG }),
        ((0, d.forwardRef)(
          (
            {
              addon: e,
              children: t,
              className: r,
              color: n = "gray",
              helperText: o,
              icon: a,
              shadow: i,
              sizing: l = "md",
              theme: d = {},
              ...c
            },
            u
          ) => {
            let p = h(v().select, d);
            return (0, s.jsxs)("div", {
              className: (0, f.m6)(p.base, r),
              children: [
                e && (0, s.jsx)("span", { className: p.addon, children: e }),
                (0, s.jsxs)("div", {
                  className: p.field.base,
                  children: [
                    a &&
                      (0, s.jsx)("div", {
                        className: p.field.icon.base,
                        children: (0, s.jsx)(a, {
                          className: p.field.icon.svg,
                        }),
                      }),
                    (0, s.jsx)("select", {
                      className: (0, f.m6)(
                        p.field.select.base,
                        p.field.select.colors[n],
                        p.field.select.sizes[l],
                        p.field.select.withIcon[a ? "on" : "off"],
                        p.field.select.withAddon[e ? "on" : "off"],
                        p.field.select.withShadow[i ? "on" : "off"]
                      ),
                      ...c,
                      ref: u,
                      children: t,
                    }),
                    o && (0, s.jsx)(el, { color: n, children: o }),
                  ],
                }),
              ],
            });
          }
        ).displayName = "Select");
      let nq = (0, d.createContext)(void 0);
      function nX() {
        let e = (0, d.useContext)(nq);
        if (!e)
          throw Error(
            "useSidebarContext should be used within the SidebarContext provider!"
          );
        return e;
      }
      let nU = ({
        children: e,
        color: t = "info",
        className: r,
        theme: n = {},
        ...o
      }) => {
        let { theme: a, isCollapsed: i } = nX(),
          l = h(a.cta, n);
        return (0, s.jsx)("div", {
          "data-testid": "sidebar-cta",
          hidden: i,
          className: (0, f.m6)(l.base, l.color[t], r),
          ...o,
          children: e,
        });
      };
      nU.displayName = "Sidebar.CTA";
      let nK = ({
          animation: e = "duration-300",
          arrow: t = !0,
          children: r,
          className: n,
          content: o,
          placement: a = "top",
          style: i = "dark",
          theme: l,
          trigger: c = "hover",
          minWidth: u,
          ...p
        }) => {
          let g = (0, d.useRef)(null),
            [h, m] = (0, d.useState)(!1),
            b = no({ open: h, placement: a, arrowRef: g, setOpen: m }),
            {
              context: y,
              middlewareData: { arrow: { x: v, y: x } = {} },
              refs: w,
              strategy: k,
              update: E,
              x: S,
              y: T,
            } = b,
            C = (function (e, t) {
              void 0 === t && (t = {});
              let {
                  open: r,
                  onOpenChange: n,
                  events: o,
                  refs: a,
                  elements: { floating: i, domReference: l },
                } = e,
                { enabled: s = !0, visibleOnly: c = !0 } = t,
                u = d.useRef(!1),
                f = d.useRef(),
                p = d.useRef(!0);
              return (
                d.useEffect(() => {
                  if (!s) return;
                  let e = ex(l);
                  function t() {
                    !r && eS(l) && l === e_(eG(l)) && (u.current = !0);
                  }
                  function n() {
                    p.current = !0;
                  }
                  return (
                    e.addEventListener("blur", t),
                    e.addEventListener("keydown", n, !0),
                    () => {
                      e.removeEventListener("blur", t),
                        e.removeEventListener("keydown", n, !0);
                    }
                  );
                }, [i, l, r, s]),
                d.useEffect(() => {
                  if (s)
                    return (
                      o.on("openchange", e),
                      () => {
                        o.off("openchange", e);
                      }
                    );
                  function e(e) {
                    let { reason: t } = e;
                    ("reference-press" === t || "escape-key" === t) &&
                      (u.current = !0);
                  }
                }, [o, s]),
                d.useEffect(
                  () => () => {
                    clearTimeout(f.current);
                  },
                  []
                ),
                d.useMemo(
                  () =>
                    s
                      ? {
                          reference: {
                            onPointerDown(e) {
                              eD(e.nativeEvent) || (p.current = !1);
                            },
                            onMouseLeave() {
                              u.current = !1;
                            },
                            onFocus(e) {
                              if (u.current) return;
                              let t = eV(e.nativeEvent);
                              if (c && eE(t))
                                try {
                                  if (eF() && eH()) throw Error();
                                  if (!t.matches(":focus-visible")) return;
                                } catch (e) {
                                  if (!p.current && !eY(t)) return;
                                }
                              n(!0, e.nativeEvent, "focus");
                            },
                            onBlur(e) {
                              u.current = !1;
                              let t = e.relatedTarget,
                                r =
                                  eE(t) &&
                                  t.hasAttribute(rh("focus-guard")) &&
                                  "outside" === t.getAttribute("data-type");
                              f.current = window.setTimeout(() => {
                                let o = e_(l ? l.ownerDocument : document);
                                if (t || o !== l) {
                                  if (
                                    eR(a.floating.current, t) ||
                                    eR(l, t) ||
                                    r
                                  )
                                    return;
                                  n(!1, e.nativeEvent, "focus");
                                }
                              });
                            },
                          },
                        }
                      : {},
                  [s, c, l, a, n]
                )
              );
            })(y),
            { getFloatingProps: j, getReferenceProps: M } = na({
              context: y,
              role: "tooltip",
              trigger: c,
              interactions: [C],
            });
          return (
            (0, d.useEffect)(() => {
              if (w.reference.current && w.floating.current && h)
                return tw(w.reference.current, w.floating.current, E);
            }, [h, w.floating, w.reference, E]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  ref: w.setReference,
                  className: l.target,
                  "data-testid": "flowbite-tooltip-target",
                  ...M(),
                  children: r,
                }),
                (0, s.jsxs)("div", {
                  ref: w.setFloating,
                  "data-testid": "flowbite-tooltip",
                  ...j({
                    className: (0, f.m6)(
                      l.base,
                      e && `${l.animation} ${e}`,
                      !h && l.hidden,
                      l.style[i],
                      n
                    ),
                    style: {
                      position: k,
                      top: T ?? " ",
                      left: S ?? " ",
                      minWidth: u,
                    },
                    ...p,
                  }),
                  children: [
                    (0, s.jsx)("div", { className: l.content, children: o }),
                    t &&
                      (0, s.jsx)("div", {
                        className: (0, f.m6)(
                          l.arrow.base,
                          "dark" === i && l.arrow.style.dark,
                          "light" === i && l.arrow.style.light,
                          "auto" === i && l.arrow.style.auto
                        ),
                        "data-testid": "flowbite-tooltip-arrow",
                        ref: g,
                        style: {
                          top: x ?? " ",
                          left: v ?? " ",
                          right: " ",
                          bottom: " ",
                          [nn({ placement: b.placement })]: l.arrow.placement,
                        },
                        children: "\xa0",
                      }),
                  ],
                }),
              ],
            })
          );
        },
        nQ = ({
          animation: e = "duration-300",
          arrow: t = !0,
          children: r,
          className: n,
          content: o,
          placement: a = "top",
          style: i = "dark",
          theme: l = {},
          trigger: d = "hover",
          ...c
        }) => {
          let u = h(v().tooltip, l);
          return (0, s.jsx)(nK, {
            animation: e,
            arrow: t,
            content: o,
            placement: a,
            style: i,
            theme: u,
            trigger: d,
            className: n,
            ...c,
            children: r,
          });
        };
      nQ.displayName = "Tooltip";
      let nZ = (0, d.createContext)(void 0),
        nJ = ({
          children: e,
          className: t,
          icon: r,
          label: n,
          chevronIcon: o = u.kWQ,
          renderChevronIcon: a,
          open: i = !1,
          theme: l = {},
          ...c
        }) => {
          let p = (0, d.useId)(),
            [g, m] = (0, d.useState)(i),
            { theme: b, isCollapsed: y } = nX(),
            v = h(b.collapse, l);
          return (
            (0, d.useEffect)(() => m(i), [i]),
            (0, s.jsxs)(
              ({ children: e }) =>
                (0, s.jsx)("li", {
                  children:
                    y && !g
                      ? (0, s.jsx)(nQ, {
                          content: n,
                          placement: "right",
                          children: e,
                        })
                      : e,
                }),
              {
                children: [
                  (0, s.jsxs)("button", {
                    id: `flowbite-sidebar-collapse-${p}`,
                    onClick: () => m(!g),
                    title: n,
                    type: "button",
                    className: (0, f.m6)(v.button, t),
                    ...c,
                    children: [
                      r &&
                        (0, s.jsx)(r, {
                          "aria-hidden": !0,
                          "data-testid": "flowbite-sidebar-collapse-icon",
                          className: (0, f.m6)(
                            v.icon.base,
                            v.icon.open[g ? "on" : "off"]
                          ),
                        }),
                      y
                        ? (0, s.jsx)("span", {
                            className: "sr-only",
                            children: n,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("span", {
                                "data-testid":
                                  "flowbite-sidebar-collapse-label",
                                className: v.label.base,
                                children: n,
                              }),
                              a
                                ? a(v, g)
                                : (0, s.jsx)(o, {
                                    "aria-hidden": !0,
                                    className: (0, f.m6)(
                                      v.label.icon.base,
                                      v.label.icon.open[g ? "on" : "off"]
                                    ),
                                  }),
                            ],
                          }),
                    ],
                  }),
                  (0, s.jsx)("ul", {
                    "aria-labelledby": `flowbite-sidebar-collapse-${p}`,
                    hidden: !g,
                    className: v.list,
                    children: (0, s.jsx)(nZ.Provider, {
                      value: { isInsideCollapse: !0 },
                      children: e,
                    }),
                  }),
                ],
              }
            )
          );
        };
      nJ.displayName = "Sidebar.Collapse";
      let n0 = ({
          id: e,
          theme: t,
          isCollapsed: r,
          tooltipChildren: n,
          children: o,
          ...a
        }) =>
          (0, s.jsx)("li", {
            ...a,
            children: r
              ? (0, s.jsx)(nQ, {
                  content: (0, s.jsx)(n1, { id: e, theme: t, children: n }),
                  placement: "right",
                  children: o,
                })
              : o,
          }),
        n1 = ({ id: e, theme: t, children: r }) =>
          (0, s.jsx)("span", {
            "data-testid": "flowbite-sidebar-item-content",
            id: `flowbite-sidebar-item-${e}`,
            className: (0, f.m6)(t.content.base),
            children: r,
          }),
        n5 = (0, d.forwardRef)(
          (
            {
              active: e,
              as: t = "a",
              children: r,
              className: n,
              icon: o,
              label: a,
              labelColor: i = "info",
              theme: l = {},
              ...c
            },
            u
          ) => {
            let p = (0, d.useId)(),
              { theme: g, isCollapsed: m } = nX(),
              { isInsideCollapse: b } = (function () {
                let e = (0, d.useContext)(nZ);
                if (!e)
                  throw Error(
                    "useSidebarItemContext should be used within the SidebarItemContext provider!"
                  );
                return e;
              })(),
              y = h(g.item, l);
            return (0, s.jsx)(n0, {
              theme: y,
              className: y.listItem,
              id: p,
              isCollapsed: m,
              tooltipChildren: r,
              children: (0, s.jsxs)(t, {
                "aria-labelledby": `flowbite-sidebar-item-${p}`,
                ref: u,
                className: (0, f.m6)(
                  y.base,
                  e && y.active,
                  !m && b && y.collapsed?.insideCollapse,
                  n
                ),
                ...c,
                children: [
                  o &&
                    (0, s.jsx)(o, {
                      "aria-hidden": !0,
                      "data-testid": "flowbite-sidebar-item-icon",
                      className: (0, f.m6)(y.icon?.base, e && y.icon?.active),
                    }),
                  m &&
                    !o &&
                    (0, s.jsx)("span", {
                      className: y.collapsed?.noIcon,
                      children: r.charAt(0).toLocaleUpperCase() ?? "?",
                    }),
                  !m && (0, s.jsx)(n1, { id: p, theme: y, children: r }),
                  !m &&
                    a &&
                    (0, s.jsx)(P, {
                      color: i,
                      "data-testid": "flowbite-sidebar-label",
                      hidden: m,
                      className: y.label,
                      children: a,
                    }),
                ],
              }),
            });
          }
        );
      n5.displayName = "Sidebar.Item";
      let n2 = ({ children: e, className: t, theme: r = {}, ...n }) => {
        let { theme: o } = nX(),
          a = h(o.itemGroup, r);
        return (0, s.jsx)("ul", {
          "data-testid": "flowbite-sidebar-item-group",
          className: (0, f.m6)(a.base, t),
          ...n,
          children: (0, s.jsx)(nZ.Provider, {
            value: { isInsideCollapse: !1 },
            children: e,
          }),
        });
      };
      n2.displayName = "Sidebar.ItemGroup";
      let n6 = ({ children: e, className: t, theme: r = {}, ...n }) => {
        let { theme: o } = nX(),
          a = h(o.items, r);
        return (0, s.jsx)("div", {
          className: (0, f.m6)(a.base, t),
          "data-testid": "flowbite-sidebar-items",
          ...n,
          children: e,
        });
      };
      n6.displayName = "Sidebar.Items";
      let n4 = ({
        children: e,
        className: t,
        href: r,
        img: n,
        imgAlt: o = "",
        theme: a = {},
        ...i
      }) => {
        let l = (0, d.useId)(),
          { theme: c, isCollapsed: u } = nX(),
          p = h(c.logo, a);
        return (0, s.jsxs)("a", {
          "aria-labelledby": `flowbite-sidebar-logo-${l}`,
          href: r,
          className: (0, f.m6)(p.base, t),
          ...i,
          children: [
            (0, s.jsx)("img", { alt: o, src: n, className: p.img }),
            (0, s.jsx)("span", {
              className: p.collapsed[u ? "on" : "off"],
              id: `flowbite-sidebar-logo-${l}`,
              children: e,
            }),
          ],
        });
      };
      n4.displayName = "Sidebar.Logo";
      let n7 = ({
        children: e,
        as: t = "nav",
        collapseBehavior: r = "collapse",
        collapsed: n = !1,
        theme: o = {},
        className: a,
        ...i
      }) => {
        let l = h(v().sidebar, o);
        return (0, s.jsx)(nq.Provider, {
          value: { theme: l, isCollapsed: n },
          children: (0, s.jsx)(t, {
            "aria-label": "Sidebar",
            hidden: n && "hide" === r,
            className: (0, f.m6)(
              l.root.base,
              l.root.collapsed[n ? "on" : "off"],
              a
            ),
            ...i,
            children: (0, s.jsx)("div", {
              className: l.root.inner,
              children: e,
            }),
          }),
        });
      };
      (n7.displayName = "Sidebar"),
        Object.assign(n7, {
          Collapse: nJ,
          CTA: nU,
          Item: n5,
          Items: n6,
          ItemGroup: n2,
          Logo: n4,
        });
      let n3 = (0, d.createContext)(void 0),
        n9 = (0, d.createContext)(void 0);
      function n8() {
        let e = (0, d.useContext)(n9);
        if (!e)
          throw Error(
            "useTableContext should be used within the TableContext provider!"
          );
        return e;
      }
      let oe = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = n8(),
            a = h(o.body, r);
          return (0, s.jsx)(n3.Provider, {
            value: { theme: a },
            children: (0, s.jsx)("tbody", {
              className: (0, f.m6)(a.base, t),
              ...n,
              children: e,
            }),
          });
        },
        ot = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = (function () {
              let e = (0, d.useContext)(n3);
              if (!e)
                throw Error(
                  "useTableBodyContext should be used within the TableBodyContext provider!"
                );
              return e;
            })(),
            a = h(o.cell, r);
          return (0, s.jsx)("td", {
            className: (0, f.m6)(a.base, t),
            ...n,
            children: e,
          });
        },
        or = (0, d.createContext)(void 0),
        on = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = n8(),
            a = h(o.head, r);
          return (0, s.jsx)(or.Provider, {
            value: { theme: a },
            children: (0, s.jsx)("thead", {
              className: (0, f.m6)(a.base, t),
              ...n,
              children: (0, s.jsx)("tr", { children: e }),
            }),
          });
        },
        oo = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = (function () {
              let e = (0, d.useContext)(or);
              if (!e)
                throw Error(
                  "useTableHeadContext should be used within the TableHeadContext provider!"
                );
              return e;
            })(),
            a = h(o.cell, r);
          return (0, s.jsx)("th", {
            className: (0, f.m6)(a.base, t),
            ...n,
            children: e,
          });
        },
        oa = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o, hoverable: a, striped: i } = n8(),
            l = h(o.row, r);
          return (0, s.jsx)("tr", {
            "data-testid": "table-row-element",
            className: (0, f.m6)(l.base, i && l.striped, a && l.hovered, t),
            ...n,
            children: e,
          });
        },
        oi = ({
          children: e,
          className: t,
          striped: r,
          hoverable: n,
          theme: o = {},
          ...a
        }) => {
          let i = h(v().table, o);
          return (0, s.jsx)("div", {
            "data-testid": "table-element",
            className: (0, f.m6)(i.root.wrapper),
            children: (0, s.jsxs)(n9.Provider, {
              value: { theme: i, striped: r, hoverable: n },
              children: [
                (0, s.jsx)("div", { className: (0, f.m6)(i.root.shadow, t) }),
                (0, s.jsx)("table", {
                  className: (0, f.m6)(i.root.base, t),
                  ...a,
                  children: e,
                }),
              ],
            }),
          });
        };
      (oi.displayName = "Table"),
        (on.displayName = "Table.Head"),
        (oe.displayName = "Table.Body"),
        (oa.displayName = "Table.Row"),
        (ot.displayName = "Table.Cell"),
        (oo.displayName = "Table.HeadCell"),
        Object.assign(oi, {
          Head: on,
          Body: oe,
          Row: oa,
          Cell: ot,
          HeadCell: oo,
        });
      let ol = ({ children: e, className: t }) =>
        (0, s.jsx)("div", { className: t, children: e });
      ol.displayName = "Tabs.Item";
      let os = (0, d.forwardRef)(
        (
          {
            children: e,
            className: t,
            onActiveTabChange: r,
            style: n = "default",
            theme: o = {},
            ...a
          },
          i
        ) => {
          let l = h(v().tabs, o),
            c = (0, d.useId)(),
            u = (0, d.useMemo)(
              () => d.Children.map(d.Children.toArray(e), ({ props: e }) => e),
              [e]
            ),
            p = (0, d.useRef)([]),
            [g, m] = (0, d.useState)(
              Math.max(
                0,
                u.findIndex((e) => e.active)
              )
            ),
            [b, y] = (0, d.useState)(-1),
            x = (e) => {
              m(e), r && r(e);
            },
            w = ({ target: e }) => {
              x(e), y(e);
            },
            k = ({ event: e, target: t }) => {
              "ArrowLeft" === e.key && y(Math.max(0, b - 1)),
                "ArrowRight" === e.key && y(Math.min(u.length - 1, b + 1)),
                "Enter" === e.key && (x(t), y(t));
            },
            E = l.tablist.tabitem.styles[n],
            S = l.tabitemcontainer.styles[n];
          return (
            (0, d.useEffect)(() => {
              p.current[b]?.focus();
            }, [b]),
            (0, d.useImperativeHandle)(i, () => ({ setActiveTab: x })),
            (0, s.jsxs)("div", {
              className: (0, f.m6)(l.base, t),
              children: [
                (0, s.jsx)("div", {
                  "aria-label": "Tabs",
                  role: "tablist",
                  className: (0, f.m6)(l.tablist.base, l.tablist.styles[n], t),
                  ...a,
                  children: u.map((e, t) =>
                    (0, s.jsxs)(
                      "button",
                      {
                        type: "button",
                        "aria-controls": `${c}-tabpanel-${t}`,
                        "aria-selected": t === g,
                        className: (0, f.m6)(
                          l.tablist.tabitem.base,
                          E.base,
                          t === g && E.active.on,
                          t !== g && !e.disabled && E.active.off
                        ),
                        disabled: e.disabled,
                        id: `${c}-tab-${t}`,
                        onClick: () => w({ target: t }),
                        onKeyDown: (e) => k({ event: e, target: t }),
                        ref: (e) => (p.current[t] = e),
                        role: "tab",
                        tabIndex: t === b ? 0 : -1,
                        style: { zIndex: t === b ? 2 : 1 },
                        children: [
                          e.icon &&
                            (0, s.jsx)(e.icon, {
                              className: l.tablist.tabitem.icon,
                            }),
                          e.title,
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsx)("div", {
                  className: (0, f.m6)(l.tabitemcontainer.base, S),
                  children: u.map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        "aria-labelledby": `${c}-tab-${t}`,
                        className: l.tabpanel,
                        hidden: t !== g,
                        id: `${c}-tabpanel-${t}`,
                        role: "tabpanel",
                        tabIndex: 0,
                        children: e.children,
                      },
                      t
                    )
                  ),
                }),
              ],
            })
          );
        }
      );
      (os.displayName = "Tabs"),
        Object.assign(os, { Item: ol }),
        ((0, d.forwardRef)(
          (
            {
              className: e,
              color: t = "gray",
              helperText: r,
              shadow: n,
              theme: o = {},
              ...a
            },
            i
          ) => {
            let l = h(v().textarea, o);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("textarea", {
                  ref: i,
                  className: (0, f.m6)(
                    l.base,
                    l.colors[t],
                    l.withShadow[n ? "on" : "off"],
                    e
                  ),
                  ...a,
                }),
                r && (0, s.jsx)(el, { color: t, children: r }),
              ],
            });
          }
        ).displayName = "Textarea");
      let od = (0, d.createContext)(void 0);
      function oc() {
        let e = (0, d.useContext)(od);
        if (!e)
          throw Error(
            "useTimelineContentContext should be used within the TimelineContentContext provider!"
          );
        return e;
      }
      let ou = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = oc(),
            a = h(o.body, r);
          return (0, s.jsx)("div", {
            className: (0, f.m6)(a.base, t),
            ...n,
            children: e,
          });
        },
        of = (0, d.createContext)(void 0);
      function op() {
        let e = (0, d.useContext)(of);
        if (!e)
          throw Error(
            "useTimelineContext should be used within the TimelineContext provider!"
          );
        return e;
      }
      let og = (0, d.createContext)(void 0);
      function oh() {
        let e = (0, d.useContext)(og);
        if (!e)
          throw Error(
            "useTimelineItemContext should be used within the TimelineItemContext provider!"
          );
        return e;
      }
      let om = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { horizontal: o } = op(),
            { theme: a } = oh(),
            i = h(a.content, r);
          return (0, s.jsx)(od.Provider, {
            value: { theme: i },
            children: (0, s.jsx)("div", {
              "data-testid": "timeline-content",
              className: (0, f.m6)(o && i.root.base, t),
              ...n,
              children: e,
            }),
          });
        },
        ob = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o, horizontal: a } = op(),
            i = h(o.item, r);
          return (0, s.jsx)(og.Provider, {
            value: { theme: i },
            children: (0, s.jsx)("li", {
              "data-testid": "timeline-item",
              className: (0, f.m6)(
                a && i.root.horizontal,
                !a && i.root.vertical,
                t
              ),
              ...n,
              children: e,
            }),
          });
        },
        oy = ({ children: e, className: t, icon: r, theme: n = {}, ...o }) => {
          let { horizontal: a } = op(),
            { theme: i } = oh(),
            l = h(i.point, n);
          return (0, s.jsxs)("div", {
            "data-testid": "timeline-point",
            className: (0, f.m6)(a && l.horizontal, !a && l.vertical, t),
            ...o,
            children: [
              e,
              r
                ? (0, s.jsx)("span", {
                    className: (0, f.m6)(l.marker.icon.wrapper),
                    children: (0, s.jsx)(r, {
                      "aria-hidden": !0,
                      className: (0, f.m6)(l.marker.icon.base),
                    }),
                  })
                : (0, s.jsx)("div", {
                    className: (0, f.m6)(
                      a && l.marker.base.horizontal,
                      !a && l.marker.base.vertical
                    ),
                  }),
              a && (0, s.jsx)("div", { className: (0, f.m6)(l.line) }),
            ],
          });
        },
        ov = ({ children: e, className: t, theme: r = {}, ...n }) => {
          let { theme: o } = oc(),
            a = h(o.time, r);
          return (0, s.jsx)("time", {
            className: (0, f.m6)(a.base, t),
            ...n,
            children: e,
          });
        },
        ox = ({
          as: e = "h3",
          children: t,
          className: r,
          theme: n = {},
          ...o
        }) => {
          let { theme: a } = oc(),
            i = h(a.title, n);
          return (0, s.jsx)(e, {
            className: (0, f.m6)(i.base, r),
            ...o,
            children: t,
          });
        },
        ow = ({
          children: e,
          className: t,
          horizontal: r,
          theme: n = {},
          ...o
        }) => {
          let a = h(v().timeline, n);
          return (0, s.jsx)(of.Provider, {
            value: { theme: a, horizontal: r },
            children: (0, s.jsx)("ol", {
              "data-testid": "timeline-component",
              className: (0, f.m6)(
                r && a.root.direction.horizontal,
                !r && a.root.direction.vertical,
                t
              ),
              ...o,
              children: e,
            }),
          });
        };
      (ow.displayName = "Timeline"),
        (ob.displayName = "Timeline.Item"),
        (oy.displayName = "Timeline.Point"),
        (om.displayName = "Timeline.Content"),
        (ov.displayName = "Timeline.Time"),
        (ox.displayName = "Timeline.Title"),
        (ou.displayName = "Timeline.Body"),
        Object.assign(ow, {
          Item: ob,
          Point: oy,
          Content: om,
          Time: ov,
          Title: ox,
          Body: ou,
        });
      let ok = (0, d.createContext)(void 0),
        oE = ({
          className: e,
          onClick: t,
          theme: r = {},
          xIcon: n = u.apv,
          onDismiss: o,
          ...a
        }) => {
          let {
              theme: i,
              duration: l,
              isClosed: c,
              isRemoved: p,
              setIsClosed: g,
              setIsRemoved: m,
            } = (function () {
              let e = (0, d.useContext)(ok);
              if (!e)
                throw Error(
                  "useToastContext should be used within the ToastContext provider!"
                );
              return e;
            })(),
            b = h(i.toggle, r);
          return (0, s.jsx)("button", {
            "aria-label": "Close",
            onClick: (e) => {
              if ((t && t(e), o)) {
                o();
                return;
              }
              g(!c), setTimeout(() => m(!p), l);
            },
            type: "button",
            className: (0, f.m6)(b.base, e),
            ...a,
            children: (0, s.jsx)(n, { "aria-hidden": !0, className: b.icon }),
          });
        },
        oS = {
          75: "duration-75",
          100: "duration-100",
          150: "duration-150",
          200: "duration-200",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          1e3: "duration-1000",
        },
        oT = ({
          children: e,
          className: t,
          duration: r = 300,
          theme: n = {},
          ...o
        }) => {
          let [a, i] = (0, d.useState)(!1),
            [l, c] = (0, d.useState)(!1),
            u = h(v().toast, n);
          return l
            ? null
            : (0, s.jsx)(ok.Provider, {
                value: {
                  theme: u,
                  duration: r,
                  isClosed: a,
                  isRemoved: l,
                  setIsClosed: i,
                  setIsRemoved: c,
                },
                children: (0, s.jsx)("div", {
                  "data-testid": "flowbite-toast",
                  role: "alert",
                  className: (0, f.m6)(
                    u.root.base,
                    oS[r],
                    a && u.root.closed,
                    t
                  ),
                  ...o,
                  children: e,
                }),
              });
        };
      (oT.displayName = "Toast"),
        (oE.displayName = "Toast.Toggle"),
        Object.assign(oT, { Toggle: oE });
    },
    6978: function (e, t, r) {
      var n = "Expected a function",
        o = 0 / 0,
        a = /^\s+|\s+$/g,
        i = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        d = parseInt,
        c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        u = "object" == typeof self && self && self.Object === Object && self,
        f = c || u || Function("return this")(),
        p = Object.prototype.toString,
        g = Math.max,
        h = Math.min,
        m = function () {
          return f.Date.now();
        };
      function b(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == p.call(t))
        )
          return o;
        if (b(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = b(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(a, "");
        var n = l.test(e);
        return n || s.test(e) ? d(e.slice(2), n ? 2 : 8) : i.test(e) ? o : +e;
      }
      e.exports = function (e, t, r) {
        var o = !0,
          a = !0;
        if ("function" != typeof e) throw TypeError(n);
        return (
          b(r) &&
            ((o = "leading" in r ? !!r.leading : o),
            (a = "trailing" in r ? !!r.trailing : a)),
          (function (e, t, r) {
            var o,
              a,
              i,
              l,
              s,
              d,
              c = 0,
              u = !1,
              f = !1,
              p = !0;
            if ("function" != typeof e) throw TypeError(n);
            function v(t) {
              var r = o,
                n = a;
              return (o = a = void 0), (c = t), (l = e.apply(n, r));
            }
            function x(e) {
              var r = e - d,
                n = e - c;
              return void 0 === d || r >= t || r < 0 || (f && n >= i);
            }
            function w() {
              var e,
                r,
                n,
                o = m();
              if (x(o)) return k(o);
              s = setTimeout(
                w,
                ((e = o - d), (r = o - c), (n = t - e), f ? h(n, i - r) : n)
              );
            }
            function k(e) {
              return ((s = void 0), p && o) ? v(e) : ((o = a = void 0), l);
            }
            function E() {
              var e,
                r = m(),
                n = x(r);
              if (((o = arguments), (a = this), (d = r), n)) {
                if (void 0 === s)
                  return (c = e = d), (s = setTimeout(w, t)), u ? v(e) : l;
                if (f) return (s = setTimeout(w, t)), v(d);
              }
              return void 0 === s && (s = setTimeout(w, t)), l;
            }
            return (
              (t = y(t) || 0),
              b(r) &&
                ((u = !!r.leading),
                (i = (f = "maxWait" in r) ? g(y(r.maxWait) || 0, t) : i),
                (p = "trailing" in r ? !!r.trailing : p)),
              (E.cancel = function () {
                void 0 !== s && clearTimeout(s),
                  (c = 0),
                  (o = d = a = s = void 0);
              }),
              (E.flush = function () {
                return void 0 === s ? l : k(m());
              }),
              E
            );
          })(e, t, { leading: o, maxWait: t, trailing: a })
        );
      };
    },
    4930: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(1024);
      r(2265);
      let o = n._(r(4795));
      function a(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function i(e, t) {
        let r = o.default,
          n = {
            loading: (e) => {
              let { error: t, isLoading: r, pastDelay: n } = e;
              return null;
            },
          };
        "function" == typeof e && (n.loader = e), Object.assign(n, t);
        let i = n.loader;
        return r({
          ...n,
          loader: () =>
            null != i ? i().then(a) : Promise.resolve(a(() => null)),
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6005: function (e, t, r) {
      "use strict";
      function n(e) {
        let { children: t } = e;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NoSSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(6491);
    },
    4795: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(1024)._(r(2265)),
        o = r(6005),
        a = function (e) {
          let t = Object.assign({ loader: null, loading: null, ssr: !0 }, e);
          function r(e) {
            let r = t.loading,
              a = n.default.createElement(r, {
                isLoading: !0,
                pastDelay: !0,
                error: null,
              }),
              i = t.ssr ? n.default.Fragment : o.NoSSR,
              l = t.lazy;
            return n.default.createElement(
              n.default.Suspense,
              { fallback: a },
              n.default.createElement(i, null, n.default.createElement(l, e))
            );
          }
          return (
            (t.lazy = n.default.lazy(t.loader)),
            (r.displayName = "LoadableComponent"),
            r
          );
        };
    },
    3400: function () {},
    501: function () {},
    4612: function () {},
    3018: function (e, t, r) {
      "use strict";
      var n = r(1289);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, a, i) {
            if (i !== n) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    4275: function (e, t, r) {
      e.exports = r(3018)();
    },
    1289: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    8956: function (e, t, r) {
      var n = r(2265),
        o = n && "object" == typeof n && "default" in n ? n : { default: n };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );

      let a = n.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: r = !1,
          play: a = !0,
          pauseOnHover: i = !1,
          pauseOnClick: l = !1,
          direction: s = "left",
          speed: d = 50,
          delay: c = 0,
          loop: u = 0,
          gradient: f = !1,
          gradientColor: p = "white",
          gradientWidth: g = 200,
          onFinish: h,
          onCycleComplete: m,
          onMount: b,
          children: y,
        },
        v
      ) {
        let [x, w] = n.useState(0),
          [k, E] = n.useState(0),
          [S, T] = n.useState(1),
          [C, j] = n.useState(!1),
          M = n.useRef(null),
          N = v || M,
          P = n.useRef(null),
          O = n.useCallback(() => {
            if (P.current && N.current) {
              let e = N.current.getBoundingClientRect(),
                t = P.current.getBoundingClientRect(),
                n = e.width,
                o = t.width;
              ("up" === s || "down" === s) && ((n = e.height), (o = t.height)),
                r && n && o ? T(o < n ? Math.ceil(n / o) : 1) : T(1),
                w(n),
                E(o);
            }
          }, [r, N, s]);
        n.useEffect(() => {
          if (C && (O(), P.current && N.current)) {
            let e = new ResizeObserver(() => O());
            return (
              e.observe(N.current),
              e.observe(P.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [O, N, C]),
          n.useEffect(() => {
            O();
          }, [O, y]),
          n.useEffect(() => {
            j(!0);
          }, []),
          n.useEffect(() => {
            "function" == typeof b && b();
          }, []);
        let L = n.useMemo(
            () => (r ? (k * S) / d : k < x ? x / d : k / d),
            [r, x, k, S, d]
          ),
          I = n.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !a || i ? "paused" : "running",
                "--pause-on-click": !a || (i && !l) || l ? "paused" : "running",
                "--width": "up" === s || "down" === s ? "100vh" : "100%",
                "--transform":
                  "up" === s
                    ? "rotate(-90deg)"
                    : "down" === s
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, a, i, l, s]
          ),
          _ = n.useMemo(
            () => ({
              "--gradient-color": p,
              "--gradient-width": "number" == typeof g ? `${g}px` : g,
            }),
            [p, g]
          ),
          R = n.useMemo(
            () => ({
              "--play": a ? "running" : "paused",
              "--direction": "left" === s ? "normal" : "reverse",
              "--duration": `${L}s`,
              "--delay": `${c}s`,
              "--iteration-count": u ? `${u}` : "infinite",
              "--min-width": r ? "auto" : "100%",
            }),
            [a, s, L, c, u, r]
          ),
          A = n.useMemo(
            () => ({
              "--transform":
                "up" === s
                  ? "rotate(90deg)"
                  : "down" === s
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [s]
          ),
          z = n.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                o.default.createElement(
                  n.Fragment,
                  { key: t },
                  n.Children.map(y, (e) =>
                    o.default.createElement(
                      "div",
                      { style: A, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [A, y]
          );
        return C
          ? o.default.createElement(
              "div",
              { ref: N, style: I, className: "rfm-marquee-container " + t },
              f &&
                o.default.createElement("div", {
                  style: _,
                  className: "rfm-overlay",
                }),
              o.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: R,
                  onAnimationIteration: m,
                  onAnimationEnd: h,
                },
                o.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: P },
                  n.Children.map(y, (e) =>
                    o.default.createElement(
                      "div",
                      { style: A, className: "rfm-child" },
                      e
                    )
                  )
                ),
                z(S - 1)
              ),
              o.default.createElement(
                "div",
                { className: "rfm-marquee", style: R },
                z(S)
              )
            )
          : null;
      });
      t.Z = a;
    },
    
    1172: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return s;
        },
      });
      var n = r(2265),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(e);
              o < n.length;
              o++
            )
              0 > t.indexOf(n[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function s(e) {
        return function (t) {
          return n.createElement(
            d,
            i({ attr: i({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    i({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function d(e) {
        var t = function (t) {
          var r,
            o = e.attr,
            a = e.size,
            s = e.title,
            d = l(e, ["attr", "size", "title"]),
            c = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              i(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                d,
                {
                  className: r,
                  style: i(i({ color: e.color || t.color }, t.style), e.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && n.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
    6590: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        o = i(r(2265)),
        a = i(r(1737));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      t.default = (0, a.default)(l);
    },
    6332: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        a = s(r(2265)),
        i = s(r(9409)),
        l = s(r(4275));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = n({}, this.props);
                return (
                  delete t.name,
                  t.parentBindings && delete t.parentBindings,
                  a.default.createElement(
                    "div",
                    n({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(a.default.Component);
      (d.propTypes = { name: l.default.string, id: l.default.string }),
        (t.default = (0, i.default)(d));
    },
    5656: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(r(2265)),
        o = a(r(1737));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      var l = (function (e) {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t);
          for (
            var e, r, o, a = arguments.length, l = Array(a), s = 0;
            s < a;
            s++
          )
            l[s] = arguments[s];
          return (
            (r = o =
              i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
            (o.render = function () {
              return n.default.createElement("a", o.props, o.props.children);
            }),
            i(o, r)
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(n.default.Component);
      t.default = (0, o.default)(l);
    },
    7381: function (e, t, r) {
      "use strict";
      t.rU = void 0;
      var n = p(r(5656)),
        o = p(r(6590)),
        a = p(r(6332)),
        i = p(r(7559)),
        l = p(r(2744)),
        s = p(r(3285)),
        d = p(r(9227)),
        c = p(r(1737)),
        u = p(r(9409)),
        f = p(r(7733));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.rU = n.default),
        o.default,
        a.default,
        i.default,
        l.default,
        s.default,
        d.default,
        c.default,
        u.default,
        f.default,
        n.default,
        o.default,
        a.default,
        i.default,
        l.default,
        s.default,
        d.default,
        c.default,
        u.default,
        f.default;
    },
    7733: function (e, t, r) {
      "use strict";
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function a(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var s = r(2265);
      r(4887), r(3364);
      var d = r(3285),
        c = r(7559),
        u = r(4275),
        f = r(7564),
        p = {
          to: u.string.isRequired,
          containerId: u.string,
          container: u.object,
          activeClass: u.string,
          spy: u.bool,
          smooth: u.oneOfType([u.bool, u.string]),
          offset: u.number,
          delay: u.number,
          isDynamic: u.bool,
          onClick: u.func,
          duration: u.oneOfType([u.number, u.func]),
          absolute: u.bool,
          onSetActive: u.func,
          onSetInactive: u.func,
          ignoreCancelEvents: u.bool,
          hashSpy: u.bool,
          spyThrottle: u.number,
        };
      e.exports = {
        Scroll: function (e, t) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var r = t || c,
            u = (function (t) {
              function c(e) {
                a(this, c);
                var t = i(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                );
                return g.call(t), (t.state = { active: !1 }), t;
              }
              return (
                l(c, t),
                o(c, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        d.isMounted(e) || d.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (f.isMounted() || f.mount(r),
                            f.mapContainer(this.props.to, e)),
                          this.props.spy &&
                            d.addStateHandler(this.stateHandler),
                          d.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      d.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var r = n({}, this.props);
                      for (var o in p) r.hasOwnProperty(o) && delete r[o];
                      return (
                        (r.className = t),
                        (r.onClick = this.handleClick),
                        s.createElement(e, r)
                      );
                    },
                  },
                ]),
                c
              );
            })(s.Component),
            g = function () {
              var e = this;
              (this.scrollTo = function (t, o) {
                r.scrollTo(t, n({}, e.state, o));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.stateHandler = function () {
                  r.getActiveLink() !== e.props.to &&
                    (null !== e.state &&
                      e.state.active &&
                      e.props.onSetInactive &&
                      e.props.onSetInactive(),
                    e.setState({ active: !1 }));
                }),
                (this.spyHandler = function (t) {
                  var n = e.getScrollSpyContainer();
                  if (!f.isMounted() || f.isInitialized()) {
                    var o = e.props.to,
                      a = null,
                      i = 0,
                      l = 0,
                      s = 0;
                    if (
                      (n.getBoundingClientRect &&
                        (s = n.getBoundingClientRect().top),
                      !a || e.props.isDynamic)
                    ) {
                      if (!(a = r.get(o))) return;
                      var c = a.getBoundingClientRect();
                      l = (i = c.top - s + t) + c.height;
                    }
                    var u = t - e.props.offset,
                      p = u >= Math.floor(i) && u < Math.floor(l),
                      g = u < Math.floor(i) || u >= Math.floor(l),
                      h = r.getActiveLink();
                    return g
                      ? (o === h && r.setActiveLink(void 0),
                        e.props.hashSpy && f.getHash() === o && f.changeHash(),
                        e.props.spy &&
                          e.state.active &&
                          (e.setState({ active: !1 }),
                          e.props.onSetInactive && e.props.onSetInactive()),
                        d.updateStates())
                      : p && h !== o
                      ? (r.setActiveLink(o),
                        e.props.hashSpy && f.changeHash(o),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(o)),
                        d.updateStates())
                      : void 0;
                  }
                });
            };
          return (u.propTypes = p), (u.defaultProps = { offset: 0 }), u;
        },
        Element: function (e) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var t = (function (t) {
            function r(e) {
              a(this, r);
              var t = i(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).call(this, e)
              );
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              l(r, t),
              o(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    c.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    c.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return s.createElement(
                      e,
                      n({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              r
            );
          })(s.Component);
          return (t.propTypes = { name: u.string, id: u.string }), t;
        },
      };
    },
    9227: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      l(r(3364));
      var o = l(r(1830)),
        a = l(r(2306)),
        i = l(r(2744));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = function (e) {
          return o.default[e.smooth] || o.default.defaultEasing;
        },
        d =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, r) {
            window.setTimeout(e, r || 1e3 / 60, new Date().getTime());
          },
        c = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        u = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var r = void 0 !== window.pageXOffset,
            n = "CSS1Compat" === (document.compatMode || "");
          return r
            ? window.pageXOffset
            : n
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        f = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var r = void 0 !== window.pageXOffset,
            n = "CSS1Compat" === (document.compatMode || "");
          return r
            ? window.pageYOffset
            : n
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        p = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollWidth - t.offsetWidth;
          var r = document.body,
            n = document.documentElement;
          return Math.max(
            r.scrollWidth,
            r.offsetWidth,
            n.clientWidth,
            n.scrollWidth,
            n.offsetWidth
          );
        },
        g = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollHeight - t.offsetHeight;
          var r = document.body,
            n = document.documentElement;
          return Math.max(
            r.scrollHeight,
            r.offsetHeight,
            n.clientHeight,
            n.scrollHeight,
            n.offsetHeight
          );
        },
        h = function e(t, r, n) {
          var o = r.data;
          if (!r.ignoreCancelEvents && o.cancel) {
            i.default.registered.end &&
              i.default.registered.end(o.to, o.target, o.currentPositionY);
            return;
          }
          if (
            ((o.delta = Math.round(o.targetPosition - o.startPosition)),
            null === o.start && (o.start = n),
            (o.progress = n - o.start),
            (o.percent =
              o.progress >= o.duration ? 1 : t(o.progress / o.duration)),
            (o.currentPosition =
              o.startPosition + Math.ceil(o.delta * o.percent)),
            o.containerElement &&
            o.containerElement !== document &&
            o.containerElement !== document.body
              ? r.horizontal
                ? (o.containerElement.scrollLeft = o.currentPosition)
                : (o.containerElement.scrollTop = o.currentPosition)
              : r.horizontal
              ? window.scrollTo(o.currentPosition, 0)
              : window.scrollTo(0, o.currentPosition),
            o.percent < 1)
          ) {
            var a = e.bind(null, t, r);
            d.call(window, a);
            return;
          }
          i.default.registered.end &&
            i.default.registered.end(o.to, o.target, o.currentPosition);
        },
        m = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        b = function (e, t, r, n) {
          if (
            ((t.data = t.data || c()),
            window.clearTimeout(t.data.delayTimeout),
            a.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            m(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal ? u(t) : f(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition === t.data.targetPosition)
          ) {
            i.default.registered.end &&
              i.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
            return;
          }
          (t.data.delta = Math.round(
            t.data.targetPosition - t.data.startPosition
          )),
            (t.data.duration = (
              "function" == typeof (o = t.duration)
                ? o
                : function () {
                    return o;
                  }
            )(t.data.delta)),
            (t.data.duration = isNaN(parseFloat(t.data.duration))
              ? 1e3
              : parseFloat(t.data.duration)),
            (t.data.to = r),
            (t.data.target = n);
          var o,
            l = s(t),
            p = h.bind(null, l, t);
          if (t && t.delay > 0) {
            t.data.delayTimeout = window.setTimeout(function () {
              i.default.registered.begin &&
                i.default.registered.begin(t.data.to, t.data.target),
                d.call(window, p);
            }, t.delay);
            return;
          }
          i.default.registered.begin &&
            i.default.registered.begin(t.data.to, t.data.target),
            d.call(window, p);
        },
        y = function (e) {
          return ((e = n({}, e)).data = e.data || c()), (e.absolute = !0), e;
        };
      t.default = {
        animateTopScroll: b,
        getAnimationType: s,
        scrollToTop: function (e) {
          b(0, y(e));
        },
        scrollToBottom: function (e) {
          m((e = y(e))), b(e.horizontal ? p(e) : g(e), e);
        },
        scrollTo: function (e, t) {
          b(e, y(t));
        },
        scrollMore: function (e, t) {
          m((t = y(t))), b(e + (t.horizontal ? u(t) : f(t)), t);
        },
      };
    },
    2306: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5962),
        o = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            o.forEach(function (t) {
              return (0, n.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    5962: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPassiveEventListener = function (e, t, n) {
          var o = n.name;
          o || ((o = t), console.warn("Listener must be a named function.")),
            r.has(t) || r.set(t, new Set());
          var a = r.get(t);
          if (!a.has(o)) {
            var i = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                window.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })();
            e.addEventListener(t, n, !!i && { passive: !0 }), a.add(o);
          }
        }),
        (t.removePassiveEventListener = function (e, t, n) {
          e.removeEventListener(t, n), r.get(t).delete(n.name || t);
        });
      var r = new Map();
    },
    9409: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        a = s(r(2265));
      s(r(4887));
      var i = s(r(7559)),
        l = s(r(4275));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function r(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, r);
            var t = (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(r, t),
            o(r, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  i.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  i.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return a.default.createElement(
                    e,
                    n({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            r
          );
        })(a.default.Component);
        return (
          (t.propTypes = { name: l.default.string, id: l.default.string }), t
        );
      };
    },
    2744: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            r.registered[e] = t;
          },
          remove: function (e) {
            r.registered[e] = null;
          },
        },
      };
      t.default = r;
    },
    7564: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), r(5962);
      var n,
        o = (n = r(3364)) && n.__esModule ? n : { default: n };
      t.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var r = this.scroller;
          if (r.get(e) && (t || e !== r.getActiveLink())) {
            var n = this.containers[e] || document;
            r.scrollTo(e, { container: n });
          }
        },
        getHash: function () {
          return o.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            o.default.getHash() !== e &&
            o.default.updateHash(e, t);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    1737: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        a = c(r(2265)),
        i = c(r(3285)),
        l = c(r(7559)),
        s = c(r(4275)),
        d = c(r(7564));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = {
        to: s.default.string.isRequired,
        containerId: s.default.string,
        container: s.default.object,
        activeClass: s.default.string,
        activeStyle: s.default.object,
        spy: s.default.bool,
        horizontal: s.default.bool,
        smooth: s.default.oneOfType([s.default.bool, s.default.string]),
        offset: s.default.number,
        delay: s.default.number,
        isDynamic: s.default.bool,
        onClick: s.default.func,
        duration: s.default.oneOfType([s.default.number, s.default.func]),
        absolute: s.default.bool,
        onSetActive: s.default.func,
        onSetInactive: s.default.func,
        ignoreCancelEvents: s.default.bool,
        hashSpy: s.default.bool,
        saveHashHistory: s.default.bool,
        spyThrottle: s.default.number,
      };
      t.default = function (e, t) {
        var r = t || l.default,
          s = (function (t) {
            function l(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, l);
              var t = (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e));
              return c.call(t), (t.state = { active: !1 }), t;
            }
            return (
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(l, t),
              o(l, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      i.default.isMounted(e) ||
                        i.default.mount(e, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (d.default.isMounted() || d.default.mount(r),
                          d.default.mapContainer(this.props.to, e)),
                        i.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    i.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var r = {};
                    r =
                      this.state && this.state.active
                        ? n({}, this.props.style, this.props.activeStyle)
                        : n({}, this.props.style);
                    var o = n({}, this.props);
                    for (var i in u) o.hasOwnProperty(i) && delete o[i];
                    return (
                      (o.className = t),
                      (o.style = r),
                      (o.onClick = this.handleClick),
                      a.default.createElement(e, o)
                    );
                  },
                },
              ]),
              l
            );
          })(a.default.PureComponent),
          c = function () {
            var e = this;
            (this.scrollTo = function (t, o) {
              r.scrollTo(t, n({}, e.state, o));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, n) {
                var o = e.getScrollSpyContainer();
                if (!d.default.isMounted() || d.default.isInitialized()) {
                  var a = e.props.horizontal,
                    i = e.props.to,
                    l = null,
                    s = void 0,
                    c = void 0;
                  if (a) {
                    var u = 0,
                      f = 0,
                      p = 0;
                    if (
                      (o.getBoundingClientRect &&
                        (p = o.getBoundingClientRect().left),
                      !l || e.props.isDynamic)
                    ) {
                      if (!(l = r.get(i))) return;
                      var g = l.getBoundingClientRect();
                      f = (u = g.left - p + t) + g.width;
                    }
                    var h = t - e.props.offset;
                    (s = h >= Math.floor(u) && h < Math.floor(f)),
                      (c = h < Math.floor(u) || h >= Math.floor(f));
                  } else {
                    var m = 0,
                      b = 0,
                      y = 0;
                    if (
                      (o.getBoundingClientRect &&
                        (y = o.getBoundingClientRect().top),
                      !l || e.props.isDynamic)
                    ) {
                      if (!(l = r.get(i))) return;
                      var v = l.getBoundingClientRect();
                      b = (m = v.top - y + n) + v.height;
                    }
                    var x = n - e.props.offset;
                    (s = x >= Math.floor(m) && x < Math.floor(b)),
                      (c = x < Math.floor(m) || x >= Math.floor(b));
                  }
                  var w = r.getActiveLink();
                  if (c) {
                    if (
                      (i === w && r.setActiveLink(void 0),
                      e.props.hashSpy && d.default.getHash() === i)
                    ) {
                      var k = e.props.saveHashHistory;
                      d.default.changeHash("", void 0 !== k && k);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(i, l));
                  }
                  if (s && (w !== i || !1 === e.state.active)) {
                    r.setActiveLink(i);
                    var E = e.props.saveHashHistory;
                    e.props.hashSpy &&
                      d.default.changeHash(i, void 0 !== E && E),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(i, l));
                  }
                }
              });
          };
        return (s.propTypes = u), (s.defaultProps = { offset: 0 }), s;
      };
    },
    3285: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = (n = r(6978)) && n.__esModule ? n : { default: n },
        a = r(5962),
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, o.default)(e, t);
        },
        l = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var r = i(function (t) {
                l.scrollHandler(e);
              }, t);
              l.scrollSpyContainers.push(e),
                (0, a.addPassiveEventListener)(e, "scroll", r);
            }
          },
          isMounted: function (e) {
            return -1 !== l.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e !== document) return e.scrollLeft;
            var t = void 0 !== window.pageYOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : r
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e !== document) return e.scrollTop;
            var t = void 0 !== window.pageXOffset,
              r = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : r
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (e) {
            (
              l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(l.currentPositionX(e), l.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            l.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var r = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];
            r.spyCallbacks || (r.spyCallbacks = []),
              r.spyCallbacks.push(e),
              e(l.currentPositionX(t), l.currentPositionY(t));
          },
          updateStates: function () {
            l.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            l.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.indexOf(t) > -1 &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              l.spySetState &&
                l.spySetState.length &&
                l.spySetState.indexOf(e) > -1 &&
                l.spySetState.splice(l.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", l.scrollHandler);
          },
          update: function () {
            return l.scrollSpyContainers.forEach(function (e) {
              return l.scrollHandler(e);
            });
          },
        };
      t.default = l;
    },
    7559: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = l(r(3364)),
        a = l(r(9227)),
        i = l(r(2744));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = {},
        d = void 0;
      t.default = {
        unmount: function () {
          s = {};
        },
        register: function (e, t) {
          s[e] = t;
        },
        unregister: function (e) {
          delete s[e];
        },
        get: function (e) {
          return (
            s[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (d = e);
        },
        getActiveLink: function () {
          return d;
        },
        scrollTo: function (e, t) {
          var r = this.get(e);
          if (!r) {
            console.warn("target Element not found");
            return;
          }
          var l = (t = n({}, t, { absolute: !1 })).containerId,
            s = t.container,
            d = void 0;
          (d = l ? document.getElementById(l) : s && s.nodeType ? s : document),
            (t.absolute = !0);
          var c = t.horizontal,
            u = o.default.scrollOffset(d, r, c) + (t.offset || 0);
          if (!t.smooth) {
            i.default.registered.begin && i.default.registered.begin(e, r),
              d === document
                ? t.horizontal
                  ? window.scrollTo(u, 0)
                  : window.scrollTo(0, u)
                : (d.scrollTop = u),
              i.default.registered.end && i.default.registered.end(e, r);
            return;
          }
          a.default.animateTopScroll(u, t, e, r);
        },
      };
    },
    1830: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow((1 - e) * 2, 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    3364: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t) {
        for (var r = e.offsetTop, n = e.offsetParent; n && !t(n); )
          (r += n.offsetTop), (n = n.offsetParent);
        return { offsetTop: r, offsetParent: n };
      };
      t.default = {
        updateHash: function (e, t) {
          var r = 0 === e.indexOf("#") ? e.substring(1) : e,
            n = r ? "#" + r : "",
            o = window && window.location,
            a = n ? o.pathname + o.search + n : o.pathname + o.search;
          t
            ? history.pushState(history.state, "", a)
            : history.replaceState(history.state, "", a);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t, n) {
          if (n)
            return e === document
              ? t.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft;
          if (e === document)
            return (
              t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(e).position) {
            if (t.offsetParent !== e) {
              var o = r(t, function (t) {
                  return t === e || t === document;
                }),
                a = o.offsetTop;
              if (o.offsetParent !== e)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return a;
            }
            return t.offsetTop;
          }
          if (t.offsetParent === e.offsetParent)
            return t.offsetTop - e.offsetTop;
          var i = function (e) {
            return e === document;
          };
          return r(t, i).offsetTop - r(e, i).offsetTop;
        },
      };
    },
    875: function (e, t, r) {
      "use strict";
      r.d(t, {
        c4: function () {
          return o;
        },
      }),
        r(9280);
      var n = r(1439);
      function o(e) {
        let { swiper: t, extendParams: r, on: o } = e;
        r({
          cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8,
          },
        }),
          (function (e) {
            let t;
            let {
              effect: r,
              swiper: n,
              on: o,
              setTranslate: a,
              setTransition: i,
              overwriteParams: l,
              perspective: s,
              recreateShadows: d,
              getEffectParams: c,
            } = e;
            o("beforeInit", () => {
              if (n.params.effect !== r) return;
              n.classNames.push(`${n.params.containerModifierClass}${r}`),
                s &&
                  s() &&
                  n.classNames.push(`${n.params.containerModifierClass}3d`);
              let e = l ? l() : {};
              Object.assign(n.params, e), Object.assign(n.originalParams, e);
            }),
              o("setTranslate", () => {
                n.params.effect === r && a();
              }),
              o("setTransition", (e, t) => {
                n.params.effect === r && i(t);
              }),
              o("transitionEnd", () => {
                n.params.effect === r &&
                  d &&
                  c &&
                  c().slideShadows &&
                  (n.slides.forEach((e) => {
                    e.querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    ).forEach((e) => e.remove());
                  }),
                  d());
              }),
              o("virtualUpdate", () => {
                n.params.effect === r &&
                  (n.slides.length || (t = !0),
                  requestAnimationFrame(() => {
                    t && n.slides && n.slides.length && (a(), (t = !1));
                  }));
              });
          })({
            effect: "cards",
            swiper: t,
            on: o,
            setTranslate: () => {
              let { slides: e, activeIndex: r, rtlTranslate: o } = t,
                a = t.params.cardsEffect,
                { startTranslate: i, isTouched: l } = t.touchEventsData,
                s = o ? -t.translate : t.translate;
              for (let d = 0; d < e.length; d += 1) {
                let c = e[d],
                  u = c.progress,
                  f = Math.min(Math.max(u, -4), 4),
                  p = c.swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (p -= e[0].swiperSlideOffset);
                let g = t.params.cssMode ? -p - t.translate : -p,
                  h = 0,
                  m = -100 * Math.abs(f),
                  b = 1,
                  y = -a.perSlideRotate * f,
                  v = a.perSlideOffset - 0.75 * Math.abs(f),
                  x =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + d
                      : d,
                  w =
                    (x === r || x === r - 1) &&
                    f > 0 &&
                    f < 1 &&
                    (l || t.params.cssMode) &&
                    s < i,
                  k =
                    (x === r || x === r + 1) &&
                    f < 0 &&
                    f > -1 &&
                    (l || t.params.cssMode) &&
                    s > i;
                if (w || k) {
                  let e = (1 - Math.abs((Math.abs(f) - 0.5) / 0.5)) ** 0.5;
                  (y += -28 * f * e),
                    (b += -0.5 * e),
                    (v += 96 * e),
                    (h = `${-25 * e * Math.abs(f)}%`);
                }
                if (
                  ((g =
                    f < 0
                      ? `calc(${g}px ${o ? "-" : "+"} (${v * Math.abs(f)}%))`
                      : f > 0
                      ? `calc(${g}px ${o ? "-" : "+"} (-${v * Math.abs(f)}%))`
                      : `${g}px`),
                  !t.isHorizontal())
                ) {
                  let e = h;
                  (h = g), (g = e);
                }
                let E = f < 0 ? `${1 + (1 - b) * f}` : `${1 - (1 - b) * f}`,
                  S = `
        translate3d(${g}, ${h}, ${m}px)
        rotateZ(${a.rotate ? (o ? -y : y) : 0}deg)
        scale(${E})
      `;
                if (a.slideShadows) {
                  let e = c.querySelector(".swiper-slide-shadow");
                  e ||
                    (e = (function (e, t, r) {
                      let o = `swiper-slide-shadow${r ? `-${r}` : ""}${
                          e ? ` swiper-slide-shadow-${e}` : ""
                        }`,
                        a = (0, n.l)(t),
                        i = a.querySelector(`.${o.split(" ").join(".")}`);
                      return (
                        i || ((i = (0, n.c)("div", o.split(" "))), a.append(i)),
                        i
                      );
                    })("cards", c)),
                    e &&
                      (e.style.opacity = Math.min(
                        Math.max((Math.abs(f) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (c.style.zIndex = -Math.abs(Math.round(u)) + e.length),
                  ((function (e, t) {
                    let r = (0, n.l)(t);
                    return (
                      r !== t &&
                        ((r.style.backfaceVisibility = "hidden"),
                        (r.style["-webkit-backface-visibility"] = "hidden")),
                      r
                    );
                  })(0, c).style.transform = S);
              }
            },
            setTransition: (e) => {
              let r = t.slides.map((e) => (0, n.l)(e));
              r.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
              }),
                (function (e) {
                  let {
                      swiper: t,
                      duration: r,
                      transformElements: o,
                      allSlides: a,
                    } = e,
                    { activeIndex: i } = t,
                    l = (e) =>
                      e.parentElement
                        ? e.parentElement
                        : t.slides.filter(
                            (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                          )[0];
                  if (t.params.virtualTranslate && 0 !== r) {
                    let e = !1;
                    (a
                      ? o
                      : o.filter((e) => {
                          let r = e.classList.contains("swiper-slide-transform")
                            ? l(e)
                            : e;
                          return t.getSlideIndex(r) === i;
                        })
                    ).forEach((r) => {
                      (0, n.j)(r, () => {
                        if (e || !t || t.destroyed) return;
                        (e = !0), (t.animating = !1);
                        let r = new window.CustomEvent("transitionend", {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        t.wrapperEl.dispatchEvent(r);
                      });
                    });
                  }
                })({ swiper: t, duration: e, transformElements: r });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      }
    },
    9280: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function o(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((r) => {
            void 0 === e[r]
              ? (e[r] = t[r])
              : n(t[r]) &&
                n(e[r]) &&
                Object.keys(t[r]).length > 0 &&
                o(e[r], t[r]);
          });
      }
      r.d(t, {
        a: function () {
          return s;
        },
        g: function () {
          return i;
        },
      });
      let a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function i() {
        let e = "undefined" != typeof document ? document : {};
        return o(e, a), e;
      }
      let l = {
        document: a,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function s() {
        let e = "undefined" != typeof window ? window : {};
        return o(e, l), e;
      }
    },
    1439: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return v;
        },
        c: function () {
          return g;
        },
        d: function () {
          return i;
        },
        e: function () {
          return f;
        },
        f: function () {
          return w;
        },
        g: function () {
          return y;
        },
        i: function () {
          return l;
        },
        j: function () {
          return x;
        },
        l: function () {
          return u;
        },
        m: function () {
          return b;
        },
        n: function () {
          return a;
        },
        o: function () {
          return m;
        },
        p: function () {
          return h;
        },
        q: function () {
          return c;
        },
        r: function () {
          return p;
        },
        s: function () {
          return d;
        },
        t: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              r = ["__proto__", "constructor", "prototype"];
            for (let n = 1; n < arguments.length; n += 1) {
              let o = n < 0 || arguments.length <= n ? void 0 : arguments[n];
              if (
                null != o &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(o instanceof HTMLElement)
                  : !o || (1 !== o.nodeType && 11 !== o.nodeType))
              ) {
                let n = Object.keys(Object(o)).filter((e) => 0 > r.indexOf(e));
                for (let r = 0, a = n.length; r < a; r += 1) {
                  let a = n[r],
                    i = Object.getOwnPropertyDescriptor(o, a);
                  void 0 !== i &&
                    i.enumerable &&
                    (s(t[a]) && s(o[a])
                      ? o[a].__swiper__
                        ? (t[a] = o[a])
                        : e(t[a], o[a])
                      : !s(t[a]) && s(o[a])
                      ? ((t[a] = {}),
                        o[a].__swiper__ ? (t[a] = o[a]) : e(t[a], o[a]))
                      : (t[a] = o[a]));
                }
              }
            }
            return t;
          };
        },
        u: function () {
          return o;
        },
      });
      var n = r(9280);
      function o(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function i() {
        return Date.now();
      }
      function l(e, t) {
        let r, o, a;
        void 0 === t && (t = "x");
        let i = (0, n.a)(),
          l = (function (e) {
            let t;
            let r = (0, n.a)();
            return (
              r.getComputedStyle && (t = r.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((o = l.transform || l.webkitTransform).split(",").length > 6 &&
                (o = o
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === o ? "" : o)))
            : (r = (a =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (o = i.WebKitCSSMatrix
              ? a.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (o = i.WebKitCSSMatrix
              ? a.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          o || 0
        );
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, r) {
        e.style.setProperty(t, r);
      }
      function c(e) {
        let t,
          { swiper: r, targetPosition: o, side: a } = e,
          i = (0, n.a)(),
          l = -r.translate,
          s = null,
          d = r.params.speed;
        (r.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(r.cssModeFrameID);
        let c = o > l ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          f = () => {
            (t = new Date().getTime()), null === s && (s = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - s) / d, 1), 0) * Math.PI) / 2) *
                (o - l);
            if (
              (u(e, o) && (e = o), r.wrapperEl.scrollTo({ [a]: e }), u(e, o))
            ) {
              (r.wrapperEl.style.overflow = "hidden"),
                (r.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (r.wrapperEl.style.overflow = ""),
                    r.wrapperEl.scrollTo({ [a]: e });
                }),
                i.cancelAnimationFrame(r.cssModeFrameID);
              return;
            }
            r.cssModeFrameID = i.requestAnimationFrame(f);
          };
        f();
      }
      function u(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowRoot &&
            e.shadowRoot.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function f(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function p(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function g(e, t) {
        var r;
        void 0 === t && (t = []);
        let n = document.createElement(e);
        return (
          n.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (r = t) && (r = ""),
                r
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          n
        );
      }
      function h(e, t) {
        let r = [];
        for (; e.previousElementSibling; ) {
          let n = e.previousElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), (e = n);
        }
        return r;
      }
      function m(e, t) {
        let r = [];
        for (; e.nextElementSibling; ) {
          let n = e.nextElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), (e = n);
        }
        return r;
      }
      function b(e, t) {
        return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function y(e) {
        let t,
          r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling); )
            1 === r.nodeType && (t += 1);
          return t;
        }
      }
      function v(e, t) {
        let r = [],
          n = e.parentElement;
        for (; n; )
          t ? n.matches(t) && r.push(n) : r.push(n), (n = n.parentElement);
        return r;
      }
      function x(e, t) {
        t &&
          e.addEventListener("transitionend", function r(n) {
            n.target === e &&
              (t.call(e, n), e.removeEventListener("transitionend", r));
          });
      }
      function w(e, t, r) {
        let o = (0, n.a)();
        return r
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                o
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                o
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
    },
    8278: function (e, t, r) {
      "use strict";
      let n, o, a;
      r.d(t, {
        tq: function () {
          return $;
        },
        o5: function () {
          return G;
        },
      });
      var i = r(2265),
        l = r(9280),
        s = r(1439);
      function d() {
        return (
          n ||
            (n = (function () {
              let e = (0, l.a)(),
                t = (0, l.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          n
        );
      }
      let c = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let r = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (r.shadowRoot
                ? (t = r.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    r.shadowRoot &&
                      (t = r.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        u = (e, t) => {
          if (!e.slides[t]) return;
          let r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading");
        },
        f = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          let n =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            o = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let r = [o - t];
            r.push(...Array.from({ length: t }).map((e, t) => o + n + t)),
              e.slides.forEach((t, n) => {
                r.includes(t.column) && u(e, n);
              });
            return;
          }
          let a = o + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = o - t; n <= a + t; n += 1) {
              let t = ((n % r) + r) % r;
              (t < o || t > a) && u(e, t);
            }
          else
            for (
              let n = Math.max(o - t, 0);
              n <= Math.min(a + t, r - 1);
              n += 1
            )
              n !== o && (n > a || n < o) && u(e, n);
        };
      function p(e) {
        let { swiper: t, runCallbacks: r, direction: n, step: o } = e,
          { activeIndex: a, previousIndex: i } = t,
          l = n;
        if (
          (l || (l = a > i ? "next" : a < i ? "prev" : "reset"),
          t.emit(`transition${o}`),
          r && a !== i)
        ) {
          if ("reset" === l) {
            t.emit(`slideResetTransition${o}`);
            return;
          }
          t.emit(`slideChangeTransition${o}`),
            "next" === l
              ? t.emit(`slideNextTransition${o}`)
              : t.emit(`slidePrevTransition${o}`);
        }
      }
      function g(e, t, r) {
        let n = (0, l.a)(),
          { params: o } = e,
          a = o.edgeSwipeDetection,
          i = o.edgeSwipeThreshold;
        return (
          !a ||
          (!(r <= i) && !(r >= n.innerWidth - i)) ||
          ("prevent" === a && (t.preventDefault(), !0))
        );
      }
      function h(e) {
        let t = (0, l.g)(),
          r = e;
        r.originalEvent && (r = r.originalEvent);
        let n = this.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== n.pointerId && n.pointerId !== r.pointerId) return;
          n.pointerId = r.pointerId;
        } else
          "touchstart" === r.type &&
            1 === r.targetTouches.length &&
            (n.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type) {
          g(this, r, r.targetTouches[0].pageX);
          return;
        }
        let { params: o, touches: a, enabled: i } = this;
        if (
          !i ||
          (!o.simulateTouch && "mouse" === r.pointerType) ||
          (this.animating && o.preventInteractionOnTransition)
        )
          return;
        !this.animating && o.cssMode && o.loop && this.loopFix();
        let d = r.target;
        if (
          ("wrapper" === o.touchEventsTarget && !this.wrapperEl.contains(d)) ||
          ("which" in r && 3 === r.which) ||
          ("button" in r && r.button > 0) ||
          (n.isTouched && n.isMoved)
        )
          return;
        let c = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = r.composedPath ? r.composedPath() : r.path;
        c && r.target && r.target.shadowRoot && u && (d = u[0]);
        let f = o.noSwipingSelector
            ? o.noSwipingSelector
            : `.${o.noSwipingClass}`,
          p = !!(r.target && r.target.shadowRoot);
        if (
          o.noSwiping &&
          (p
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(r) {
                    if (!r || r === (0, l.g)() || r === (0, l.a)()) return null;
                    r.assignedSlot && (r = r.assignedSlot);
                    let n = r.closest(e);
                    return n || r.getRootNode
                      ? n || t(r.getRootNode().host)
                      : null;
                  })(t)
                );
              })(f, d)
            : d.closest(f))
        ) {
          this.allowClick = !0;
          return;
        }
        if (o.swipeHandler && !d.closest(o.swipeHandler)) return;
        (a.currentX = r.pageX), (a.currentY = r.pageY);
        let h = a.currentX,
          m = a.currentY;
        if (!g(this, r, h)) return;
        Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (a.startX = h),
          (a.startY = m),
          (n.touchStartTime = (0, s.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          o.threshold > 0 && (n.allowThresholdMove = !1);
        let b = !0;
        d.matches(n.focusableElements) &&
          ((b = !1), "SELECT" === d.nodeName && (n.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(n.focusableElements) &&
            t.activeElement !== d &&
            t.activeElement.blur();
        let y = b && this.allowTouchMove && o.touchStartPreventDefault;
        (o.touchStartForcePreventDefault || y) &&
          !d.isContentEditable &&
          r.preventDefault(),
          o.freeMode &&
            o.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !o.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", r);
      }
      function m(e) {
        let t, r;
        let n = (0, l.g)(),
          o = this.touchEventsData,
          { params: a, touches: i, rtlTranslate: d, enabled: c } = this;
        if (!c || (!a.simulateTouch && "mouse" === e.pointerType)) return;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent),
          "pointermove" === u.type &&
            (null !== o.touchId || u.pointerId !== o.pointerId))
        )
          return;
        if ("touchmove" === u.type) {
          if (
            !(t = [...u.changedTouches].filter(
              (e) => e.identifier === o.touchId
            )[0]) ||
            t.identifier !== o.touchId
          )
            return;
        } else t = u;
        if (!o.isTouched) {
          o.startMoving && o.isScrolling && this.emit("touchMoveOpposite", u);
          return;
        }
        let f = t.pageX,
          p = t.pageY;
        if (u.preventedByNestedSwiper) {
          (i.startX = f), (i.startY = p);
          return;
        }
        if (!this.allowTouchMove) {
          u.target.matches(o.focusableElements) || (this.allowClick = !1),
            o.isTouched &&
              (Object.assign(i, {
                startX: f,
                startY: p,
                currentX: f,
                currentY: p,
              }),
              (o.touchStartTime = (0, s.d)()));
          return;
        }
        if (a.touchReleaseOnEdges && !a.loop) {
          if (this.isVertical()) {
            if (
              (p < i.startY && this.translate <= this.maxTranslate()) ||
              (p > i.startY && this.translate >= this.minTranslate())
            ) {
              (o.isTouched = !1), (o.isMoved = !1);
              return;
            }
          } else if (
            (f < i.startX && this.translate <= this.maxTranslate()) ||
            (f > i.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          n.activeElement &&
          u.target === n.activeElement &&
          u.target.matches(o.focusableElements)
        ) {
          (o.isMoved = !0), (this.allowClick = !1);
          return;
        }
        o.allowTouchCallbacks && this.emit("touchMove", u),
          (i.previousX = i.currentX),
          (i.previousY = i.currentY),
          (i.currentX = f),
          (i.currentY = p);
        let g = i.currentX - i.startX,
          h = i.currentY - i.startY;
        if (
          this.params.threshold &&
          Math.sqrt(g ** 2 + h ** 2) < this.params.threshold
        )
          return;
        if (void 0 === o.isScrolling) {
          let e;
          (this.isHorizontal() && i.currentY === i.startY) ||
          (this.isVertical() && i.currentX === i.startX)
            ? (o.isScrolling = !1)
            : g * g + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(g))) / Math.PI),
              (o.isScrolling = this.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (o.isScrolling && this.emit("touchMoveOpposite", u),
          void 0 === o.startMoving &&
            (i.currentX !== i.startX || i.currentY !== i.startY) &&
            (o.startMoving = !0),
          o.isScrolling)
        ) {
          o.isTouched = !1;
          return;
        }
        if (!o.startMoving) return;
        (this.allowClick = !1),
          !a.cssMode && u.cancelable && u.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let m = this.isHorizontal() ? g : h,
          b = this.isHorizontal()
            ? i.currentX - i.previousX
            : i.currentY - i.previousY;
        a.oneWayMovement &&
          ((m = Math.abs(m) * (d ? 1 : -1)), (b = Math.abs(b) * (d ? 1 : -1))),
          (i.diff = m),
          (m *= a.touchRatio),
          d && ((m = -m), (b = -b));
        let y = this.touchesDirection;
        (this.swipeDirection = m > 0 ? "prev" : "next"),
          (this.touchesDirection = b > 0 ? "prev" : "next");
        let v = this.params.loop && !a.cssMode,
          x =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!o.isMoved) {
          if (
            (v && x && this.loopFix({ direction: this.swipeDirection }),
            (o.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (o.allowMomentumBounce = !1),
            a.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          o.isMoved &&
            o.allowThresholdMove &&
            y !== this.touchesDirection &&
            v &&
            x &&
            Math.abs(m) >= 1)
        ) {
          Object.assign(i, {
            startX: f,
            startY: p,
            currentX: f,
            currentY: p,
            startTranslate: o.currentTranslate,
          }),
            (o.loopSwapReset = !0),
            (o.startTranslate = o.currentTranslate);
          return;
        }
        this.emit("sliderMove", u),
          (o.isMoved = !0),
          (o.currentTranslate = m + o.startTranslate);
        let w = !0,
          k = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (k = 0),
          m > 0
            ? (v &&
                x &&
                !r &&
                o.allowThresholdMove &&
                o.currentTranslate >
                  (a.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1]
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              o.currentTranslate > this.minTranslate() &&
                ((w = !1),
                a.resistance &&
                  (o.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + o.startTranslate + m) ** k)))
            : m < 0 &&
              (v &&
                x &&
                !r &&
                o.allowThresholdMove &&
                o.currentTranslate <
                  (a.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1]
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === a.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              o.currentTranslate < this.maxTranslate() &&
                ((w = !1),
                a.resistance &&
                  (o.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - o.startTranslate - m) ** k))),
          w && (u.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            o.currentTranslate < o.startTranslate &&
            (o.currentTranslate = o.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            o.currentTranslate > o.startTranslate &&
            (o.currentTranslate = o.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (o.currentTranslate = o.startTranslate),
          a.threshold > 0)
        ) {
          if (Math.abs(m) > a.threshold || o.allowThresholdMove) {
            if (!o.allowThresholdMove) {
              (o.allowThresholdMove = !0),
                (i.startX = i.currentX),
                (i.startY = i.currentY),
                (o.currentTranslate = o.startTranslate),
                (i.diff = this.isHorizontal()
                  ? i.currentX - i.startX
                  : i.currentY - i.startY);
              return;
            }
          } else {
            o.currentTranslate = o.startTranslate;
            return;
          }
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && this.freeMode) ||
            a.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(o.currentTranslate),
          this.setTranslate(o.currentTranslate));
      }
      function b(e) {
        let t, r;
        let n = this,
          o = n.touchEventsData,
          a = e;
        if (
          (a.originalEvent && (a = a.originalEvent),
          "touchend" === a.type || "touchcancel" === a.type)
        ) {
          if (
            !(t = [...a.changedTouches].filter(
              (e) => e.identifier === o.touchId
            )[0]) ||
            t.identifier !== o.touchId
          )
            return;
        } else {
          if (null !== o.touchId || a.pointerId !== o.pointerId) return;
          t = a;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(a.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(a.type) &&
            (n.browser.isSafari || n.browser.isWebView)
          )
        )
          return;
        (o.pointerId = null), (o.touchId = null);
        let {
          params: i,
          touches: l,
          rtlTranslate: d,
          slidesGrid: c,
          enabled: u,
        } = n;
        if (!u || (!i.simulateTouch && "mouse" === a.pointerType)) return;
        if (
          (o.allowTouchCallbacks && n.emit("touchEnd", a),
          (o.allowTouchCallbacks = !1),
          !o.isTouched)
        ) {
          o.isMoved && i.grabCursor && n.setGrabCursor(!1),
            (o.isMoved = !1),
            (o.startMoving = !1);
          return;
        }
        i.grabCursor &&
          o.isMoved &&
          o.isTouched &&
          (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
          n.setGrabCursor(!1);
        let f = (0, s.d)(),
          p = f - o.touchStartTime;
        if (n.allowClick) {
          let e = a.path || (a.composedPath && a.composedPath());
          n.updateClickedSlide((e && e[0]) || a.target, e),
            n.emit("tap click", a),
            p < 300 &&
              f - o.lastClickTime < 300 &&
              n.emit("doubleTap doubleClick", a);
        }
        if (
          ((o.lastClickTime = (0, s.d)()),
          (0, s.n)(() => {
            n.destroyed || (n.allowClick = !0);
          }),
          !o.isTouched ||
            !o.isMoved ||
            !n.swipeDirection ||
            (0 === l.diff && !o.loopSwapReset) ||
            (o.currentTranslate === o.startTranslate && !o.loopSwapReset))
        ) {
          (o.isTouched = !1), (o.isMoved = !1), (o.startMoving = !1);
          return;
        }
        if (
          ((o.isTouched = !1),
          (o.isMoved = !1),
          (o.startMoving = !1),
          (r = i.followFinger
            ? d
              ? n.translate
              : -n.translate
            : -o.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode && i.freeMode.enabled) {
          n.freeMode.onTouchEnd({ currentPos: r });
          return;
        }
        let g = r >= -n.maxTranslate() && !n.params.loop,
          h = 0,
          m = n.slidesSizesGrid[0];
        for (
          let e = 0;
          e < c.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          let t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== c[e + t]
            ? (g || (r >= c[e] && r < c[e + t])) &&
              ((h = e), (m = c[e + t] - c[e]))
            : (g || r >= c[e]) &&
              ((h = e), (m = c[c.length - 1] - c[c.length - 2]));
        }
        let b = null,
          y = null;
        i.rewind &&
          (n.isBeginning
            ? (y =
                i.virtual && i.virtual.enabled && n.virtual
                  ? n.virtual.slides.length - 1
                  : n.slides.length - 1)
            : n.isEnd && (b = 0));
        let v = (r - c[h]) / m,
          x = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (p > i.longSwipesMs) {
          if (!i.longSwipes) {
            n.slideTo(n.activeIndex);
            return;
          }
          "next" === n.swipeDirection &&
            (v >= i.longSwipesRatio
              ? n.slideTo(i.rewind && n.isEnd ? b : h + x)
              : n.slideTo(h)),
            "prev" === n.swipeDirection &&
              (v > 1 - i.longSwipesRatio
                ? n.slideTo(h + x)
                : null !== y && v < 0 && Math.abs(v) > i.longSwipesRatio
                ? n.slideTo(y)
                : n.slideTo(h));
        } else {
          if (!i.shortSwipes) {
            n.slideTo(n.activeIndex);
            return;
          }
          n.navigation &&
          (a.target === n.navigation.nextEl || a.target === n.navigation.prevEl)
            ? a.target === n.navigation.nextEl
              ? n.slideTo(h + x)
              : n.slideTo(h)
            : ("next" === n.swipeDirection && n.slideTo(null !== b ? b : h + x),
              "prev" === n.swipeDirection && n.slideTo(null !== y ? y : h));
        }
      }
      function y() {
        let e = this,
          { params: t, el: r } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: n, allowSlidePrev: o, snapGrid: a } = e,
          i = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let l = i && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !i
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = o),
          (e.allowSlideNext = n),
          e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
      function v(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function x() {
        let { wrapperEl: e, rtlTranslate: t, enabled: r } = this;
        if (!r) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let n = this.maxTranslate() - this.minTranslate();
        (0 === n ? 0 : (this.translate - this.minTranslate()) / n) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function w(e) {
        c(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function k() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let E = (e, t) => {
          let r = (0, l.g)(),
            { params: n, el: o, wrapperEl: a, device: i } = e,
            s = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: s,
          }),
            o[d]("touchstart", e.onTouchStart, { passive: !1 }),
            o[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            r[d]("touchmove", e.onTouchMove, { passive: !1, capture: s }),
            r[d]("pointermove", e.onTouchMove, { passive: !1, capture: s }),
            r[d]("touchend", e.onTouchEnd, { passive: !0 }),
            r[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            r[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            r[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            r[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            r[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            r[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (n.preventClicks || n.preventClicksPropagation) &&
              o[d]("click", e.onClick, !0),
            n.cssMode && a[d]("scroll", e.onScroll),
            n.updateOnWindowResize
              ? e[t](
                  i.ios || i.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  y,
                  !0
                )
              : e[t]("observerUpdate", y, !0),
            o[d]("load", e.onLoad, { capture: !0 });
        },
        S = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var T = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let C = {
          eventsEmitter: {
            on(e, t, r) {
              let n = this;
              if (!n.eventsListeners || n.destroyed || "function" != typeof t)
                return n;
              let o = r ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  n.eventsListeners[e] || (n.eventsListeners[e] = []),
                    n.eventsListeners[e][o](t);
                }),
                n
              );
            },
            once(e, t, r) {
              let n = this;
              if (!n.eventsListeners || n.destroyed || "function" != typeof t)
                return n;
              function o() {
                n.off(e, o), o.__emitterProxy && delete o.__emitterProxy;
                for (var r = arguments.length, a = Array(r), i = 0; i < r; i++)
                  a[i] = arguments[i];
                t.apply(n, a);
              }
              return (o.__emitterProxy = t), n.on(e, o, r);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let r = this;
              return (
                r.eventsListeners &&
                  !r.destroyed &&
                  r.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (r.eventsListeners[e] = [])
                      : r.eventsListeners[e] &&
                        r.eventsListeners[e].forEach((n, o) => {
                          (n === t ||
                            (n.__emitterProxy && n.__emitterProxy === t)) &&
                            r.eventsListeners[e].splice(o, 1);
                        });
                  }),
                r
              );
            },
            emit() {
              let e, t, r;
              let n = this;
              if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
                return n;
              for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                a[i] = arguments[i];
              return (
                "string" == typeof a[0] || Array.isArray(a[0])
                  ? ((e = a[0]), (t = a.slice(1, a.length)), (r = n))
                  : ((e = a[0].events),
                    (t = a[0].data),
                    (r = a[0].context || n)),
                t.unshift(r),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  n.eventsAnyListeners &&
                    n.eventsAnyListeners.length &&
                    n.eventsAnyListeners.forEach((n) => {
                      n.apply(r, [e, ...t]);
                    }),
                    n.eventsListeners &&
                      n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((e) => {
                        e.apply(r, t);
                      });
                }),
                n
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let r = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : r.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : r.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, s.m)(r, "padding-left") || 0, 10) -
                    parseInt((0, s.m)(r, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, s.m)(r, "padding-top") || 0, 10) -
                    parseInt((0, s.m)(r, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function r(e, r) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(r)) || 0
                );
              }
              let n = t.params,
                {
                  wrapperEl: o,
                  slidesEl: a,
                  size: i,
                  rtlTranslate: l,
                  wrongRTL: d,
                } = t,
                c = t.virtual && n.virtual.enabled,
                u = c ? t.virtual.slides.length : t.slides.length,
                f = (0, s.e)(a, `.${t.params.slideClass}, swiper-slide`),
                p = c ? t.virtual.slides.length : f.length,
                g = [],
                h = [],
                m = [],
                b = n.slidesOffsetBefore;
              "function" == typeof b && (b = n.slidesOffsetBefore.call(t));
              let y = n.slidesOffsetAfter;
              "function" == typeof y && (y = n.slidesOffsetAfter.call(t));
              let v = t.snapGrid.length,
                x = t.slidesGrid.length,
                w = n.spaceBetween,
                k = -b,
                E = 0,
                S = 0;
              if (void 0 === i) return;
              "string" == typeof w && w.indexOf("%") >= 0
                ? (w = (parseFloat(w.replace("%", "")) / 100) * i)
                : "string" == typeof w && (w = parseFloat(w)),
                (t.virtualSize = -w),
                f.forEach((e) => {
                  l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                n.centeredSlides &&
                  n.cssMode &&
                  ((0, s.s)(o, "--swiper-centered-offset-before", ""),
                  (0, s.s)(o, "--swiper-centered-offset-after", ""));
              let T = n.grid && n.grid.rows > 1 && t.grid;
              T ? t.grid.initSlides(f) : t.grid && t.grid.unsetSlides();
              let C =
                "auto" === n.slidesPerView &&
                n.breakpoints &&
                Object.keys(n.breakpoints).filter(
                  (e) => void 0 !== n.breakpoints[e].slidesPerView
                ).length > 0;
              for (let o = 0; o < p; o += 1) {
                let a;
                if (
                  ((e = 0),
                  f[o] && (a = f[o]),
                  T && t.grid.updateSlide(o, a, f),
                  !f[o] || "none" !== (0, s.m)(a, "display"))
                ) {
                  if ("auto" === n.slidesPerView) {
                    C && (f[o].style[t.getDirectionLabel("width")] = "");
                    let i = getComputedStyle(a),
                      l = a.style.transform,
                      d = a.style.webkitTransform;
                    if (
                      (l && (a.style.transform = "none"),
                      d && (a.style.webkitTransform = "none"),
                      n.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, s.f)(a, "width", !0)
                        : (0, s.f)(a, "height", !0);
                    else {
                      let t = r(i, "width"),
                        n = r(i, "padding-left"),
                        o = r(i, "padding-right"),
                        l = r(i, "margin-left"),
                        s = r(i, "margin-right"),
                        d = i.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + l + s;
                      else {
                        let { clientWidth: r, offsetWidth: i } = a;
                        e = t + n + o + l + s + (i - r);
                      }
                    }
                    l && (a.style.transform = l),
                      d && (a.style.webkitTransform = d),
                      n.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (i - (n.slidesPerView - 1) * w) / n.slidesPerView),
                      n.roundLengths && (e = Math.floor(e)),
                      f[o] &&
                        (f[o].style[t.getDirectionLabel("width")] = `${e}px`);
                  f[o] && (f[o].swiperSlideSize = e),
                    m.push(e),
                    n.centeredSlides
                      ? ((k = k + e / 2 + E / 2 + w),
                        0 === E && 0 !== o && (k = k - i / 2 - w),
                        0 === o && (k = k - i / 2 - w),
                        0.001 > Math.abs(k) && (k = 0),
                        n.roundLengths && (k = Math.floor(k)),
                        S % n.slidesPerGroup == 0 && g.push(k),
                        h.push(k))
                      : (n.roundLengths && (k = Math.floor(k)),
                        (S - Math.min(t.params.slidesPerGroupSkip, S)) %
                          t.params.slidesPerGroup ==
                          0 && g.push(k),
                        h.push(k),
                        (k = k + e + w)),
                    (t.virtualSize += e + w),
                    (E = e),
                    (S += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, i) + y),
                l &&
                  d &&
                  ("slide" === n.effect || "coverflow" === n.effect) &&
                  (o.style.width = `${t.virtualSize + w}px`),
                n.setWrapperSize &&
                  (o.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + w
                  }px`),
                T && t.grid.updateWrapperSize(e, g),
                !n.centeredSlides)
              ) {
                let e = [];
                for (let r = 0; r < g.length; r += 1) {
                  let o = g[r];
                  n.roundLengths && (o = Math.floor(o)),
                    g[r] <= t.virtualSize - i && e.push(o);
                }
                (g = e),
                  Math.floor(t.virtualSize - i) - Math.floor(g[g.length - 1]) >
                    1 && g.push(t.virtualSize - i);
              }
              if (c && n.loop) {
                let e = m[0] + w;
                if (n.slidesPerGroup > 1) {
                  let r = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        n.slidesPerGroup
                    ),
                    o = e * n.slidesPerGroup;
                  for (let e = 0; e < r; e += 1) g.push(g[g.length - 1] + o);
                }
                for (
                  let r = 0;
                  r < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  r += 1
                )
                  1 === n.slidesPerGroup && g.push(g[g.length - 1] + e),
                    h.push(h[h.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === g.length && (g = [0]), 0 !== w)) {
                let e =
                  t.isHorizontal() && l
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                f.filter(
                  (e, t) => !n.cssMode || !!n.loop || t !== f.length - 1
                ).forEach((t) => {
                  t.style[e] = `${w}px`;
                });
              }
              if (n.centeredSlides && n.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t) => {
                  e += t + (w || 0);
                });
                let t = (e -= w) - i;
                g = g.map((e) => (e <= 0 ? -b : e > t ? t + y : e));
              }
              if (n.centerInsufficientSlides) {
                let e = 0;
                if (
                  (m.forEach((t) => {
                    e += t + (w || 0);
                  }),
                  (e -= w) < i)
                ) {
                  let t = (i - e) / 2;
                  g.forEach((e, r) => {
                    g[r] = e - t;
                  }),
                    h.forEach((e, r) => {
                      h[r] = e + t;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: f,
                  snapGrid: g,
                  slidesGrid: h,
                  slidesSizesGrid: m,
                }),
                n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
              ) {
                (0, s.s)(o, "--swiper-centered-offset-before", `${-g[0]}px`),
                  (0, s.s)(
                    o,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - m[m.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  r = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + r));
              }
              if (
                (p !== u && t.emit("slidesLengthChange"),
                g.length !== v &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                h.length !== x && t.emit("slidesGridLengthChange"),
                n.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !c &&
                  !n.cssMode &&
                  ("slide" === n.effect || "fade" === n.effect))
              ) {
                let e = `${n.containerModifierClass}backface-hidden`,
                  r = t.el.classList.contains(e);
                p <= n.maxBackfaceHiddenSlides
                  ? r || t.el.classList.add(e)
                  : r && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let r = this,
                n = [],
                o = r.virtual && r.params.virtual.enabled,
                a = 0;
              "number" == typeof e
                ? r.setTransition(e)
                : !0 === e && r.setTransition(r.params.speed);
              let i = (e) =>
                o ? r.slides[r.getSlideIndexByData(e)] : r.slides[e];
              if (
                "auto" !== r.params.slidesPerView &&
                r.params.slidesPerView > 1
              ) {
                if (r.params.centeredSlides)
                  (r.visibleSlides || []).forEach((e) => {
                    n.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
                    let e = r.activeIndex + t;
                    if (e > r.slides.length && !o) break;
                    n.push(i(e));
                  }
              } else n.push(i(r.activeIndex));
              for (t = 0; t < n.length; t += 1)
                if (void 0 !== n[t]) {
                  let e = n[t].offsetHeight;
                  a = e > a ? e : a;
                }
              (a || 0 === a) && (r.wrapperEl.style.height = `${a}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let r = 0; r < e.length; r += 1)
                e[r].swiperSlideOffset =
                  (this.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: r, rtlTranslate: n, snapGrid: o } = this;
              if (0 === r.length) return;
              void 0 === r[0].swiperSlideOffset && this.updateSlidesOffset();
              let a = -e;
              n && (a = e),
                r.forEach((e) => {
                  e.classList.remove(
                    t.slideVisibleClass,
                    t.slideFullyVisibleClass
                  );
                }),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let i = t.spaceBetween;
              "string" == typeof i && i.indexOf("%") >= 0
                ? (i = (parseFloat(i.replace("%", "")) / 100) * this.size)
                : "string" == typeof i && (i = parseFloat(i));
              for (let e = 0; e < r.length; e += 1) {
                let l = r[e],
                  s = l.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (s -= r[0].swiperSlideOffset);
                let d =
                    (a + (t.centeredSlides ? this.minTranslate() : 0) - s) /
                    (l.swiperSlideSize + i),
                  c =
                    (a -
                      o[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      s) /
                    (l.swiperSlideSize + i),
                  u = -(a - s),
                  f = u + this.slidesSizesGrid[e],
                  p = u >= 0 && u <= this.size - this.slidesSizesGrid[e];
                ((u >= 0 && u < this.size - 1) ||
                  (f > 1 && f <= this.size) ||
                  (u <= 0 && f >= this.size)) &&
                  (this.visibleSlides.push(l),
                  this.visibleSlidesIndexes.push(e),
                  r[e].classList.add(t.slideVisibleClass)),
                  p && r[e].classList.add(t.slideFullyVisibleClass),
                  (l.progress = n ? -d : d),
                  (l.originalProgress = n ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                r = this.maxTranslate() - this.minTranslate(),
                {
                  progress: n,
                  isBeginning: o,
                  isEnd: a,
                  progressLoop: i,
                } = this,
                l = o,
                s = a;
              if (0 === r) (n = 0), (o = !0), (a = !0);
              else {
                n = (e - this.minTranslate()) / r;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  i = 1 > Math.abs(e - this.maxTranslate());
                (o = t || n <= 0),
                  (a = i || n >= 1),
                  t && (n = 0),
                  i && (n = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  r = this.getSlideIndexByData(this.slides.length - 1),
                  n = this.slidesGrid[t],
                  o = this.slidesGrid[r],
                  a = this.slidesGrid[this.slidesGrid.length - 1],
                  l = Math.abs(e);
                (i = l >= n ? (l - n) / a : (l + a - o) / a) > 1 && (i -= 1);
              }
              Object.assign(this, {
                progress: n,
                progressLoop: i,
                isBeginning: o,
                isEnd: a,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                o && !l && this.emit("reachBeginning toEdge"),
                a && !s && this.emit("reachEnd toEdge"),
                ((l && !o) || (s && !a)) && this.emit("fromEdge"),
                this.emit("progress", n);
            },
            updateSlidesClasses: function () {
              let e, t, r;
              let { slides: n, params: o, slidesEl: a, activeIndex: i } = this,
                l = this.virtual && o.virtual.enabled,
                d = this.grid && o.grid && o.grid.rows > 1,
                c = (e) =>
                  (0, s.e)(a, `.${o.slideClass}${e}, swiper-slide${e}`)[0];
              if (
                (n.forEach((e) => {
                  e.classList.remove(
                    o.slideActiveClass,
                    o.slideNextClass,
                    o.slidePrevClass
                  );
                }),
                l)
              ) {
                if (o.loop) {
                  let t = i - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = c(`[data-swiper-slide-index="${t}"]`));
                } else e = c(`[data-swiper-slide-index="${i}"]`);
              } else
                d
                  ? ((e = n.filter((e) => e.column === i)[0]),
                    (r = n.filter((e) => e.column === i + 1)[0]),
                    (t = n.filter((e) => e.column === i - 1)[0]))
                  : (e = n[i]);
              e &&
                (e.classList.add(o.slideActiveClass),
                d
                  ? r && r.classList.add(o.slideNextClass)
                  : ((r = (0, s.o)(e, `.${o.slideClass}, swiper-slide`)[0]),
                    o.loop && !r && (r = n[0]),
                    r && r.classList.add(o.slideNextClass),
                    (t = (0, s.p)(e, `.${o.slideClass}, swiper-slide`)[0]),
                    o.loop),
                t && t.classList.add(o.slidePrevClass)),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, r;
              let n = this,
                o = n.rtlTranslate ? n.translate : -n.translate,
                {
                  snapGrid: a,
                  params: i,
                  activeIndex: l,
                  realIndex: s,
                  snapIndex: d,
                } = n,
                c = e,
                u = (e) => {
                  let t = e - n.virtual.slidesBefore;
                  return (
                    t < 0 && (t = n.virtual.slides.length + t),
                    t >= n.virtual.slides.length &&
                      (t -= n.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: r, params: n } = e,
                      o = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < r.length; e += 1)
                      void 0 !== r[e + 1]
                        ? o >= r[e] && o < r[e + 1] - (r[e + 1] - r[e]) / 2
                          ? (t = e)
                          : o >= r[e] && o < r[e + 1] && (t = e + 1)
                        : o >= r[e] && (t = e);
                    return (
                      n.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(n)),
                a.indexOf(o) >= 0)
              )
                t = a.indexOf(o);
              else {
                let e = Math.min(i.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / i.slidesPerGroup);
              }
              if (
                (t >= a.length && (t = a.length - 1), c === l && !n.params.loop)
              ) {
                t !== d && ((n.snapIndex = t), n.emit("snapIndexChange"));
                return;
              }
              if (
                c === l &&
                n.params.loop &&
                n.virtual &&
                n.params.virtual.enabled
              ) {
                n.realIndex = u(c);
                return;
              }
              let p = n.grid && i.grid && i.grid.rows > 1;
              if (n.virtual && i.virtual.enabled && i.loop) r = u(c);
              else if (p) {
                let e = n.slides.filter((e) => e.column === c)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(n.slides.indexOf(e), 0)),
                  (r = Math.floor(t / i.grid.rows));
              } else if (n.slides[c]) {
                let e = n.slides[c].getAttribute("data-swiper-slide-index");
                r = e ? parseInt(e, 10) : c;
              } else r = c;
              Object.assign(n, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: s,
                realIndex: r,
                previousIndex: l,
                activeIndex: c,
              }),
                n.initialized && f(n),
                n.emit("activeIndexChange"),
                n.emit("snapIndexChange"),
                (n.initialized || n.params.runCallbacksOnInit) &&
                  (s !== r && n.emit("realIndexChange"), n.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let r;
              let n = this.params,
                o = e.closest(`.${n.slideClass}, swiper-slide`);
              !o &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !o &&
                    e.matches &&
                    e.matches(`.${n.slideClass}, swiper-slide`) &&
                    (o = e);
                });
              let a = !1;
              if (o) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === o) {
                    (a = !0), (r = e);
                    break;
                  }
              }
              if (o && a)
                (this.clickedSlide = o),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        o.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = r);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              n.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: o,
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let a = (0, s.i)(o, e);
              return (a += this.cssOverflowAdjustment()), r && (a = -a), a || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: r,
                  params: n,
                  wrapperEl: o,
                  progress: a,
                } = this,
                i = 0,
                l = 0;
              this.isHorizontal() ? (i = r ? -e : e) : (l = e),
                n.roundLengths && ((i = Math.floor(i)), (l = Math.floor(l))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? i : l),
                n.cssMode
                  ? (o[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -i : -l)
                  : n.virtualTranslate ||
                    (this.isHorizontal()
                      ? (i -= this.cssOverflowAdjustment())
                      : (l -= this.cssOverflowAdjustment()),
                    (o.style.transform = `translate3d(${i}px, ${l}px, 0px)`));
              let s = this.maxTranslate() - this.minTranslate();
              (0 === s ? 0 : (e - this.minTranslate()) / s) !== a &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, r, n, o) {
              let a;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === r && (r = !0),
                void 0 === n && (n = !0);
              let i = this,
                { params: l, wrapperEl: d } = i;
              if (i.animating && l.preventInteractionOnTransition) return !1;
              let c = i.minTranslate(),
                u = i.maxTranslate();
              if (
                ((a = n && e > c ? c : n && e < u ? u : e),
                i.updateProgress(a),
                l.cssMode)
              ) {
                let e = i.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -a;
                else {
                  if (!i.support.smoothScroll)
                    return (
                      (0, s.q)({
                        swiper: i,
                        targetPosition: -a,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -a, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (i.setTransition(0),
                    i.setTranslate(a),
                    r &&
                      (i.emit("beforeTransitionStart", t, o),
                      i.emit("transitionEnd")))
                  : (i.setTransition(t),
                    i.setTranslate(a),
                    r &&
                      (i.emit("beforeTransitionStart", t, o),
                      i.emit("transitionStart")),
                    i.animating ||
                      ((i.animating = !0),
                      i.onTranslateToWrapperTransitionEnd ||
                        (i.onTranslateToWrapperTransitionEnd = function (e) {
                          i &&
                            !i.destroyed &&
                            e.target === this &&
                            (i.wrapperEl.removeEventListener(
                              "transitionend",
                              i.onTranslateToWrapperTransitionEnd
                            ),
                            (i.onTranslateToWrapperTransitionEnd = null),
                            delete i.onTranslateToWrapperTransitionEnd,
                            r && i.emit("transitionEnd"));
                        }),
                      i.wrapperEl.addEventListener(
                        "transitionend",
                        i.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: r } = this;
              r.cssMode ||
                (r.autoHeight && this.updateAutoHeight(),
                p({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: r } = this;
              (this.animating = !1),
                r.cssMode ||
                  (this.setTransition(0),
                  p({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, r, n, o) {
              let a;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let i = this,
                l = e;
              l < 0 && (l = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: u,
                previousIndex: f,
                activeIndex: p,
                rtlTranslate: g,
                wrapperEl: h,
                enabled: m,
              } = i;
              if (
                (i.animating && d.preventInteractionOnTransition) ||
                (!m && !n && !o)
              )
                return !1;
              let b = Math.min(i.params.slidesPerGroupSkip, l),
                y = b + Math.floor((l - b) / i.params.slidesPerGroup);
              y >= c.length && (y = c.length - 1);
              let v = -c[y];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < u.length; e += 1) {
                  let t = -Math.floor(100 * v),
                    r = Math.floor(100 * u[e]),
                    n = Math.floor(100 * u[e + 1]);
                  void 0 !== u[e + 1]
                    ? t >= r && t < n - (n - r) / 2
                      ? (l = e)
                      : t >= r && t < n && (l = e + 1)
                    : t >= r && (l = e);
                }
              if (
                i.initialized &&
                l !== p &&
                ((!i.allowSlideNext &&
                  (g
                    ? v > i.translate && v > i.minTranslate()
                    : v < i.translate && v < i.minTranslate())) ||
                  (!i.allowSlidePrev &&
                    v > i.translate &&
                    v > i.maxTranslate() &&
                    (p || 0) !== l))
              )
                return !1;
              if (
                (l !== (f || 0) && r && i.emit("beforeSlideChangeStart"),
                i.updateProgress(v),
                (a = l > p ? "next" : l < p ? "prev" : "reset"),
                (g && -v === i.translate) || (!g && v === i.translate))
              )
                return (
                  i.updateActiveIndex(l),
                  d.autoHeight && i.updateAutoHeight(),
                  i.updateSlidesClasses(),
                  "slide" !== d.effect && i.setTranslate(v),
                  "reset" !== a &&
                    (i.transitionStart(r, a), i.transitionEnd(r, a)),
                  !1
                );
              if (d.cssMode) {
                let e = i.isHorizontal(),
                  r = g ? v : -v;
                if (0 === t) {
                  let t = i.virtual && i.params.virtual.enabled;
                  t &&
                    ((i.wrapperEl.style.scrollSnapType = "none"),
                    (i._immediateVirtual = !0)),
                    t &&
                    !i._cssModeVirtualInitialSet &&
                    i.params.initialSlide > 0
                      ? ((i._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          h[e ? "scrollLeft" : "scrollTop"] = r;
                        }))
                      : (h[e ? "scrollLeft" : "scrollTop"] = r),
                    t &&
                      requestAnimationFrame(() => {
                        (i.wrapperEl.style.scrollSnapType = ""),
                          (i._immediateVirtual = !1);
                      });
                } else {
                  if (!i.support.smoothScroll)
                    return (
                      (0, s.q)({
                        swiper: i,
                        targetPosition: r,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
                }
                return !0;
              }
              return (
                i.setTransition(t),
                i.setTranslate(v),
                i.updateActiveIndex(l),
                i.updateSlidesClasses(),
                i.emit("beforeTransitionStart", t, n),
                i.transitionStart(r, a),
                0 === t
                  ? i.transitionEnd(r, a)
                  : i.animating ||
                    ((i.animating = !0),
                    i.onSlideToWrapperTransitionEnd ||
                      (i.onSlideToWrapperTransitionEnd = function (e) {
                        i &&
                          !i.destroyed &&
                          e.target === this &&
                          (i.wrapperEl.removeEventListener(
                            "transitionend",
                            i.onSlideToWrapperTransitionEnd
                          ),
                          (i.onSlideToWrapperTransitionEnd = null),
                          delete i.onSlideToWrapperTransitionEnd,
                          i.transitionEnd(r, a));
                      }),
                    i.wrapperEl.addEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, r, n) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === r && (r = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let o = this,
                a = o.grid && o.params.grid && o.params.grid.rows > 1,
                i = e;
              if (o.params.loop) {
                if (o.virtual && o.params.virtual.enabled)
                  i += o.virtual.slidesBefore;
                else {
                  let e;
                  if (a) {
                    let t = i * o.params.grid.rows;
                    e = o.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = o.getSlideIndexByData(i);
                  let t = a
                      ? Math.ceil(o.slides.length / o.params.grid.rows)
                      : o.slides.length,
                    { centeredSlides: r } = o.params,
                    n = o.params.slidesPerView;
                  "auto" === n
                    ? (n = o.slidesPerViewDynamic())
                    : ((n = Math.ceil(parseFloat(o.params.slidesPerView, 10))),
                      r && n % 2 == 0 && (n += 1));
                  let l = t - e < n;
                  if ((r && (l = l || e < Math.ceil(n / 2)), l)) {
                    let n = r
                      ? e < o.activeIndex
                        ? "prev"
                        : "next"
                      : e - o.activeIndex - 1 < o.params.slidesPerView
                      ? "next"
                      : "prev";
                    o.loopFix({
                      direction: n,
                      slideTo: !0,
                      activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === n ? o.realIndex : void 0,
                    });
                  }
                  if (a) {
                    let e = i * o.params.grid.rows;
                    i = o.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else i = o.getSlideIndexByData(i);
                }
              }
              return (
                requestAnimationFrame(() => {
                  o.slideTo(i, t, r, n);
                }),
                o
              );
            },
            slideNext: function (e, t, r) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              let n = this,
                { enabled: o, params: a, animating: i } = n;
              if (!o) return n;
              let l = a.slidesPerGroup;
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
              let s = n.activeIndex < a.slidesPerGroupSkip ? 1 : l,
                d = n.virtual && a.virtual.enabled;
              if (a.loop) {
                if (i && !d && a.loopPreventsSliding) return !1;
                if (
                  (n.loopFix({ direction: "next" }),
                  (n._clientLeft = n.wrapperEl.clientLeft),
                  n.activeIndex === n.slides.length - 1 && a.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      n.slideTo(n.activeIndex + s, e, t, r);
                    }),
                    !0
                  );
              }
              return a.rewind && n.isEnd
                ? n.slideTo(0, e, t, r)
                : n.slideTo(n.activeIndex + s, e, t, r);
            },
            slidePrev: function (e, t, r) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              let n = this,
                {
                  params: o,
                  snapGrid: a,
                  slidesGrid: i,
                  rtlTranslate: l,
                  enabled: s,
                  animating: d,
                } = n;
              if (!s) return n;
              let c = n.virtual && o.virtual.enabled;
              if (o.loop) {
                if (d && !c && o.loopPreventsSliding) return !1;
                n.loopFix({ direction: "prev" }),
                  (n._clientLeft = n.wrapperEl.clientLeft);
              }
              function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let f = u(l ? n.translate : -n.translate),
                p = a.map((e) => u(e)),
                g = a[p.indexOf(f) - 1];
              if (void 0 === g && o.cssMode) {
                let e;
                a.forEach((t, r) => {
                  f >= t && (e = r);
                }),
                  void 0 !== e && (g = a[e > 0 ? e - 1 : e]);
              }
              let h = 0;
              if (
                (void 0 !== g &&
                  ((h = i.indexOf(g)) < 0 && (h = n.activeIndex - 1),
                  "auto" === o.slidesPerView &&
                    1 === o.slidesPerGroup &&
                    o.slidesPerGroupAuto &&
                    (h = Math.max(
                      (h = h - n.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                o.rewind && n.isBeginning)
              ) {
                let o =
                  n.params.virtual && n.params.virtual.enabled && n.virtual
                    ? n.virtual.slides.length - 1
                    : n.slides.length - 1;
                return n.slideTo(o, e, t, r);
              }
              return o.loop && 0 === n.activeIndex && o.cssMode
                ? (requestAnimationFrame(() => {
                    n.slideTo(h, e, t, r);
                  }),
                  !0)
                : n.slideTo(h, e, t, r);
            },
            slideReset: function (e, t, r) {
              return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, r)
              );
            },
            slideToClosest: function (e, t, r, n) {
              void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === n && (n = 0.5);
              let o = this.activeIndex,
                a = Math.min(this.params.slidesPerGroupSkip, o),
                i = a + Math.floor((o - a) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate;
              if (l >= this.snapGrid[i]) {
                let e = this.snapGrid[i];
                l - e > (this.snapGrid[i + 1] - e) * n &&
                  (o += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[i - 1];
                l - e <= (this.snapGrid[i] - e) * n &&
                  (o -= this.params.slidesPerGroup);
              }
              return (
                (o = Math.min(
                  (o = Math.max(o, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(o, e, t, r)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this,
                { params: r, slidesEl: n } = t,
                o =
                  "auto" === r.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : r.slidesPerView,
                a = t.clickedIndex,
                i = t.isElement ? "swiper-slide" : `.${r.slideClass}`;
              if (r.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  r.centeredSlides
                    ? a < t.loopedSlides - o / 2 ||
                      a > t.slides.length - t.loopedSlides + o / 2
                      ? (t.loopFix(),
                        (a = t.getSlideIndex(
                          (0, s.e)(n, `${i}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, s.n)(() => {
                          t.slideTo(a);
                        }))
                      : t.slideTo(a)
                    : a > t.slides.length - o
                    ? (t.loopFix(),
                      (a = t.getSlideIndex(
                        (0, s.e)(n, `${i}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, s.n)(() => {
                        t.slideTo(a);
                      }))
                    : t.slideTo(a);
              } else t.slideTo(a);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: r, slidesEl: n } = t;
              if (!r.loop || (t.virtual && t.params.virtual.enabled)) return;
              let o = t.grid && r.grid && r.grid.rows > 1,
                a = r.slidesPerGroup * (o ? r.grid.rows : 1),
                i = t.slides.length % a != 0,
                l = o && t.slides.length % r.grid.rows != 0,
                d = (e) => {
                  for (let n = 0; n < e; n += 1) {
                    let e = t.isElement
                      ? (0, s.c)("swiper-slide", [r.slideBlankClass])
                      : (0, s.c)("div", [r.slideClass, r.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              i
                ? r.loopAddBlankSlides
                  ? (d(a - (t.slides.length % a)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, s.r)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : l &&
                  (r.loopAddBlankSlides
                    ? (d(r.grid.rows - (t.slides.length % r.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, s.r)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, s.e)(n, `.${r.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: r.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: r = !0,
                  direction: n,
                  setTranslate: o,
                  activeSlideIndex: a,
                  byController: i,
                  byMousewheel: l,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: f,
                  slidesEl: p,
                  params: g,
                } = d,
                { centeredSlides: h } = g;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && g.virtual.enabled)
              ) {
                r &&
                  (g.centeredSlides || 0 !== d.snapIndex
                    ? g.centeredSlides && d.snapIndex < g.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = f),
                  d.emit("loopFix");
                return;
              }
              let m = g.slidesPerView;
              "auto" === m
                ? (m = d.slidesPerViewDynamic())
                : ((m = Math.ceil(parseFloat(g.slidesPerView, 10))),
                  h && m % 2 == 0 && (m += 1));
              let b = g.slidesPerGroupAuto ? m : g.slidesPerGroup,
                y = b;
              y % b != 0 && (y += b - (y % b)),
                (y += g.loopAdditionalSlides),
                (d.loopedSlides = y);
              let v = d.grid && g.grid && g.grid.rows > 1;
              c.length < m + y
                ? (0, s.r)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : v &&
                  "row" === g.grid.fill &&
                  (0, s.r)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let x = [],
                w = [],
                k = d.activeIndex;
              void 0 === a
                ? (a = d.getSlideIndex(
                    c.filter((e) => e.classList.contains(g.slideActiveClass))[0]
                  ))
                : (k = a);
              let E = "next" === n || !n,
                S = "prev" === n || !n,
                T = 0,
                C = 0,
                j = v ? Math.ceil(c.length / g.grid.rows) : c.length,
                M =
                  (v ? c[a].column : a) +
                  (h && void 0 === o ? -m / 2 + 0.5 : 0);
              if (M < y) {
                T = Math.max(y - M, b);
                for (let e = 0; e < y - M; e += 1) {
                  let t = e - Math.floor(e / j) * j;
                  if (v) {
                    let e = j - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && x.push(t);
                  } else x.push(j - t - 1);
                }
              } else if (M + m > j - y) {
                C = Math.max(M - (j - 2 * y), b);
                for (let e = 0; e < C; e += 1) {
                  let t = e - Math.floor(e / j) * j;
                  v
                    ? c.forEach((e, r) => {
                        e.column === t && w.push(r);
                      })
                    : w.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                S &&
                  x.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      p.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                E &&
                  w.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      p.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === g.slidesPerView
                  ? d.updateSlides()
                  : v &&
                    ((x.length > 0 && S) || (w.length > 0 && E)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                g.watchSlidesProgress && d.updateSlidesOffset(),
                r)
              ) {
                if (x.length > 0 && S) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[k],
                      t = d.slidesGrid[k + T] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(k + T, 0, !1, !0),
                        o &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (o) {
                    let e = v ? x.length / g.grid.rows : x.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (w.length > 0 && E) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[k],
                      t = d.slidesGrid[k - C] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(k - C, 0, !1, !0),
                        o &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = v ? w.length / g.grid.rows : w.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = f),
                d.controller && d.controller.control && !i)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: n,
                  setTranslate: o,
                  activeSlideIndex: a,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === g.slidesPerView && r,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          g.slidesPerView && r,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let r = [];
              this.slides.forEach((e) => {
                r[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                r.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let r =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (r.style.cursor = "move"),
                (r.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = h.bind(this)),
                (this.onTouchMove = m.bind(this)),
                (this.onTouchEnd = b.bind(this)),
                (this.onDocumentTouchStart = k.bind(this)),
                e.cssMode && (this.onScroll = x.bind(this)),
                (this.onClick = v.bind(this)),
                (this.onLoad = w.bind(this)),
                E(this, "on");
            },
            detachEvents: function () {
              E(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: r, params: n, el: o } = e,
                a = n.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              let i = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
              if (!i || e.currentBreakpoint === i) return;
              let l = (i in a ? a[i] : void 0) || e.originalParams,
                d = S(e, n),
                c = S(e, l),
                u = n.enabled;
              d && !c
                ? (o.classList.remove(
                    `${n.containerModifierClass}grid`,
                    `${n.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (o.classList.add(`${n.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === n.grid.fill)) &&
                    o.classList.add(`${n.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === l[t]) return;
                  let r = n[t] && n[t].enabled,
                    o = l[t] && l[t].enabled;
                  r && !o && e[t].disable(), !r && o && e[t].enable();
                });
              let f = l.direction && l.direction !== n.direction,
                p = n.loop && (l.slidesPerView !== n.slidesPerView || f),
                g = n.loop;
              f && r && e.changeDirection(), (0, s.t)(e.params, l);
              let h = e.params.enabled,
                m = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !h ? e.disable() : !u && h && e.enable(),
                (e.currentBreakpoint = i),
                e.emit("_beforeBreakpoint", l),
                r &&
                  (p
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && m
                    ? (e.loopCreate(t), e.updateSlides())
                    : g && !m && e.loopDestroy()),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t, r) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !r))
              )
                return;
              let n = !1,
                o = (0, l.a)(),
                a = "window" === t ? o.innerHeight : r.clientHeight,
                i = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: a * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < i.length; e += 1) {
                let { point: a, value: l } = i[e];
                "window" === t
                  ? o.matchMedia(`(min-width: ${l}px)`).matches && (n = a)
                  : l <= r.clientWidth && (n = a);
              }
              return n || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: r } = t;
              if (r) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * r;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: r, el: n, device: o } = this,
                a = (function (e, t) {
                  let r = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((n) => {
                            e[n] && r.push(t + n);
                          })
                        : "string" == typeof e && r.push(t + e);
                    }),
                    r
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: r },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: o.android },
                    { ios: o.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...a), n.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        j = {};
      class M {
        constructor() {
          let e, t;
          for (var r, n = arguments.length, i = Array(n), c = 0; c < n; c++)
            i[c] = arguments[c];
          1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
            t || (t = {}),
            (t = (0, s.t)({}, t)),
            e && !t.el && (t.el = e);
          let u = (0, l.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            u.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              u.querySelectorAll(t.el).forEach((r) => {
                let n = (0, s.t)({}, t, { el: r });
                e.push(new M(n));
              }),
              e
            );
          }
          let f = this;
          (f.__swiper__ = !0),
            (f.support = d()),
            (f.device =
              ((r = { userAgent: t.userAgent }),
              o ||
                (o = (function (e) {
                  let { userAgent: t } = void 0 === e ? {} : e,
                    r = d(),
                    n = (0, l.a)(),
                    o = n.navigator.platform,
                    a = t || n.navigator.userAgent,
                    i = { ios: !1, android: !1 },
                    s = n.screen.width,
                    c = n.screen.height,
                    u = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                    f = a.match(/(iPad).*OS\s([\d_]+)/),
                    p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    g = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "MacIntel" === o;
                  return (
                    !f &&
                      h &&
                      r.touch &&
                      [
                        "1024x1366",
                        "1366x1024",
                        "834x1194",
                        "1194x834",
                        "834x1112",
                        "1112x834",
                        "768x1024",
                        "1024x768",
                        "820x1180",
                        "1180x820",
                        "810x1080",
                        "1080x810",
                      ].indexOf(`${s}x${c}`) >= 0 &&
                      ((f = a.match(/(Version)\/([\d.]+)/)) ||
                        (f = [0, 1, "13_0_0"]),
                      (h = !1)),
                    u &&
                      "Win32" !== o &&
                      ((i.os = "android"), (i.android = !0)),
                    (f || g || p) && ((i.os = "ios"), (i.ios = !0)),
                    i
                  );
                })(r)),
              o)),
            (f.browser =
              (a ||
                (a = (function () {
                  let e = (0, l.a)(),
                    t = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let r = String(e.navigator.userAgent);
                    if (r.includes("Version/")) {
                      let [e, n] = r
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      t = e < 16 || (16 === e && n < 2);
                    }
                  }
                  return {
                    isSafari: t || r(),
                    needPerspectiveFix: t,
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              a)),
            (f.eventsListeners = {}),
            (f.eventsAnyListeners = []),
            (f.modules = [...f.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              f.modules.push(...t.modules);
          let p = {};
          f.modules.forEach((e) => {
            var r;
            e({
              params: t,
              swiper: f,
              extendParams:
                ((r = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    n = e[t];
                  if (
                    "object" != typeof n ||
                    null === n ||
                    (!0 === r[t] && (r[t] = { enabled: !0 }),
                    "navigation" === t &&
                      r[t] &&
                      r[t].enabled &&
                      !r[t].prevEl &&
                      !r[t].nextEl &&
                      (r[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      r[t] &&
                      r[t].enabled &&
                      !r[t].el &&
                      (r[t].auto = !0),
                    !(t in r && "enabled" in n))
                  ) {
                    (0, s.t)(p, e);
                    return;
                  }
                  "object" != typeof r[t] ||
                    "enabled" in r[t] ||
                    (r[t].enabled = !0),
                    r[t] || (r[t] = { enabled: !1 }),
                    (0, s.t)(p, e);
                }),
              on: f.on.bind(f),
              once: f.once.bind(f),
              off: f.off.bind(f),
              emit: f.emit.bind(f),
            });
          });
          let g = (0, s.t)({}, T, p);
          return (
            (f.params = (0, s.t)({}, g, j, t)),
            (f.originalParams = (0, s.t)({}, f.params)),
            (f.passedParams = (0, s.t)({}, t)),
            f.params &&
              f.params.on &&
              Object.keys(f.params.on).forEach((e) => {
                f.on(e, f.params.on[e]);
              }),
            f.params && f.params.onAny && f.onAny(f.params.onAny),
            Object.assign(f, {
              enabled: f.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === f.params.direction,
              isVertical: () => "vertical" === f.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: f.params.allowSlideNext,
              allowSlidePrev: f.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: f.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: f.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            f.emit("_swiper"),
            f.params.init && f.init(),
            f
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: r } = this,
            n = (0, s.e)(t, `.${r.slideClass}, swiper-slide`),
            o = (0, s.g)(n[0]);
          return (0, s.g)(e) - o;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, s.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let r = this.minTranslate(),
            n = (this.maxTranslate() - r) * e + r;
          this.translateTo(n, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((r) => {
            let n = e.getSlideClasses(r);
            t.push({ slideEl: r, classNames: n }), e.emit("_slideClass", r, n);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: r,
              slides: n,
              slidesGrid: o,
              slidesSizesGrid: a,
              size: i,
              activeIndex: l,
            } = this,
            s = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e,
              t = n[l] ? n[l].swiperSlideSize : 0;
            for (let r = l + 1; r < n.length; r += 1)
              n[r] &&
                !e &&
                ((t += n[r].swiperSlideSize), (s += 1), t > i && (e = !0));
            for (let r = l - 1; r >= 0; r -= 1)
              n[r] &&
                !e &&
                ((t += n[r].swiperSlideSize), (s += 1), t > i && (e = !0));
          } else if ("current" === e)
            for (let e = l + 1; e < n.length; e += 1)
              (t ? o[e] + a[e] - o[l] < i : o[e] - o[l] < i) && (s += 1);
          else for (let e = l - 1; e >= 0; e -= 1) o[l] - o[e] < i && (s += 1);
          return s;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: r, params: n } = t;
          function o() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (n.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && c(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            o(), n.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
              t.isEnd &&
              !n.centeredSlides
            ) {
              let r =
                t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(r.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || o();
          }
          n.watchOverflow && r !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let r = this.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${r}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if (("string" == typeof r && (r = document.querySelector(r)), !r))
            return !1;
          (r.swiper = t),
            r.parentNode &&
              r.parentNode.host &&
              "SWIPER-CONTAINER" === r.parentNode.host.nodeName &&
              (t.isElement = !0);
          let n = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            o =
              r && r.shadowRoot && r.shadowRoot.querySelector
                ? r.shadowRoot.querySelector(n())
                : (0, s.e)(r, n())[0];
          return (
            !o &&
              t.params.createElements &&
              ((o = (0, s.c)("div", t.params.wrapperClass)),
              r.append(o),
              (0, s.e)(r, `.${t.params.slideClass}`).forEach((e) => {
                o.append(e);
              })),
            Object.assign(t, {
              el: r,
              wrapperEl: o,
              slidesEl:
                t.isElement && !r.parentNode.host.slideSlots
                  ? r.parentNode.host
                  : o,
              hostEl: t.isElement ? r.parentNode.host : r,
              mounted: !0,
              rtl:
                "rtl" === r.dir.toLowerCase() ||
                "rtl" === (0, s.m)(r, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === r.dir.toLowerCase() ||
                  "rtl" === (0, s.m)(r, "direction")),
              wrongRTL: "-webkit-box" === (0, s.m)(o, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            r.forEach((e) => {
              e.complete
                ? c(t, e)
                : e.addEventListener("load", (e) => {
                    c(t, e.target);
                  });
            }),
            f(t),
            (t.initialized = !0),
            f(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let r = this,
            { params: n, el: o, wrapperEl: a, slides: i } = r;
          return (
            void 0 === r.params ||
              r.destroyed ||
              (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              n.loop && r.loopDestroy(),
              t &&
                (r.removeClasses(),
                o.removeAttribute("style"),
                a.removeAttribute("style"),
                i &&
                  i.length &&
                  i.forEach((e) => {
                    e.classList.remove(
                      n.slideVisibleClass,
                      n.slideFullyVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e && ((r.el.swiper = null), (0, s.u)(r)),
              (r.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, s.t)(j, e);
        }
        static get extendedDefaults() {
          return j;
        }
        static get defaults() {
          return T;
        }
        static installModule(e) {
          M.prototype.__modules__ || (M.prototype.__modules__ = []);
          let t = M.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => M.installModule(e))
              : M.installModule(e),
            M
          );
        }
      }
      Object.keys(C).forEach((e) => {
        Object.keys(C[e]).forEach((t) => {
          M.prototype[t] = C[e][t];
        });
      }),
        M.use([
          function (e) {
            let { swiper: t, on: r, emit: n } = e,
              o = (0, l.a)(),
              a = null,
              i = null,
              s = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n("beforeResize"), n("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (a = new ResizeObserver((e) => {
                    i = o.requestAnimationFrame(() => {
                      let { width: r, height: n } = t,
                        o = r,
                        a = n;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: r,
                          contentRect: n,
                          target: i,
                        } = e;
                        (i && i !== t.el) ||
                          ((o = n ? n.width : (r[0] || r).inlineSize),
                          (a = n ? n.height : (r[0] || r).blockSize));
                      }),
                        (o !== r || a !== n) && s();
                    });
                  })).observe(t.el);
              },
              c = () => {
                i && o.cancelAnimationFrame(i),
                  a && a.unobserve && t.el && (a.unobserve(t.el), (a = null));
              },
              u = () => {
                t && !t.destroyed && t.initialized && n("orientationchange");
              };
            r("init", () => {
              if (t.params.resizeObserver && void 0 !== o.ResizeObserver) {
                d();
                return;
              }
              o.addEventListener("resize", s),
                o.addEventListener("orientationchange", u);
            }),
              r("destroy", () => {
                c(),
                  o.removeEventListener("resize", s),
                  o.removeEventListener("orientationchange", u);
              });
          },
          function (e) {
            let { swiper: t, extendParams: r, on: n, emit: o } = e,
              a = [],
              i = (0, l.a)(),
              d = function (e, r) {
                void 0 === r && (r = {});
                let n = new (i.MutationObserver || i.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      o("observerUpdate", e[0]);
                      return;
                    }
                    let r = function () {
                      o("observerUpdate", e[0]);
                    };
                    i.requestAnimationFrame
                      ? i.requestAnimationFrame(r)
                      : i.setTimeout(r, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === r.attributes || r.attributes,
                  childList: void 0 === r.childList || r.childList,
                  characterData: void 0 === r.characterData || r.characterData,
                }),
                  a.push(n);
              };
            r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              n("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, s.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              n("destroy", () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      let N = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function P(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function O(e, t) {
        let r = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > r.indexOf(e))
          .forEach((r) => {
            void 0 === e[r]
              ? (e[r] = t[r])
              : P(t[r]) && P(e[r]) && Object.keys(t[r]).length > 0
              ? t[r].__swiper__
                ? (e[r] = t[r])
                : O(e[r], t[r])
              : (e[r] = t[r]);
          });
      }
      function L(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function I(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function _(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function R(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          r = [];
        return (
          t.forEach((e) => {
            0 > r.indexOf(e) && r.push(e);
          }),
          r.join(" ")
        );
      }
      let A = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function z() {
        return (z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function D(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function F(e, t) {
        return "undefined" == typeof window
          ? (0, i.useEffect)(e, t)
          : (0, i.useLayoutEffect)(e, t);
      }
      let B = (0, i.createContext)(null),
        H = (0, i.createContext)(null),
        $ = (0, i.forwardRef)(function (e, t) {
          var r;
          let {
              className: n,
              tag: o = "div",
              wrapperTag: a = "div",
              children: l,
              onSwiper: s,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [u, f] = (0, i.useState)("swiper"),
            [p, g] = (0, i.useState)(null),
            [h, m] = (0, i.useState)(!1),
            b = (0, i.useRef)(!1),
            y = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            E = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            C = (0, i.useRef)(null),
            {
              params: j,
              passedParams: B,
              rest: $,
              events: G,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let r = { on: {} },
                n = {},
                o = {};
              O(r, T), (r._emitClasses = !0), (r.init = !1);
              let a = {},
                i = N.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((l) => {
                  void 0 !== e[l] &&
                    (i.indexOf(l) >= 0
                      ? P(e[l])
                        ? ((r[l] = {}),
                          (o[l] = {}),
                          O(r[l], e[l]),
                          O(o[l], e[l]))
                        : ((r[l] = e[l]), (o[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l]
                      ? t
                        ? (n[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                        : (r.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                      : (a[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e];
                }),
                { params: r, passedParams: o, rest: a, events: n }
              );
            })(d),
            { slides: W, slots: V } = (function (e) {
              let t = [],
                r = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                i.Children.toArray(e).forEach((e) => {
                  if (D(e)) t.push(e);
                  else if (e.props && e.props.slot && r[e.props.slot])
                    r[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let n = (function e(t) {
                      let r = [];
                      return (
                        i.Children.toArray(t).forEach((t) => {
                          D(t)
                            ? r.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => r.push(e));
                        }),
                        r
                      );
                    })(e.props.children);
                    n.length > 0
                      ? n.forEach((e) => t.push(e))
                      : r["container-end"].push(e);
                  } else r["container-end"].push(e);
                }),
                { slides: t, slots: r }
              );
            })(l),
            Y = () => {
              m(!h);
            };
          Object.assign(j.on, {
            _containerClasses(e, t) {
              f(t);
            },
          });
          let q = () => {
            Object.assign(j.on, G), (c = !0);
            let e = { ...j };
            if (
              (delete e.wrapperClass,
              (v.current = new M(e)),
              v.current.virtual && v.current.params.virtual.enabled)
            ) {
              v.current.virtual.slides = W;
              let e = {
                cache: !1,
                slides: W,
                renderExternal: g,
                renderExternalUpdate: !1,
              };
              O(v.current.params.virtual, e),
                O(v.current.originalParams.virtual, e);
            }
          };
          y.current || q(), v.current && v.current.on("_beforeBreakpoint", Y);
          let X = () => {
              !c &&
                G &&
                v.current &&
                Object.keys(G).forEach((e) => {
                  v.current.on(e, G[e]);
                });
            },
            U = () => {
              G &&
                v.current &&
                Object.keys(G).forEach((e) => {
                  v.current.off(e, G[e]);
                });
            };
          return (
            (0, i.useEffect)(() => () => {
              v.current && v.current.off("_beforeBreakpoint", Y);
            }),
            (0, i.useEffect)(() => {
              !b.current &&
                v.current &&
                (v.current.emitSlidesClasses(), (b.current = !0));
            }),
            F(() => {
              if ((t && (t.current = y.current), y.current))
                return (
                  v.current.destroyed && q(),
                  (function (e, t) {
                    let {
                      el: r,
                      nextEl: n,
                      prevEl: o,
                      paginationEl: a,
                      scrollbarEl: i,
                      swiper: l,
                    } = e;
                    L(t) &&
                      n &&
                      o &&
                      ((l.params.navigation.nextEl = n),
                      (l.originalParams.navigation.nextEl = n),
                      (l.params.navigation.prevEl = o),
                      (l.originalParams.navigation.prevEl = o)),
                      I(t) &&
                        a &&
                        ((l.params.pagination.el = a),
                        (l.originalParams.pagination.el = a)),
                      _(t) &&
                        i &&
                        ((l.params.scrollbar.el = i),
                        (l.originalParams.scrollbar.el = i)),
                      l.init(r);
                  })(
                    {
                      el: y.current,
                      nextEl: k.current,
                      prevEl: E.current,
                      paginationEl: S.current,
                      scrollbarEl: C.current,
                      swiper: v.current,
                    },
                    j
                  ),
                  s && s(v.current),
                  () => {
                    v.current &&
                      !v.current.destroyed &&
                      v.current.destroy(!0, !1);
                  }
                );
            }, []),
            F(() => {
              X();
              let e = (function (e, t, r, n, o) {
                let a = [];
                if (!t) return a;
                let i = (e) => {
                  0 > a.indexOf(e) && a.push(e);
                };
                if (r && n) {
                  let e = n.map(o),
                    t = r.map(o);
                  e.join("") !== t.join("") && i("children"),
                    n.length !== r.length && i("children");
                }
                return (
                  N.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((r) => {
                      if (r in e && r in t) {
                        if (P(e[r]) && P(t[r])) {
                          let n = Object.keys(e[r]),
                            o = Object.keys(t[r]);
                          n.length !== o.length
                            ? i(r)
                            : (n.forEach((n) => {
                                e[r][n] !== t[r][n] && i(r);
                              }),
                              o.forEach((n) => {
                                e[r][n] !== t[r][n] && i(r);
                              }));
                        } else e[r] !== t[r] && i(r);
                      }
                    }),
                  a
                );
              })(B, x.current, W, w.current, (e) => e.key);
              return (
                (x.current = B),
                (w.current = W),
                e.length &&
                  v.current &&
                  !v.current.destroyed &&
                  (function (e) {
                    let t,
                      r,
                      n,
                      o,
                      a,
                      i,
                      l,
                      s,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: f,
                        nextEl: p,
                        prevEl: g,
                        scrollbarEl: h,
                        paginationEl: m,
                      } = e,
                      b = f.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: y,
                        pagination: v,
                        navigation: x,
                        scrollbar: w,
                        virtual: k,
                        thumbs: E,
                      } = d;
                    f.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      y.thumbs &&
                      !y.thumbs.swiper &&
                      (t = !0),
                      f.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        y.controller &&
                        !y.controller.control &&
                        (r = !0),
                      f.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || m) &&
                        (y.pagination || !1 === y.pagination) &&
                        v &&
                        !v.el &&
                        (n = !0),
                      f.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || h) &&
                        (y.scrollbar || !1 === y.scrollbar) &&
                        w &&
                        !w.el &&
                        (o = !0),
                      f.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || g) &&
                        (u.navigation.nextEl || p) &&
                        (y.navigation || !1 === y.navigation) &&
                        x &&
                        !x.prevEl &&
                        !x.nextEl &&
                        (a = !0);
                    let S = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (y[e].prevEl = void 0),
                            (y[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (y[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    f.includes("loop") &&
                      d.isElement &&
                      (y.loop && !u.loop
                        ? (i = !0)
                        : !y.loop && u.loop
                        ? (l = !0)
                        : (s = !0)),
                      b.forEach((e) => {
                        if (P(y[e]) && P(u[e]))
                          Object.assign(y[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              S(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && S(e)
                            : (y[e] = u[e]);
                        }
                      }),
                      b.includes("controller") &&
                        !r &&
                        d.controller &&
                        d.controller.control &&
                        y.controller &&
                        y.controller.control &&
                        (d.controller.control = y.controller.control),
                      f.includes("children") && c && k && y.virtual.enabled
                        ? ((k.slides = c), k.update(!0))
                        : f.includes("virtual") &&
                          k &&
                          y.virtual.enabled &&
                          (c && (k.slides = c), k.update(!0)),
                      f.includes("children") && c && y.loop && (s = !0),
                      t && E.init() && E.update(!0),
                      r && (d.controller.control = y.controller.control),
                      n &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          m.part.add("pagination"),
                          d.el.appendChild(m)),
                        m && (y.pagination.el = m),
                        v.init(),
                        v.render(),
                        v.update()),
                      o &&
                        (d.isElement &&
                          (!h || "string" == typeof h) &&
                          ((h = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          h.part.add("scrollbar"),
                          d.el.appendChild(h)),
                        h && (y.scrollbar.el = h),
                        w.init(),
                        w.updateSize(),
                        w.setTranslate()),
                      a &&
                        (d.isElement &&
                          ((p && "string" != typeof p) ||
                            ((p = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (p.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            p.part.add("button-next"),
                            d.el.appendChild(p)),
                          (g && "string" != typeof g) ||
                            ((g = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (g.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            g.part.add("button-prev"),
                            d.el.appendChild(g))),
                        p && (y.navigation.nextEl = p),
                        g && (y.navigation.prevEl = g),
                        x.init(),
                        x.update()),
                      f.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      f.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      f.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (i || s) && d.loopDestroy(),
                      (l || s) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: v.current,
                    slides: W,
                    passedParams: B,
                    changedParams: e,
                    nextEl: k.current,
                    prevEl: E.current,
                    scrollbarEl: C.current,
                    paginationEl: S.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            F(() => {
              A(v.current);
            }, [p]),
            i.createElement(
              o,
              z({ ref: y, className: R(`${u}${n ? ` ${n}` : ""}`) }, $),
              i.createElement(
                H.Provider,
                { value: v.current },
                V["container-start"],
                i.createElement(
                  a,
                  {
                    className: (void 0 === (r = j.wrapperClass) && (r = ""), r)
                      ? r.includes("swiper-wrapper")
                        ? r
                        : `swiper-wrapper ${r}`
                      : "swiper-wrapper",
                  },
                  V["wrapper-start"],
                  j.virtual
                    ? (function (e, t, r) {
                        if (!r) return null;
                        let n = (e) => {
                            let r = e;
                            return (
                              e < 0
                                ? (r = t.length + e)
                                : r >= t.length && (r -= t.length),
                              r
                            );
                          },
                          o = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${r.offset}px`,
                              }
                            : { top: `${r.offset}px` },
                          { from: a, to: l } = r,
                          s = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = s; e < d; e += 1)
                          e >= a && e <= l && c.push(t[n(e)]);
                        return c.map((t, r) =>
                          i.cloneElement(t, {
                            swiper: e,
                            style: o,
                            key: `slide-${r}`,
                          })
                        );
                      })(v.current, W, p)
                    : W.map((e, t) =>
                        i.cloneElement(e, {
                          swiper: v.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  V["wrapper-end"]
                ),
                L(j) &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement("div", {
                      ref: E,
                      className: "swiper-button-prev",
                    }),
                    i.createElement("div", {
                      ref: k,
                      className: "swiper-button-next",
                    })
                  ),
                _(j) &&
                  i.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                I(j) &&
                  i.createElement("div", {
                    ref: S,
                    className: "swiper-pagination",
                  }),
                V["container-end"]
              )
            )
          );
        });
      $.displayName = "Swiper";
      let G = (0, i.forwardRef)(function (e, t) {
        let {
            tag: r = "div",
            children: n,
            className: o = "",
            swiper: a,
            zoom: l,
            lazy: s,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          f = (0, i.useRef)(null),
          [p, g] = (0, i.useState)("swiper-slide"),
          [h, m] = (0, i.useState)(!1);
        function b(e, t, r) {
          t === f.current && g(r);
        }
        F(() => {
          if (
            (void 0 !== c && (f.current.swiperSlideIndex = c),
            t && (t.current = f.current),
            f.current && a)
          ) {
            if (a.destroyed) {
              "swiper-slide" !== p && g("swiper-slide");
              return;
            }
            return (
              a.on("_slideClass", b),
              () => {
                a && a.off("_slideClass", b);
              }
            );
          }
        }),
          F(() => {
            a && f.current && !a.destroyed && g(a.getSlideClasses(f.current));
          }, [a]);
        let y = {
            isActive: p.indexOf("swiper-slide-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0,
          },
          v = () => ("function" == typeof n ? n(y) : n);
        return i.createElement(
          r,
          z(
            {
              ref: f,
              className: R(`${p}${o ? ` ${o}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                m(!0);
              },
            },
            u
          ),
          l &&
            i.createElement(
              B.Provider,
              { value: y },
              i.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof l ? l : void 0,
                },
                v(),
                s &&
                  !h &&
                  i.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !l &&
            i.createElement(
              B.Provider,
              { value: y },
              v(),
              s &&
                !h &&
                i.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      G.displayName = "SwiperSlide";
    },
  },
]);
