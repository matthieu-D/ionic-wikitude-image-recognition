declare var AR;

export class World{

  public targetCollectionResource;
  public tracker;
  public worldLoaded;

  constructor(parameters) {
    console.log('test');
    alert('test');
    this.targetCollectionResource = new AR.TargetCollectionResource("assets/wtc/wcdonald.wtc", {
    });
    this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
        onTargetsLoaded: this.onTargetsLoaded
    });

    // Create overlay for page one
    var imgOne = new AR.ImageResource("assets/imageOne.png");
    var overlayOne = new AR.ImageDrawable(imgOne, 1, {
        translate: {
            x: -0.15,
        }
    });

    var pageOne = new AR.ImageTrackable(this.tracker, "*", {
        drawables: {
            cam: overlayOne
        }
    });
  }

  onTargetsLoaded() {
    console.log('targets loaded');
    alert('targets loaded');
  }
}
