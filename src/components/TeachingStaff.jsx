import React from 'react'
// import TeacherImg from './itsalogo.jpeg';
import './TeachingStaff.css';
import pic1 from '../components/facultyName/RupaliMaam.jpg';
import pic2 from '../components/facultyName/BhartiMaam.jpg';
import pic3 from '../components/facultyName/JitendraSir.jpg';
import pic4 from '../components/facultyName/NeelamMaam.jpg';
import pic5 from '../components/facultyName/NikhilSir.jpg';
import pic6 from '../components/facultyName/ShraddhaMaam.jpg';
import pic7 from '../components/facultyName/JoshiMamm.jpg';
import pic8 from '../components/facultyName/UbaleMaam.jpg';
import pic9 from '../components/facultyName/KakadMaam.jpg';
import pic10 from '../components/facultyName/Profile.png';
import pic11 from '../components/facultyName/BorhadeSir.jpg';
import pic12 from '../components/facultyName/DamreSir.jpg';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,class=
//     Link
//   } from "react-router-dom";

export default function TeachingStaff() {
  return (
    <div>
        <div className="container teach my-3">
        
        <h1 style = {{fontSize: '2rem', color: 'red', marginBottom:'20px'}}>Teaching Staff</h1>
        {/* <Link to="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"> */}
            <div className='d-flex flex-wrap justify-content-center '>
                {/* 1 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card " style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top " style={{height:'20rem'}} src={pic1} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Dr. Rupali M Chopade</h5>
                        <p className="card-text" style = {{color: 'black'}}>Head of Department <br/>rupalimchopade@mmcoe.edu<br/><b>Date of Joining:</b> 28/12/2007<br/><b>Qualification:</b> BE CSE, ME IT, Ph.D. CE</p>
                        </div>
                        </div>
                    </a>
                {/* </Link> */}
                </div>

                {/* 2 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic2} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Dr. Bharati P. Vasgi</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                {/* 3 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic8} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Dr. Swapnaja A Ubale</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                {/* 4 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic7} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Ms. Preeti S. Joshi</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                {/*  */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic9} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Ms. Shital A Kakad</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic10} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mrs. R. M. Bhattad</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic5} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. Nikhil S Dhavase</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>
                {/* 5 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic3} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. Jitendra R Chavan</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                {/* 6 */}

                {/* 7 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic6} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Ms.Shraddha P Mankar</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>

                {/* 8 */}
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic4} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Ms. Neelam S Jogalekar</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>


                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic11} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. Bhushan M. Borhade</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>


                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic10} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. Dasganu Hake</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>


                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic12} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. Suraj S. Damre</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>


                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic10} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. A. C. Tambe</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
        <div className="container teach my-3">
            <h1 style = {{fontSize: '2rem', color: 'red', marginBottom:'20px'}}>Non- Teaching Staff</h1>
            <div className='d-flex flex-wrap justify-content-center '>
            <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic10} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mrs. S.M.Kari</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>
                <div className=' mx-auto mb-4 staff'>
                    <a href="https://docs.google.com/document/d/1s2uDvbVC-3CcOVATEr0-Q4PIbewrijWD6cnHH2S-NPs/edit?usp=sharing"  target="_blank" rel="noopener noreferrer" className='styling'>
                        <div className="card" style={{width:'18rem',height:'32rem'}}>
                        <img className="card-img-top" style={{height:'20rem'}} src={pic10} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">Mr. D.R. Patil</h5>
                        <p className="card-text" style = {{color: 'black'}}>Teacher Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis accusamus dolorem consequuntur quisquam dolorum!</p>
                        </div>
                        </div>
                    </a>
                </div>
                </div>
        </div>
    </div>
  )
}
