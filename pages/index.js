import AboutMe from "@/components/home-ui/aboutMe";
import CommentWrapper from "@/components/home-ui/comments/commentWrapper";
import Faq from "@/components/home-ui/faq";
import MoreProject from "@/components/home-ui/moreProject";
import ProjectWrapper from "@/components/home-ui/projects/projectWrapper";
import Services from "@/components/home-ui/services";
import Start from "@/components/home-ui/start";
import Story from "@/components/home-ui/story/story";
import WorkSteps from "@/components/home-ui/workSteps";


export default function Home() {
  return (
    <>
      <Start/>
      <Story/>
      <AboutMe/>
      <WorkSteps/>
      <Services/>
      <ProjectWrapper/>
      <MoreProject/>
      <CommentWrapper/>
      <Faq/>
    </>
  )
}
