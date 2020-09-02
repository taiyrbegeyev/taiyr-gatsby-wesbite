import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import { experience } from '../config/text'
import timelineStyles from './timeline.module.css'

const TimeLine = () => {
  return (
    <div className={timelineStyles.timelineContainer} id="timeline">
      <Timeline lineColor={'#ddd'} className={timelineStyles.timeline}>
        <TimelineItem
          key="002"
          dateText={experience.flowlity_intern.date}
          dateInnerStyle={{ background: '#ffc93c' }}
          style={{ color: '#ffc93c' }}
        >
          <h3 style={{ color: '#ffc93c' }}>{experience.flowlity_intern.title}</h3>
          <h4><a target="_blank" href={experience.flowlity_intern.subtitle}>flowlity.com</a></h4>
          <ul>
            {
              experience.flowlity_intern.description.map(key =>
                <li>{key}</li>
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={experience.pryzl_cto.date}
          dateInnerStyle={{ background: '#F55D3E' }}
          style={{ color: '#F55D3E' }}
        >
          <h3 style={{ color: '#F55D3E' }}>{experience.pryzl_cto.title}</h3>
          <h4><a target="_blank" href={experience.pryzl_cto.subtitle}>pryzl.com</a></h4>
          <ul>
            {
              experience.pryzl_cto.description.map(key =>
                <li>{key}</li>
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={experience.medikura_working_student.date}
          dateInnerStyle={{ background: '#61b8ff' }}
          style={{ color: '#61b8ff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>{experience.medikura_working_student.title}</h3>
          <h4><a target="_blank" href={experience.medikura_working_student.subtitle}>medikura.com</a></h4>
          <ul>
            {
              experience.medikura_working_student.description.map(key =>
                <li>{key}</li>
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText={experience.teaching_assistant.date}
          style={{ color: '#e86971' }}
        >
          <h3 style={{ color: '#e86971' }}>{experience.teaching_assistant.title}</h3>
          <h4>{experience.teaching_assistant.subtitle}</h4>
          <ul>
            {
              experience.teaching_assistant.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText={experience.medikura.date}
          dateInnerStyle={{ background: '#61b8ff' }}
          style={{ color: '#61b8ff' }}
        >
          <h3 style={{ color: '#61b8ff' }}>{experience.medikura.title}</h3>
          <h4><a target="_blank" href={experience.medikura.subtitle}>medikura.com</a></h4>
          <ul>
            {
              experience.medikura.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText={experience.method.date}
          dateInnerStyle={{ background: '#76bb7f' }}
          style={{ color: '#76bb7f' }}
        >
          <h3 style={{ color: '#76bb7f' }}>{experience.method.title}</h3>
          <h4><a target="_blank" href={experience.method.subtitle}>pro.method.kz</a></h4>
          <ul>
            {
              experience.method.description.map(key =>
                <li>{key}</li>  
              )
            }
          </ul>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default TimeLine
