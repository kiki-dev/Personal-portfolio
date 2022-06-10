import React from 'react'
import {VerticalTimeline,
VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import  SchoolIcon from '@material-ui/icons/School'; 
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css";
function Experience() {
  return (
    <div className='experience'>

    <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2010-2014"
            iconStyle={{ background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
                My Random High School, Random place , Random state</h3>
                <p>High School Diplome</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2010-2014"
            iconStyle={{ background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
                My Random High School, Random place , Random state</h3>
                <p>High School Diplome</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2010-2014"
            iconStyle={{ background: "#e9d35b", color:"#fff"}}
            icon={<WorkIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
                My Random High School, Random place , Random state</h3>
            <h4 className='vertical-timeline-element-subtitle'>
                algérie
            </h4>
            <p>High School Diplome</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date="2010-2014"
            iconStyle={{ background: "#3e497a", color:"#fff"}}
            icon={<SchoolIcon/>}
            >
            <h3 className='vertical-timeline-element-title'>
                My Random High School, Random place , Random state</h3>
                <p>High School Diplome</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  )
}

export default Experience