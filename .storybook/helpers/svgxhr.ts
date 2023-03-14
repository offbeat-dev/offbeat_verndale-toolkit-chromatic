const svgXHR = (options: { filename: string }) => {
  let url: string | undefined = undefined;
  let baseUrl: string | undefined = undefined;

  options && options.filename ? (url = options.filename) : null;

  if (!url) return false;
  var _ajax = new XMLHttpRequest();
  var _fullPath;

  if (typeof XMLHttpRequest !== 'undefined') {
    _ajax = new XMLHttpRequest();
  }

  if (typeof baseUrl === 'undefined') {
    if (typeof baseUrl !== 'undefined') {
      baseUrl = (window as any).baseUrl;
    } else {
      baseUrl =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '');
    }
  }

  _fullPath = (baseUrl + '/' + url).replace(/([^:]\/)\/+/g, '$1');
  _ajax.open('GET', _fullPath, true);
  _ajax.onprogress = function () {};
  _ajax.onload = function () {
    if (!_ajax.responseText || _ajax.responseText.substr(0, 5) !== '<?xml') {
      throw Error('Invalid SVG Response');
    }
    if (_ajax.status < 200 || _ajax.status >= 300) {
      return;
    }
    var div = document.createElement('div');
    div.innerHTML = _ajax.responseText;
    div.style.maxBlockSize = '0';

    domready(() => {
      document.body.insertBefore(div, document.body.childNodes[0]);
    });
  };
  _ajax.send();
};

const domready = callback => {
  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.scroll)
  ) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

export default svgXHR;
