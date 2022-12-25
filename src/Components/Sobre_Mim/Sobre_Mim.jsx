import React from 'react'
import '../Sobre_Mim/Sobre_Mim.css'
import imagemPessoal from '../../Images/Sobre_mim/fotoPessoal.png'

function Sobre_Mim() {
    return (
        <div id='container'>
            <div id='containerImagem'>
                <img src={imagemPessoal} alt="" />

            </div>
            <div id='containerText'>
                <div id='text'>
                    <div>
                        <h1>Michael Rodrigues</h1>
                    </div>
                    <div className='hr1'></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum ipsum id eros laoreet lacinia. Suspendisse justo mi, auctor eu ultricies nec, maximus vitae massa.</p>
                    </div>
                    <div className='end'>
                        <div className='hr2'></div>
                        <div className='ponto'></div>
                    </div>
                </div>              
            </div>

        </div>
    )
}

export default Sobre_Mim