module.exports = {
    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.json())
            .then((responseText) => {
                successCallback(responseText);
            })
            .catch(function(err){
                failCallback(err);
            });
    }
};