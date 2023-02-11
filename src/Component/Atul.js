import React,{Component} from "react";
import './Atul.css'
export class Atul extends Component{
    render(){
        return(
            <footer>
            <div className="footer">
                <p>This is footer section.</p>
                <ul class="socials">
                    <li><a href="gf"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="fg"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="gfg"><i class="fa fa-github"></i></a></li>
                    <li><a href="fg"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="fg"><i class="fa fa-instagram"></i></a></li>
                </ul>
                <div class="footer-copyright">
                    <p>copyright &copy;2022 </p>
                </div>
            </div>
        </footer>
        
        )
    }
}