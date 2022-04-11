import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <p>
        Simply-workout helps you track and improve your workout performance
        using the incremental gains philosophy. Every time you perform an
        exercise you will be tasked with a new challenge, if you're successful
        the next challenge will be just a bit harder by a percentage. This will
        lead to long-term consistent growth, always challenging your muscles
        while reducing the risk of injuries.
      </p>
      <p>
        To simplify your start we've set each challenge to a starting value of
        10, whether the challenge is in <strong>kg</strong> or{" "}
        <strong>repetitions</strong>. If the default challenge proves too easy
        or too hard, simply adjust your current level by a few clicks on success
        or fail.
      </p>
      <p>
        For your workout you can either choose to perform single exercises,
        select a routine for the day or a program that you wish to follow.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
`;

export default Home;
