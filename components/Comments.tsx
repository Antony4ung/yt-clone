import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCommentsOfVideoById } from "../redux/actions/commentAction";
import CommentComponent from "./CommentComponent";

const Comments = ({ channelId }: { channelId: string | string[] | undefined}) => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.commentList.comments);

  const commentProps = comments?.map(
    (comment: any) => comment.snippet.topLevelComment.snippet
  );

  useEffect(() => {
    dispatch<any>(getCommentsOfVideoById(channelId));
    // dispatch<any>(checkSubscriptionStatus(channelId))
  }, [dispatch, channelId]);

  return (
    <Container maxWidth="xl">

      

      {commentProps?.map((comment: any, i: any) => (
        <CommentComponent comment={comment} key={i} />
      ))}
    </Container>
  );
};

export default Comments;
