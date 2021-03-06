importPackage(org.gearvrf);
var scene = gvrf.getMainScene();
var pointer_tex = gvrf.loadTexture("headtrackingpointer.png");
var headTracker = new GVRSceneObject(gvrf, 0.1, 0.1, pointer_tex);
headTracker.setName("headtracker");
headTracker.getTransform().setPosition(0.0, 0.0, -1.0);
headTracker.getRenderData().setDepthTest(false);
headTracker.getRenderData().setRenderingOrder(100000);
scene.getMainCameraRig().addChildObject(headTracker);
headTracker.attachComponent(new GVRPicker(gvrf, scene));
