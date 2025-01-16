import AnimatedHeader from "../components/AnimatedHeader";
import AssignmentsTable from "../components/AssignmentsTable";
import CollapsiblePanel from "../components/CollapsiblePanel";
import ContentSection from "../components/ContentSection";
import CourseStaffGrid from "../components/CourseStaffGrid";
import FAQSection from "../components/FAQSection";
import LecturesTable from "../components/LecturesTable";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import QuickLinks from "../components/QuickLinks";

const HTA_EMAIL = "cs1951lheadtas@lists.brown.edu";
const PROF_EMAIL = "mph@cs.brown.edu";

// List of links displayed under the Quick Links section.
const quickLinks: { name: string; href: string }[] = [
  { name: "Syllabus", href: "/cs1951L-syllabus-2024.pdf" },
  { name: "EdStem", href: "https://edstem.org/" },
  { name: "Hours", href: "https://hours.cs.brown.edu/" },
  { name: "Gradescope", href: "https://www.gradescope.com/courses/716913" },
  {
    name: "Course Calendar",
    href: "https://calendar.google.com/calendar/u/1?cid=Y19iNDc1OTViYWMxZTRmMGQ3NTBlMjJjNTQxZDZhNjU3ZjZjNGI2ZjVhMzFiNDgzODE1MTc4MTk2ZDQ2NzBiZDg3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
  },
  // {
  //   name: "TA Hours",
  //   href: "https://calendar.google.com/calendar/u/1?cid=Y19lcTA1MXNrbjZlZ3UxMDZwMXZxaDZsbjM4b0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  // },
  { name: "Anonymous Feedback", href: "https://docs.google.com/forms/d/e/1FAIpQLSeYz3RaQY4Fql-PKV28oBI99tEY8G9oLUpSzLY_suq-TcXvtw/viewform?usp=dialog" },
];

const EmailLink = ({ email }: { email: string }) => (
  <a className="email-link" href={`mailto:${email}`}>
    {email}
  </a>
);

const Link = ({ link, text }: { link: string; text: string }) => (
  <a
    className="hover:underline neon-text-red text-opacity-80 font-bold"
    href={link}
    target="_blank"
  >
    {text}
  </a>
);

