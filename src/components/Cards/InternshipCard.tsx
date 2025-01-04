import React from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 100%; /* Ensure it takes full available width */
  max-width: 440px; /* Set a maximum width */
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  margin: 0 auto; /* Center the card in its container */
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    max-width: 90%; /* Use a percentage for smaller screens */
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #854ce6;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  object-fit: cover;
  padding: 2px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Company = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Role = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const ProjectsTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProjectDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-top: 5px;
  font-weight: 400;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const InternshipCard = ({ internship }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Card onClick={handleCardClick}>
        <Top>
          <Image src={internship.img} />
          <Body>
            <Company>{internship.company}</Company>
            <Role>{internship.role}</Role>
            <Date>{internship.date}</Date>
          </Body>
        </Top>
      </Card>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <Top>
              <Image src={internship.img} />
              <Body>
                <Company>{internship.company}</Company>
                <Role>{internship.role}</Role>
                <Date>{internship.date}</Date>
              </Body>
            </Top>

            <Tags>
              {internship.skills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
              ))}
            </Tags>

            {internship.projects.map((project, index) => (
              <div key={index}>
                <ProjectsTitle>
                  Project: {project.title}
                  <Date>{project.duration}</Date>
                </ProjectsTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
              </div>
            ))}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default InternshipCard;
