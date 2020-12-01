import React, {Component} from 'react';
import Button from './Button';
import TabInfo from './TabInfo';
import './Tabs.css'



class Tabs extends Component{
    constructor(){
        super()

        this.state = {
        searchTerm: ['Biography'],
        elements: [],
        tabs: '',
        siblingsList: [],
        }

    }
    componentDidMount (){
        console.log('mounted')
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${this.state.searchTerm[0]}`
        fetch(url)
        .then(res => {
            // console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data.items)
            this.setState({elements:data.items})
        })
        .catch(err =>{
            console.log('Something went wrong', err)
        })
    }

    createTabs = e => {
        let element1 = e.target;
        let array = [];
        array.push(element1)
        console.log(element1.textContent)
        for(let i = 0; i < this.state.elements.length; i++){
            if(element1.textContent == this.state.elements[i].volumeInfo.title){
                console.log('found')
                console.log(this.state.elements[i].volumeInfo)
                array = array.map(item => {
                    // item.className.
                    return(
                    <TabInfo image = {this.state.elements[i].volumeInfo.imageLinks.smallThumbnail} 
                    title = {this.state.elements[i].volumeInfo.title}
                    subtitle = {this.state.elements[i].volumeInfo.subtitle} 
                    published = {this.state.elements[i].volumeInfo.publishedDate} 
                    author = {this.state.elements[i].volumeInfo.authors[0]} 
                    info = {this.state.elements[i].volumeInfo.description}/>)
                })
            }
        }   
        this.setState({tabs: array})
    }

    //this creates an arrray of the buttons
    makeCreatedButtonArray = e => {
        console.log(e)
        let sibling = e.target.parentElement.firstChild
        let siblings = [];
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
    
        // return this.setState({siblingsList: siblings});
        return this.makeActive(e, siblings)
    
    };

    //this can't see the event if I do it asynchronously!!
    makeActive = (e, siblingsList2) => {
        console.log(e)
        console.log(siblingsList2)
        let target = e.target;
        console.log(target)
        for(let i = 0; i< siblingsList2.length; i++){
            if(siblingsList2[i] != target){
                siblingsList2[i].classList.remove('active')
            }else if(siblingsList2[i] == target){
                siblingsList2[i].classList.add('active')
            }else{
                console.log(siblingsList2[i])
            }
        }
    }


    render (){
        console.log(this.state.siblingsList)
        return(<div className = "body">
            <header className = 'header'>Choose a Biography</header>
                <div className = 'experiment'>
                    <div className="tab">
                        {this.state.elements != '' 
                        ? <Button onClick = {(e)=> {
                            this.createTabs(e)
                            this.makeCreatedButtonArray(e)
                        }} 
                        button = {this.state.elements[0].volumeInfo.title} />
                        : <Button button = 'Loading'/>}
                         {this.state.elements != '' 
                        ? <Button onClick = {(e) => {
                            this.createTabs(e)
                            this.makeCreatedButtonArray(e)
                        }} button = {this.state.elements[2].volumeInfo.title}/>
                        : <Button button = 'Loading'/>}
                         {this.state.elements != '' 
                        ? <Button onClick = {(e) => {
                            this.createTabs(e)
                            this.makeCreatedButtonArray(e)
                        }} button = {this.state.elements[3].volumeInfo.title}/>
                        : <Button button = 'Loading'/>}
                    </div>
                </div>
                <div className ="experiment-bottom">
                    <div className ="bottom">{this.state.tabs}</div>
                </div>
        </div>

        )
    }
}

export default Tabs;