export default function Home() {
  return (
    <PageLayout>
      <div className="text-white text-opacity-60">
        <div className="fixed top-0 w-full z-50">
          <Navbar />
        </div>

        {/* Hero banner image */}
        <AnimatedHeader />

        {/* Main content area */}
        <div className="bg-gradient-to-b from-dark-purple via-dark-green to-dark-blue">
          <div className="space-y-32 pt-20">
            {/* Intro Section */}
            <ContentSection
              title="Welcome to CSCI1951L!"
              id="course-info"
              titleColor="pink"
            >
              <div className="space-y-8">
                <p>
                  Introduction to modern blockchain-based systems. This timely
                  course covers relevant topics such as consensus and
                  distributed computing, example cryptocurrencies, programming
                  smart contracts, privacy and secrecy, transfer networks,
                  atomic swaps and transactions, non-currency applications of
                  blockchains, and legal and social implications. Students will
                  complete four programming projects, four homework assignments,
                  one written assignment, and two labs.
                </p>
              </div>

              {/* Quick Links Section */}
              <QuickLinks links={quickLinks} />
            </ContentSection>

            {/* Course Policies Section */}
            <ContentSection title="Course Info" titleColor="red">
              <CollapsiblePanel title="Collaboration Policy">
                <div className="space-y-5">
                  <p>
                    One of the primary goals of this course is to foster a
                    collaborative, student-led learning environment. To help
                    achieve that goal, we encourage students to not only
                    collaborate on EdStem, but also to assist each other outside
                    of class by debugging or{" "}
                    <b className="neon-text-green">
                      discussing code relevant to projects
                    </b>
                    . However, at no point should this collaboration extend to
                    copying code. If you are unsure whether your collaboration
                    is appropriate, please reach out to a TA.
                  </p>
                  <p>
                    You are permitted to use AI tools such as ChatGPT and
                    Copilot for high-level conceptual understanding of
                    projects/homeworks and small low-level coding details, as
                    long as you are not using them to copy-paste large swaths of
                    the assignment or entire written answers.
                  </p>
                  <p>
                    Note: During interactive grading sessions, TAs reserve the
                    right to ask questions about any line of code you have
                    written. If you are unable to explain what your code is
                    doing, or your explanation is unsatisfactory, there may be
                    disciplinary consequences.
                  </p>
                  <FAQSection question="Projects">
                    <ul className="list-outside pl-8 list-disc">
                      <li>
                        We encourage{" "}
                        <b className="neon-text-green">
                          discussing project code
                        </b>{" "}
                        with other students and helping your friends debug, but
                        every piece of code you submit must be your own.
                      </li>
                      <li>
                        Collaboration can hurt learning! The more you go to
                        others, the less you are likely to learn and improve
                        your problem solving abilities.
                      </li>
                    </ul>
                  </FAQSection>
                  <FAQSection question="Labs">
                    <ul className="list-outside pl-8 list-disc">
                      <li>You may complete these labs however you’d like.</li>
                      <li>
                        That said, you should find these labs fairly
                        straightforward, as they mostly serve to introduce you
                        to Go and Solidity syntax. Try them on your own first!
                      </li>
                    </ul>
                  </FAQSection>
                  <FAQSection question="Homeworks">
                    <ul className="list-outside pl-8 list-disc">
                      <li>
                        All homeworks must be{" "}
                        <b className="neon-text-red">completed individually.</b>
                      </li>
                      <li>
                        You are welcome to ideate with other students, but the
                        words you turn in must be your own.
                      </li>
                      <li>
                        If you’re stuck, you should (1) post on EdStem or (2)
                        attend TA hours.
                      </li>
                    </ul>
                  </FAQSection>
                  <FAQSection question="Writtens">
                    <ul className="list-outside pl-8 list-disc">
                      <li>
                        All writtens must be{" "}
                        <b className="neon-text-red">completed individually.</b>
                      </li>
                      <li>
                        You are welcome to ideate with other students, but the
                        words you turn in must be your own.
                      </li>
                    </ul>
                  </FAQSection>
                </div>
              </CollapsiblePanel>
              <CollapsiblePanel title="Communication Policy">
                <ul className="list-outside pl-8 list-disc">
                  <li>
                    For SAS course accommodations, please email{" "}
                    <EmailLink email={PROF_EMAIL} />.
                  </li>
                  <li>
                    For assignment help and clarifications, you may (1) ask
                    questions to your fellow students (2) post on EdStem or (3)
                    attend TA hours.
                  </li>
                  <li>
                    Do NOT email individual UTAs (unless, of course, they
                    instruct you to do so).
                  </li>
                  <li>
                    For all other concerns (or if you’re unsure), email{" "}
                    <EmailLink email={HTA_EMAIL} />.
                  </li>
                </ul>
              </CollapsiblePanel>
              <CollapsiblePanel title="Late Policy">
                <ul className="list-outside pl-8 list-disc">
                  <li>
                    You have 10 total late days at your disposal, which can be
                    used for any course assignments.
                  </li>
                  <li>
                    For homework assignments, you may use a maximum of 2 late
                    days, beyond which you will receive no credit.
                  </li>
                  <li>
                    For projects, labs and written assigments, you may use up to
                    2 late days on any single assignment. For every additional
                    day late, we will reduce your grade by 10% (unless you have
                    an exception).
                  </li>
                  <li>
                    If you have extenuating circumstances (or are really
                    stressed), please email <EmailLink email={HTA_EMAIL} />.
                  </li>
                </ul>
              </CollapsiblePanel>
              <CollapsiblePanel title="Frequently Asked Questions">
                <div className="space-y-5">
                  <FAQSection question="How has this course changed since its previous offerings?">
                    We have worked hard to continuously improve this course
                    since it's first offering in Summer 2021. Since then, here
                    are some of the main changes we have made:
                    <ul className="list-outside pl-8 list-disc mt-2">
                      <li>
                        We have removed C++ from the course. You will only need
                        to use Go and Solidity.
                      </li>
                      <li>
                        We have reworked the course projects to provide more
                        stencil and test suites so that you can focus on
                        implementing interesting blockchain concepts, not things
                        unrelated to the course. This also means that projects
                        should be much less time-consuming than before.
                      </li>
                      <li>
                        We are providing smaller "lab" assignments to give you
                        space to become comfortable with Go and Solidity before
                        jumping into the course projects.
                      </li>
                      <li>
                        We have rewritten assignment handouts to provide more
                        guidance and explanation into the concepts you will need
                        to successfully complete the projects.
                      </li>
                      <li>
                        We have reworked our homeworks to include more
                        conceptual checks that will help to bridge the gap
                        between the lectures' largely theoretical focus and the
                        projects' more technical application.
                      </li>
                      <li>
                        We have improved the robustness of our test suites and
                        stencil code to make the projects a more constructive
                        and enjoyable experience.
                      </li>

                      {/* <li>*/}
                      {/*    We will use a student Discord server, alongside a generous collaboration*/}
                      {/*    policy, to foster a sense of community and to encourage students to work and*/}
                      {/*    learn together.*/}
                      {/*</li> */}
                    </ul>
                  </FAQSection>
                  <FAQSection question="What programming languages will be used in the course?">
                    The first three projects use Go, while the last project uses
                    Solidity. While any exposure to these languages (or similar
                    ones like C, Java, and Typescript) is helpful, we're not
                    expecting any prior experience with either Go or Solidity.
                    We plan on providing plenty of space to learn these
                    languages before jumping into the projects.
                  </FAQSection>
                  <FAQSection question="Can I audit this course?">
                    Yes.
                  </FAQSection>
                  <FAQSection question="I'm really stressed out, what can I do?">
                    We completely understand how stressful being a student can
                    be. If you are ever feeling overwhelmed, please don't
                    hesitate to reach out to <EmailLink email={HTA_EMAIL} />. We
                    will be more than happy to work with you to get you what you
                    need.
                  </FAQSection>
                </div>
              </CollapsiblePanel>
              <CollapsiblePanel title="TA Hours">
                <div className="space-y-5">
                  <p>
                    There will be TA hours throughout the week according to the
                    course calendar. Some will be remote 1-on-1 TA hours, while
                    others will be in-person collab hours. Both are designed to
                    answer HW/Project questions. Please check the Hours website
                    for the Zoom link/location.
                  </p>
                  <FAQSection question="Remote Hours">
                    Create a ticket in the queue with a description of your
                    question. When you are claimed, join the Zoom link. If
                    multiple people have similar questions (whether it's
                    homework or project related), we may claim multiple people
                    and explain the question conceptually at the same time.
                  </FAQSection>
                  <FAQSection question="Collab Hours">
                    No need to join the queue, just find the room that hours are
                    hosted in. The TA will attempt to group people by similar
                    questions and go around the room addressing their questions
                    as a group. Feel free to collaborate at a high level or
                    assist with debugging with your peers during these collab
                    hours.
                  </FAQSection>
                  <FAQSection question="Professor Hours">
                    Maurice's hours are available by appointment. Please contact
                    him at <EmailLink email={PROF_EMAIL} /> to make an
                    appointment.
                  </FAQSection>
                </div>
              </CollapsiblePanel>
              <CollapsiblePanel title="Capstone Project">
                Students may capstone this course. For the project description,
                please read{" "}
                <Link
                  link="https://drive.google.com/file/d/10VWOLpUqv56RJATp_pIFcz-jdYuC9g1Y/view?usp=sharing"
                  text="this default capstone project description"
                />
                .
                <br />
                Email <EmailLink email={PROF_EMAIL} /> with questions.
              </CollapsiblePanel>
            </ContentSection>

            {/* Assignments Section */}
            <ContentSection
              title="Assignments"
              id="assignments"
              titleColor="yellow"
            >
              <p>
                Every project, homework, and lab should be turned in via
                Gradescope. Every assignment will be available by 11:59 pm ET on
                the day listed, and will be due at 11:59 pm ET on the due date
                listed. Written assignments should be submitted as PDFs. All
                assignment release and due dates are also available through the
                course calendar. The assignment dates currently listed are
                tentative and may change. If any dates are shifted, an EdStem
                announcement will be made informing you of the change.
              </p>
              <AssignmentsTable />
            </ContentSection>

            {/* Lectures Section */}
            <ContentSection title="Lectures" id="lectures" titleColor="green">
              <p className="my-4">
                Lectures will take place Tuesdays and Thursdays from
                2:30pm-3:50pm ET in Salomon Center 003. Recordings will be
                available soon after lecture ends.
              </p>
              {/* <p>
                <Link
                  link="https://drive.google.com/drive/folders/1-6ioPrYQNcG9yAuylxG3Cj9CMKluVu6h?usp=sharing"
                  text="LINK TO ALL SLIDES"
                />
              </p> */}
              <p className="my-4">
                Zoom Meeting ID (for remote synchronous viewing): 919 8997 8325
              </p>
              <a
                href="https://drive.google.com/drive/folders/125TuuYWjKgwn3eTeb-JXUdskGTZU1Mt9?usp=sharing"
                className="neon-text-green"
                style={{ fontSize: "1.3rem" }}
              >
                <b>Lecture Notes</b>
              </a>
              <LecturesTable />
            </ContentSection>

            {/* Course Staff Section */}
            <ContentSection title="Course Staff" id="staff" titleColor="blue">
              <CourseStaffGrid />
            </ContentSection>

            {/* Page footer*/}
            <footer className="pb-12 px-6 text-center text-sm md:text-lg font-bold">
              <p className="font-bold">
                Copyright © 2025 CSCI 1951L at Brown University
              </p>
            </footer>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
