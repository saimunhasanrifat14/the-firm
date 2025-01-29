import React from 'react'
import Container from './CommonComponent/Container'
import PerterLogo1 from '../assets/PerterLogo1.png'
import PerterLogo2 from '../assets/PerterLogo2.png'
import PerterLogo3 from '../assets/PerterLogo3.png'
import PerterLogo4 from '../assets/PerterLogo4.png'

const Partner = () => {
  return (
    <Container>
        <div>
            <h3 className='text-[40px] font-black text-text_black_color text-center font-nunito mb-[50px] mt-[100px]'>Our <span className='heading'>Partner</span></h3>
            <div className='flex justify-between mb-[100px]'>
                <div className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                    <picture>
                        <img src={PerterLogo1} alt={PerterLogo1} />
                    </picture>
                </div>
                <div className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                    <picture>
                        <img src={PerterLogo2} alt={PerterLogo2} />
                    </picture>
                </div>
                <div className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                    <picture>
                        <img src={PerterLogo3} alt={PerterLogo3} />
                    </picture>
                </div>
                <div className="w-[240px] h-[120px] rounded-lg bg-bg_gray_two flex justify-center items-center">
                    <picture>
                        <img src={PerterLogo4} alt={PerterLogo4} />
                    </picture>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Partner