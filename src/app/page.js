import ContentSection from "@/components/ContentSection/ContentSection"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/Header"
import Navbar from "../components/navbar/Navbar"
import ImagePass from "@/components/ContentSection/imagePass/ImagePass"
import './globals.css'
import QuestionPallete from "@/components/questionPallete/QuestionPallete"
import Legend from "@/components/legend/Legend"
import FooterMenu from "@/components/footerMenu/FooterMenu"
const page = () => {
  return (
    <>
      <Header />
      <div className="secondRow">
        <div className="firstDiv">
          <Navbar />
          <ContentSection />
        <FooterMenu/>

        </div>
        <div className="secondDiv">
        <ImagePass/>
        <QuestionPallete/>
        <Legend/>
        </div>
      </div>
     
      <Footer />
    </>
  )
}

export default page