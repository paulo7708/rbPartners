import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import { HeaderBootstrap as Header, } from "../../components/HeaderBootstrap";
import { Footer } from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/global";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from "../../components/Preloader/Loader";
import { Opacity0, Opacity1 } from "./oppacity";
import { useEffect, useState } from "react";


export const Default = () =>{
  const [isLoading, seIsLoading] = useState(true)

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        seIsLoading(false)
      }, 2000)
    }

    fakeDataFetch()
  }, [])


  return(
    <ThemeProvider theme={defaultTheme}>
      <>
        {
          isLoading ?
            <>
              <Loader />
              <Opacity0>
                <Header />
                <Outlet />
                <Footer />
              </Opacity0>
            </> :
            <Opacity1>
              <Header />
              <Outlet />
              <Footer />
            </Opacity1>
        }

      </>
      <GlobalStyle />
    </ThemeProvider>

  )
}