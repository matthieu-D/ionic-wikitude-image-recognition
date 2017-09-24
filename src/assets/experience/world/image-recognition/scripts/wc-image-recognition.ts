declare var AR;

class World {

	init() {
    const targetCollectionResource = new AR.TargetCollectionResource("assets/wtc/wcdonald.wtc", {});

    const imageTracker = new AR.ImageTracker(targetCollectionResource, {});

    var wcImage = new AR.ImageResource("assets/images/wcdonald.jpg");

		var drawable = new AR.ImageDrawable(wcImage, 1, {
			translate: {
				z: 0.15
      },
      rotate: {
        x: -90
      }
		});

		var imageTrackable = new AR.ImageTrackable(imageTracker, "*", {
			drawables: {
				cam: drawable
      }
    });
	}
};

let world = new World();

world.init();
