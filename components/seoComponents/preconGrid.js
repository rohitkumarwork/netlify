import styled from 'styled-components'
import GridItem from '../generic/grids/gridItem'
import {useState, useEffect} from 'react'
import {Title, Wrap} from '../../components/generic/GenericComponents'



const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledWrap = styled(Wrap) `
  width: 1100px;
  min-height: 800px;
`


const ProjectThumbnail = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;  
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  background-color: #949494;
`;


const Shadow = styled.div`
  box-shadow: inset 0px -70px 50px -40px black;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ProjectName = styled.p`
  font-size: 24px;
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
  font-weight: 500;
  color: white;
  z-index: 3;
`;

const ProjectAddress = styled.p`
  font-size: 15px;
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  font-weight: 500;
  color: white;
  z-index: 3;
`;

const ProjectSelectors = styled.div`
  position: relative;
  bottom: 9px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  justify-content: space-evenly;
  display: flex;
`;
const ProjectSelector = styled.button`
  font-size: 18px;
  color: ${props => props.active ? 'white' : '#F89E37' };
  background-color:  ${props => props.active ? '#F89E37' : 'transparent'};
  border: ${props => props.active ? 'none' : '2px solid #F89E37'};
  border-radius: 15px;
  padding:${props => props.active ? '5px 17px' : '3px 17px'};
  display: inline-flex;
  :focus {
    outline: none;
  }
`;

export default ({projects, city}) => {
  const [selectedProjectType, setSelectedProjectType] = useState("Sales")
  const [selectedProjects, setSelectedProjects] = useState(null)

  useEffect(() => {
    if (projects) {
      setSelectedProjects(projects.filter((project) => {return  project.fields.projectStatus == selectedProjectType}))
    }
  }, [selectedProjectType, projects])

  return (
    <StyledWrap>
      <Title>{`${city} New Townhome Developments`}</Title>

      <ProjectSelectors>
        {
          ["Sales","Limited Units","VIP Launch","Registration", "Coming Soon", "Limited-Release",  "Sold-Out"].map((type) => 
            <ProjectSelector  key={type} active={(type == selectedProjectType)} onClick={()=>{setSelectedProjectType(type)}}>{type}</ProjectSelector>
          )
        }
      </ProjectSelectors>

      <Grid>
        { selectedProjects &&
          selectedProjects.map((project) => {
            if (project.fields) return (
              <GridItem url={`/townhome-development/${project.fields.slug}`}>
                <ProjectThumbnail alt="No image" src={`https://mthc.s3.us-east-2.amazonaws.com/pre-con-projects/${project.fields.slug}/thumbnail.jpg`}/>
                <Shadow/>
                <ProjectName>{project.fields.projectName}</ProjectName>
                <ProjectAddress>{project.fields.address}</ProjectAddress>
              </GridItem>
            )
          })
        }
      </Grid>
    </StyledWrap>
  )
}
