import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';


const viewer = new GaussianSplats3D.Viewer({
  // === KRİTİK SAFE AYARLAR ===
  gpuAcceleratedSort: false,
  sharedMemoryForWorkers: false,
  enableSIMDInSort: false,
  integerBasedSort: false,

  // === GÖRÜNTÜ ===
  sphericalHarmonicsDegree: 0,
  optimizeSplatData: false,
  freeIntermediateSplatData: false,

  // === DEBUG ===
  logLevel: GaussianSplats3D.LogLevel.Info,

  // === KAMERA ===
  initialCameraPosition: [0, 0, 3],
  initialCameraLookAt: [0, 0, 0],
});

viewer
  .addSplatScene('/goksu.ply', {
    // PLY büyük gelirse kurtarır
    scale: [0.01, 0.01, 0.01],
    rotation: [1, 0, 0, 0],
    splatAlphaRemovalThreshold: 5,
    showLoadingUI: true,
    progressiveLoad: false
  })
  .then(() => {
    console.log('Splat scene loaded');
    viewer.start();
  })
  .catch(err => {
    console.error('Splat load error:', err);
  });
