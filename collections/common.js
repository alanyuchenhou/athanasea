/**
 * Created by ylhou on 2/16/16.
 */
Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {})],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});
Images.allow({
    insert: function (userId) {
        return !!userId;
    },
    remove: function (userId) {
        return !!userId;
    },
    update: function (userId) {
        return !!userId;
    },
    download: function () {
        return true;
    }
});
