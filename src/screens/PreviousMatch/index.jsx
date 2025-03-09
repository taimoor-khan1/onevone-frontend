import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';

import contextscreenbg from '../../assets/images/context-screen-bg.png';
import matchimg1 from '../../assets/images/match-img-1.png';
import matchimg2 from '../../assets/images/match-img-2.png';
import matchlistvs from '../../assets/images/match-list-vs.png';
import GlassBox from '../../components/GlassBox';
import FullScreenBG from '../../components/FullScreenBG';
import MatchListUserDetail from '../../components/MatchListUserDetail';

const matchData = [
  {
    id: 1,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 2,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 3,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 4,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 5,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 6,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 7,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
  {
    id: 8,
    player1: {
      name: 'Martin Joel',
      image: matchimg1,
      result: 'Loser',
      color: 'red',
    },
    player2: {
      name: 'Mark James',
      image: matchimg2,
      result: 'Winner',
      color: 'green',
    },
    time: '02:00 PM - 01/12/25',
  },
];

const PreviousMatch = () => {
  return (
    <DefaultLayout>
      <FullScreenBG backgroundImage={contextscreenbg}>
        <div className='col-md-12'>
          <GlassBox>
            <h2 className='login-title'>Previous Match</h2>
            <div className='row justify-content-center'>
              <div className='col-xxl-12'>
                <div className='match-list glass-bg custon-scroll'>
                  {matchData.map((match, index) => (
                    <div className='match-list-item' key={index}>
                      <MatchListUserDetail
                        image={match.player1.image}
                        name={match.player1.name}
                        status={match.player1.result}
                      />
                      <div className='match-list-vs'>
                        <div className='match-list-vs-img'>
                          <img src={matchlistvs} alt='VS Image' />
                        </div>
                        <p>{match.time}</p>
                      </div>
                      <MatchListUserDetail
                        image={match.player2.image}
                        name={match.player2.name}
                        status={match.player2.result}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default PreviousMatch;
