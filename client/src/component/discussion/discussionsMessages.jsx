import React from "react";
import axios from 'axios';
import './discussionsMessages.css';
import {useState, useEffect } from "react";

const Discussion = () => {
    const [discussions, setDiscussions] = useState([]);
    const [discussionUsername, setDiscussionUsername] = useState("");
    const [discussionSubject, setDiscussionSubject] = useState("");
    const [discussionMessage, setDiscussionMessage] = useState("");
   
        const addDiscussionMessage = (e) =>{
            e.preventDefault()
            const discussion = {
                username: discussionUsername,
                subject: discussionSubject,
                message: discussionMessage
            }
            console.log(discussion)
            axios.post('https://qacinema-362612.ey.r.appspot.com/discussions/create', discussion
            ).then(()=>{
                console.log("New discussion message added")
                window.location.reload(true);
                clearInputs();
            }).catch((error) => {
                console.log(error.message)
            })
            
    }

    const clearInputs = () => {
        setDiscussionMessage("")
        setDiscussionSubject("")
        setDiscussionUsername("")
    }

    useEffect(() => {

        axios.get('https://qacinema-362612.ey.r.appspot.com/discussions/getAll')
            .then((result) => {
                setDiscussions(result.data);
            })


    }, [])
          
        return (
            
            <div className="totalDiscussion">
                <form onSubmit={addDiscussionMessage} className="discussionForm">
                    <h1>New Discussion</h1>
                    <div className="mb-3">
                        <label htmlFor="usernameInput1" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="usernameInput" Style="width:40%" aria-describedby="usernameInput" placeholder="Please input username." value={discussionUsername} onChange={(e) => setDiscussionUsername(e.target.value)}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="subjectMovieInput1" className="form-label">Subject:</label>
                        <input type="text" className="form-control" id="subjectMovieInput" Style="width:40%" aria-describedby="subjectMovieInput" placeholder="Please input subject." value={discussionSubject} onChange={(e) => setDiscussionSubjectMovie(e.target.value)}></input>
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="messageInput1" className="form-label">Message</label>
                        <input type="text" className="form-control" id="subjectMovieInput" aria-describedby="subjectMovieInput" placeholder="Please input your message here." value={discussionMessage} onChange={(e) => setDiscussionMessage(e.target.value)}></input>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <div className="discussionResult">
                    <h1>Commmunity Board</h1>
                    {discussions?.map((discussion) => (
                        <div key={discussion._id} className="discussion">
                            <div id="username"><strong>Username: </strong> {discussion.username}</div>
                            <div id="subjectMovie"><strong>Movie: </strong> {discussion.subject}</div>
                            <hr/>
                            <div id="message"><strong>Message: </strong>{discussion.message}</div>
                            <hr/>
                                                        
                        </div>
                    ))}
                </div>

                
            </div>
            
        );
    }

    export default Discussion;


