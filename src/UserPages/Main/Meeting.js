import React from 'react';
import "./Main.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import barLogo from '../../paran_logo.png';
import AgendaList from './AgendaList';
import MeetingList from './MeetingList';

function Meeting(){
    const location = useLocation();
    const navigate = useNavigate();
    const { name } = "혜진조"; // 로그인한 회원의 이름과 학과
    const { major } = "컴퓨터소프트웨어공학과"; // 추후 수정....要

    return(
        <div className="Main-container">
            <div className='top-bar'>
                <img src={barLogo} alt="bar-logo" className="bar-logo"/>
                <span className='paran-span'>제39대 총대의원회 파란</span>
                <div className='user-info'>
                    <span className='user-info-span'>컴퓨터소프트웨어공학과</span>
                    <span className='user-info-span'>조혜진</span>
                </div>
            </div>
            <div className='meeting-info-div'>
                <div className='back-icon-div'>
                    <img src='https://cdn-icons-png.flaticon.com/128/81/81037.png' alt="back-icon" className='back-icon' onClick={() => navigate(-1)}/>
                </div>
                {MeetingList.map((meeting) => (
                    <div key={meeting.id} className='meeting-info-circle1'>
                        <div className='meeting-info-circle2'>
                            <span className='meeting-info'>{meeting.name}</span>
                            <span className='meeting-date'>{meeting.meetingDate}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="agenda-container">
                {AgendaList.map((agenda) => (
                    <Link key={agenda.id} to={`/agenda/${agenda.id}`} style={{ textDecoration: 'none' }}>
                        <div key={agenda.id} className="agenda-card">
                            <p className='agenda-state'>
                                {agenda.activate === 'IN_PROGRESS' ? '투표 진행 중' : 
                                agenda.activate === 'COMPLETE' ? '투표 완료' :
                                agenda.activate === 'NOT_STARTED' ? '투표 대기' : ''}
                            </p>
                            <h3 className='agenda-info'>{agenda.id}. {agenda.title}</h3>
                            {agenda.activate === 'COMPLETE' && agenda.result !== undefined && (
                                <div className={`agenda-result ${agenda.result ? 'T' : 'F'}`} />
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Meeting;
