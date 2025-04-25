
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
              Schedule Your Demo Call
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Book a 15-minute call to see how our AI can revolutionize your real estate operations.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-card border border-border/50 rounded-xl p-6 shadow-md">
            <div style={{ width: "100%", height: "650px", overflow: "scroll" }} id="my-cal-inline"></div>
          </div>

          {/* Cal.com Script */}
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "intro-call", {origin:"https://cal.com"});

              Cal.ns["intro-call"]("inline", {
                elementOrSelector:"#my-cal-inline",
                config: {"layout":"month_view"},
                calLink: "alignagentsai/intro-call",
              });

              Cal.ns["intro-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `
          }} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
