import React from "react";
import styled from '@emotion/styled';

function Comment({ name, text }) {
    return (
        <CommentWrapper>
            <ProfileImage
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="profile_img"
            />
            <TextContainer>
                <Name>{name}</Name>
                <CommentText>{text}</CommentText>
            </TextContainer>
        </CommentWrapper>
    );
}

export default Comment;

const CommentWrapper = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #B7B7B7;
    border-radius: 6px;
    padding: 1rem; 
    margin-bottom: 0.8rem;
`;

const ProfileImage = styled.img`
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    margin-right: 0.9rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left; 
`;

const Name = styled.span`
    font-weight: bold;
    margin-bottom: 0.2rem;
`;

const CommentText = styled.span`
    color: grey;
`;
