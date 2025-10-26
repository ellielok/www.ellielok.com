import hl from '@/utils/highLight';

export default function Intro() {
    return (
        <div>
        <div
            id="about-content"
            className="sticky top-0 py-5 lg:hidden font-bold bg-black text-white/90"
          >
            About Me
          </div>

          <div className="">
            <div className="m-2 mb-10">
              I am an aspiring full-stack developer skilled in React,
              TypeScript, and modern CSS frameworks. I am passionate about
              creating responsive and user-friendly web applications that
              combine thoughtful design with solid engineering for performance
              and accessibility. I am about to complete my Master of Information
              Technology at Monash University and plan to reside in{' '}
              {hl('Melbourne, Australia')}.
            </div>
            <div className="m-2 mb-10 ">
              Previously, I worked as a Senior Advertising Specialist at{' '}
              {hl('Fastlane')}, where I gained deep experience in digital
              marketing and user analytics. This background helps me design
              products that are both data-informed and user-centered. Outside of
              coding, I enjoy traveling, hiking, and exploring virtual worlds
              from Summoner’s Rift to Hyrule.
            </div>
        </div>
        </div>
    );
}




          