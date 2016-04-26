var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleTiming', () => {
    it('should start counting up when started', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({timerStatus: 'started'});

      expect(timer.state.count).toBe(0);

      setTimeout (() => {
        expect(timer.state.count).toBe(2);
        done();
      }, 2001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({timerStatus: 'started'});
      timer.setState({timerStatus: 'paused'});

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 2001);
    });

    it('should stop timer on timerStopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({timerStatus: 'started'});
      timer.setState({timerStatus: 'timerStopped'});

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('timerStopped');
        done();
      }, 2001);
    });

  });
});