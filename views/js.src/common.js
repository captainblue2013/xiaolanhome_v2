/**
 * Created by lanhao on 15/5/17.
 */
(function ($) {

    $(document).ready(function () {

        //bindind

        $('#loading').on('inview.scrollspy.amui',function (event) {
            loadMore($('.xl-article').length,1000);
        });

        //action
        var loadMore = function (fromId , delay) {
            fromId = fromId || 0;
            setTimeout(function () {
                $.get('/loadMore?from='+fromId, function (data) {
                    if(data && data.code==200){
                        $('#list').append(renderList(data.data));
                        if(data.data.length<10){
                            $('#loading').fadeOut();
                        }
                    }else{
                        //error handler
                    }
                });
            },delay);
        };

        var renderList = function (list) {
            if(!list.length) return false;
            var _html = '';
            var item = null;
            for(var k in list){
                if(list[k]._id && (item = list[k]._source)){
                    _html += '<div class="xl-article">'
                        +'<span class="date am-monospace">'+item.modified+'</span>'
                        +'<a class="title am-text-lg" href="/article/'+list[k]._id+'" target="_blank">'+item.title+'</a>'
                        +renderTags(item.keywords)
                        +'</div>';
                }
            }
            return _html;
        };

        var renderTags = function (tags) {
            if(!tags.length) return '';
            var _tagsHTML = '';
            for(var k in tags){
                _tagsHTML += '<span class="tag tc-'+ (tags[k]+'').charAt(0).charCodeAt()%4 +' tc-b-'+ (tags[k]+'').charAt(0).charCodeAt()%4 +'">'+tags[k]+'</span>';
            }
            return _tagsHTML;
        };
    });

})($ || jQuery);