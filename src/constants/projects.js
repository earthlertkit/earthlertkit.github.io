export const PROJECTS = [
  {
    title: 'Quadrotor Reinforcement Learning',
    description: `This project is a simple introduction to reinforcement learning using MuJoCo. I began by creating my own
MuJoCo model of a quadrotor, followed by creating a custom OpenAI Gymnasium environment integrated with MuJoco to train the quadrotor. The
quadrotor is trained to hover with Proximal Policy Optimization (PPO) using Stable-Baselines3. Throughout the project, 
I tested different observation spaces, action spaces, and reward functions to optimize learning performance.`,
    video: '/quadrotor_rl.mp4',
  },
  {
    title: 'Quadrotor Simulator',
    description: `This project is a quadrotor simulator built in Python. Its purpose is to provide an environment for quickly prototyping and testing 
path-planning algorithms, control architectures, controllers, and sensor fusion techniques for autonomous flight. To increase realism, 
the simulator includes motor dynamics and simulated sensor data (GPS, IMU) which the quadrotor uses for state estimation.
The current setup uses waypoint-based navigation, a cascaded control architecture with a PID position controller in the outer loop and a
quaternion-based PD attitude controller in the inner loop, and an Extended Kalman Filter (EKF) for sensor fusion.`,
    images: [
      { src: '/quadrotor_sim_pos.png', alt: 'Quadrotor Position' },
      { src: '/quadrotor_sim_att.png', alt: 'Quadrotor Attitude' },
    ],
  },
]; 