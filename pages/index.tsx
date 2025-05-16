import React, {useState} from "react";
import IndexLayout from "@/layouts/indexLayout";
import ModalWrapper from "@/components/modalWrapper";
import ContactUsForm from "@/components/contactUsForm";
import PublicHomeComponent from "@/components/public-page";
import WhyContentComponent from "@/components/why-page";

export default function Index() {
  const [activePage, setActivePage] = useState('how');
  const [isContactUsVisible, setIsContactUsVisible] = useState(false);
  const onToggleContactUs = () => {
    setIsContactUsVisible(!isContactUsVisible);
  }

  const handleClick = (page:string) => {
    setActivePage(page);
    setTimeout(() => {
      window.scrollTo(0, 0);
    } , 300);
  }

  const handleBack = () => {
    setActivePage('public');
  }

  return <>
    <ModalWrapper show={isContactUsVisible} onClose={() => {setIsContactUsVisible(false)}}>
      <ContactUsForm isVisible={isContactUsVisible} onHide={() => {setIsContactUsVisible(false)}}></ContactUsForm>
    </ModalWrapper>

    <div className="h-screen">
      <PublicHomeComponent onContactUs={onToggleContactUs}/>
    </div>
  </>
}

Index.getLayout = function getLayout(page: React.ReactNode) {
  return <IndexLayout>{page}</IndexLayout>
}

