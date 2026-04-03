// Module: vd0
// Params: dw8,fd0

var kH6 = RF1(),
  pA = iz(),
  QR = fr(),
  xH6 = { left: 'low', center: 'centre', centre: 'centre', right: 'high' };
function xd0(A) {
  let {
    raw: B,
    density: Q,
    limitInputPixels: I,
    ignoreIcc: G,
    unlimited: D,
    sequentialRead: Z,
    failOn: Y,
    failOnError: W,
    animated: F,
    page: J,
    pages: C,
    subifd: X,
  } = A;
  return [B, Q, I, G, D, Z, Y, W, F, J, C, X].some(pA.defined)
    ? {
        raw: B,
        density: Q,
        limitInputPixels: I,
        ignoreIcc: G,
        unlimited: D,
        sequentialRead: Z,
        failOn: Y,
        failOnError: W,
        animated: F,
        page: J,
        pages: C,
        subifd: X,
      }
    : void 0;
}
function fH6(A, B, Q) {
  let I = {
    failOn: 'warning',
    limitInputPixels: Math.pow(16383, 2),
    ignoreIcc: !1,
    unlimited: !1,
    sequentialRead: !0,
  };
  if (pA.string(A)) I.file = A;
  else if (pA.buffer(A)) {
    if (A.length === 0) throw Error('Input Buffer is empty');
    I.buffer = A;
  } else if (pA.arrayBuffer(A)) {
    if (A.byteLength === 0) throw Error('Input bit Array is empty');
    I.buffer = Buffer.from(A, 0, A.byteLength);
  } else if (pA.typedArray(A)) {
    if (A.length === 0) throw Error('Input Bit Array is empty');
    I.buffer = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
  } else if (pA.plainObject(A) && !pA.defined(B)) {
    if (((B = A), xd0(B))) I.buffer = [];
  } else if (!pA.defined(A) && !pA.defined(B) && pA.object(Q) && Q.allowStream) I.buffer = [];
  else
    throw new Error(
      `Unsupported input '${A}' of type ${typeof A}${pA.defined(B) ? ` when also providing options of type ${typeof B}` : ''}`
    );
  if (pA.object(B)) {
    if (pA.defined(B.failOnError))
      if (pA.bool(B.failOnError)) I.failOn = B.failOnError ? 'warning' : 'none';
      else throw pA.invalidParameterError('failOnError', 'boolean', B.failOnError);
    if (pA.defined(B.failOn))
      if (pA.string(B.failOn) && pA.inArray(B.failOn, ['none', 'truncated', 'error', 'warning']))
        I.failOn = B.failOn;
      else
        throw pA.invalidParameterError(
          'failOn',
          'one of: none, truncated, error, warning',
          B.failOn
        );
    if (pA.defined(B.density))
      if (pA.inRange(B.density, 1, 1e5)) I.density = B.density;
      else throw pA.invalidParameterError('density', 'number between 1 and 100000', B.density);
    if (pA.defined(B.ignoreIcc))
      if (pA.bool(B.ignoreIcc)) I.ignoreIcc = B.ignoreIcc;
      else throw pA.invalidParameterError('ignoreIcc', 'boolean', B.ignoreIcc);
    if (pA.defined(B.limitInputPixels))
      if (pA.bool(B.limitInputPixels))
        I.limitInputPixels = B.limitInputPixels ? Math.pow(16383, 2) : 0;
      else if (
        pA.integer(B.limitInputPixels) &&
        pA.inRange(B.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)
      )
        I.limitInputPixels = B.limitInputPixels;
      else
        throw pA.invalidParameterError('limitInputPixels', 'positive integer', B.limitInputPixels);
    if (pA.defined(B.unlimited))
      if (pA.bool(B.unlimited)) I.unlimited = B.unlimited;
      else throw pA.invalidParameterError('unlimited', 'boolean', B.unlimited);
    if (pA.defined(B.sequentialRead))
      if (pA.bool(B.sequentialRead)) I.sequentialRead = B.sequentialRead;
      else throw pA.invalidParameterError('sequentialRead', 'boolean', B.sequentialRead);
    if (pA.defined(B.raw))
      if (
        pA.object(B.raw) &&
        pA.integer(B.raw.width) &&
        B.raw.width > 0 &&
        pA.integer(B.raw.height) &&
        B.raw.height > 0 &&
        pA.integer(B.raw.channels) &&
        pA.inRange(B.raw.channels, 1, 4)
      )
        switch (
          ((I.rawWidth = B.raw.width),
          (I.rawHeight = B.raw.height),
          (I.rawChannels = B.raw.channels),
          (I.rawPremultiplied = !!B.raw.premultiplied),
          A.constructor)
        ) {
          case Uint8Array:
          case Uint8ClampedArray:
            I.rawDepth = 'uchar';
            break;
          case Int8Array:
            I.rawDepth = 'char';
            break;
          case Uint16Array:
            I.rawDepth = 'ushort';
            break;
          case Int16Array:
            I.rawDepth = 'short';
            break;
          case Uint32Array:
            I.rawDepth = 'uint';
            break;
          case Int32Array:
            I.rawDepth = 'int';
            break;
          case Float32Array:
            I.rawDepth = 'float';
            break;
          case Float64Array:
            I.rawDepth = 'double';
            break;
          default:
            I.rawDepth = 'uchar';
            break;
        }
      else throw new Error('Expected width, height and channels for raw pixel input');
    if (pA.defined(B.animated))
      if (pA.bool(B.animated)) I.pages = B.animated ? -1 : 1;
      else throw pA.invalidParameterError('animated', 'boolean', B.animated);
    if (pA.defined(B.pages))
      if (pA.integer(B.pages) && pA.inRange(B.pages, -1, 1e5)) I.pages = B.pages;
      else throw pA.invalidParameterError('pages', 'integer between -1 and 100000', B.pages);
    if (pA.defined(B.page))
      if (pA.integer(B.page) && pA.inRange(B.page, 0, 1e5)) I.page = B.page;
      else throw pA.invalidParameterError('page', 'integer between 0 and 100000', B.page);
    if (pA.defined(B.level))
      if (pA.integer(B.level) && pA.inRange(B.level, 0, 256)) I.level = B.level;
      else throw pA.invalidParameterError('level', 'integer between 0 and 256', B.level);
    if (pA.defined(B.subifd))
      if (pA.integer(B.subifd) && pA.inRange(B.subifd, -1, 1e5)) I.subifd = B.subifd;
      else throw pA.invalidParameterError('subifd', 'integer between -1 and 100000', B.subifd);
    if (pA.defined(B.create))
      if (
        pA.object(B.create) &&
        pA.integer(B.create.width) &&
        B.create.width > 0 &&
        pA.integer(B.create.height) &&
        B.create.height > 0 &&
        pA.integer(B.create.channels)
      ) {
        if (
          ((I.createWidth = B.create.width),
          (I.createHeight = B.create.height),
          (I.createChannels = B.create.channels),
          pA.defined(B.create.noise))
        ) {
          if (!pA.object(B.create.noise)) throw new Error('Expected noise to be an object');
          if (!pA.inArray(B.create.noise.type, ['gaussian']))
            throw new Error('Only gaussian noise is supported at the moment');
          if (!pA.inRange(B.create.channels, 1, 4))
            throw pA.invalidParameterError(
              'create.channels',
              'number between 1 and 4',
              B.create.channels
            );
          if (
            ((I.createNoiseType = B.create.noise.type),
            pA.number(B.create.noise.mean) && pA.inRange(B.create.noise.mean, 0, 1e4))
          )
            I.createNoiseMean = B.create.noise.mean;
          else
            throw pA.invalidParameterError(
              'create.noise.mean',
              'number between 0 and 10000',
              B.create.noise.mean
            );
          if (pA.number(B.create.noise.sigma) && pA.inRange(B.create.noise.sigma, 0, 1e4))
            I.createNoiseSigma = B.create.noise.sigma;
          else
            throw pA.invalidParameterError(
              'create.noise.sigma',
              'number between 0 and 10000',
              B.create.noise.sigma
            );
        } else if (pA.defined(B.create.background)) {
          if (!pA.inRange(B.create.channels, 3, 4))
            throw pA.invalidParameterError(
              'create.channels',
              'number between 3 and 4',
              B.create.channels
            );
          let G = kH6(B.create.background);
          I.createBackground = [G.red(), G.green(), G.blue(), Math.round(G.alpha() * 255)];
        } else throw new Error('Expected valid noise or background to create a new input image');
        delete I.buffer;
      } else
        throw new Error('Expected valid width, height and channels to create a new input image');
    if (pA.defined(B.text))
      if (pA.object(B.text) && pA.string(B.text.text)) {
        if (((I.textValue = B.text.text), pA.defined(B.text.height) && pA.defined(B.text.dpi)))
          throw new Error('Expected only one of dpi or height');
        if (pA.defined(B.text.font))
          if (pA.string(B.text.font)) I.textFont = B.text.font;
          else throw pA.invalidParameterError('text.font', 'string', B.text.font);
        if (pA.defined(B.text.fontfile))
          if (pA.string(B.text.fontfile)) I.textFontfile = B.text.fontfile;
          else throw pA.invalidParameterError('text.fontfile', 'string', B.text.fontfile);
        if (pA.defined(B.text.width))
          if (pA.integer(B.text.width) && B.text.width > 0) I.textWidth = B.text.width;
          else throw pA.invalidParameterError('text.width', 'positive integer', B.text.width);
        if (pA.defined(B.text.height))
          if (pA.integer(B.text.height) && B.text.height > 0) I.textHeight = B.text.height;
          else throw pA.invalidParameterError('text.height', 'positive integer', B.text.height);
        if (pA.defined(B.text.align))
          if (pA.string(B.text.align) && pA.string(this.constructor.align[B.text.align]))
            I.textAlign = this.constructor.align[B.text.align];
          else throw pA.invalidParameterError('text.align', 'valid alignment', B.text.align);
        if (pA.defined(B.text.justify))
          if (pA.bool(B.text.justify)) I.textJustify = B.text.justify;
          else throw pA.invalidParameterError('text.justify', 'boolean', B.text.justify);
        if (pA.defined(B.text.dpi))
          if (pA.integer(B.text.dpi) && pA.inRange(B.text.dpi, 1, 1e6)) I.textDpi = B.text.dpi;
          else
            throw pA.invalidParameterError('text.dpi', 'integer between 1 and 1000000', B.text.dpi);
        if (pA.defined(B.text.rgba))
          if (pA.bool(B.text.rgba)) I.textRgba = B.text.rgba;
          else throw pA.invalidParameterError('text.rgba', 'bool', B.text.rgba);
        if (pA.defined(B.text.spacing))
          if (pA.integer(B.text.spacing) && pA.inRange(B.text.spacing, -1e6, 1e6))
            I.textSpacing = B.text.spacing;
          else
            throw pA.invalidParameterError(
              'text.spacing',
              'integer between -1000000 and 1000000',
              B.text.spacing
            );
        if (pA.defined(B.text.wrap))
          if (
            pA.string(B.text.wrap) &&
            pA.inArray(B.text.wrap, ['word', 'char', 'word-char', 'none'])
          )
            I.textWrap = B.text.wrap;
          else
            throw pA.invalidParameterError(
              'text.wrap',
              'one of: word, char, word-char, none',
              B.text.wrap
            );
        delete I.buffer;
      } else throw new Error('Expected a valid string to create an image with text.');
  } else if (pA.defined(B)) throw new Error('Invalid input options ' + B);
  return I;
}
function vH6(A, B, Q) {
  if (Array.isArray(this.options.input.buffer))
    if (pA.buffer(A)) {
      if (this.options.input.buffer.length === 0)
        this.on('finish', () => {
          this.streamInFinished = !0;
        });
      (this.options.input.buffer.push(A), Q());
    } else Q(new Error('Non-Buffer data on Writable Stream'));
  else Q(new Error('Unexpected data on Writable Stream'));
}
function bH6() {
  if (this._isStreamInput()) this.options.input.buffer = Buffer.concat(this.options.input.buffer);
}
function gH6() {
  return Array.isArray(this.options.input.buffer);
}
function hH6(A) {
  let B = Error();
  if (pA.fn(A)) {
    if (this._isStreamInput())
      this.on('finish', () => {
        (this._flattenBufferIn(),
          QR.metadata(this.options, (Q, I) => {
            if (Q) A(pA.nativeError(Q, B));
            else A(null, I);
          }));
      });
    else
      QR.metadata(this.options, (Q, I) => {
        if (Q) A(pA.nativeError(Q, B));
        else A(null, I);
      });
    return this;
  } else if (this._isStreamInput())
    return new Promise((Q, I) => {
      let G = () => {
        (this._flattenBufferIn(),
          QR.metadata(this.options, (D, Z) => {
            if (D) I(pA.nativeError(D, B));
            else Q(Z);
          }));
      };
      if (this.writableFinished) G();
      else this.once('finish', G);
    });
  else
    return new Promise((Q, I) => {
      QR.metadata(this.options, (G, D) => {
        if (G) I(pA.nativeError(G, B));
        else Q(D);
      });
    });
}
function mH6(A) {
  let B = Error();
  if (pA.fn(A)) {
    if (this._isStreamInput())
      this.on('finish', () => {
        (this._flattenBufferIn(),
          QR.stats(this.options, (Q, I) => {
            if (Q) A(pA.nativeError(Q, B));
            else A(null, I);
          }));
      });
    else
      QR.stats(this.options, (Q, I) => {
        if (Q) A(pA.nativeError(Q, B));
        else A(null, I);
      });
    return this;
  } else if (this._isStreamInput())
    return new Promise((Q, I) => {
      this.on('finish', function () {
        (this._flattenBufferIn(),
          QR.stats(this.options, (G, D) => {
            if (G) I(pA.nativeError(G, B));
            else Q(D);
          }));
      });
    });
  else
    return new Promise((Q, I) => {
      QR.stats(this.options, (G, D) => {
        if (G) I(pA.nativeError(G, B));
        else Q(D);
      });
    });
}
fd0.exports = function (A) {
  (Object.assign(A.prototype, {
    _inputOptionsFromObject: xd0,
    _createInputDescriptor: fH6,
    _write: vH6,
    _flattenBufferIn: bH6,
    _isStreamInput: gH6,
    metadata: hH6,
    stats: mH6,
  }),
    (A.align = xH6));
};
