// Module: Gu0
// Params: nw8,Iu0

var Qp1 = D1('node:path'),
  y1 = iz(),
  uh = fr(),
  ed0 = new Map([
    ['heic', 'heif'],
    ['heif', 'heif'],
    ['avif', 'avif'],
    ['jpeg', 'jpeg'],
    ['jpg', 'jpeg'],
    ['jpe', 'jpeg'],
    ['tile', 'tile'],
    ['dz', 'tile'],
    ['png', 'png'],
    ['raw', 'raw'],
    ['tiff', 'tiff'],
    ['tif', 'tiff'],
    ['webp', 'webp'],
    ['gif', 'gif'],
    ['jp2', 'jp2'],
    ['jpx', 'jp2'],
    ['j2k', 'jp2'],
    ['j2c', 'jp2'],
    ['jxl', 'jxl'],
  ]),
  _z6 = /\.(jp[2x]|j2[kc])$/i,
  Au0 = () => new Error('JP2 output requires libvips with support for OpenJPEG'),
  Bu0 = (A) => 1 << (31 - Math.clz32(Math.ceil(Math.log2(A))));
function jz6(A, B) {
  let Q;
  if (!y1.string(A)) Q = new Error('Missing output file path');
  else if (
    y1.string(this.options.input.file) &&
    Qp1.resolve(this.options.input.file) === Qp1.resolve(A)
  )
    Q = new Error('Cannot use same file for input and output');
  else if (_z6.test(Qp1.extname(A)) && !this.constructor.format.jp2k.output.file) Q = Au0();
  if (Q)
    if (y1.fn(B)) B(Q);
    else return Promise.reject(Q);
  else {
    this.options.fileOut = A;
    let I = Error();
    return this._pipeline(B, I);
  }
  return this;
}
function yz6(A, B) {
  if (y1.object(A)) this._setBooleanOption('resolveWithObject', A.resolveWithObject);
  else if (this.options.resolveWithObject) this.options.resolveWithObject = !1;
  this.options.fileOut = '';
  let Q = Error();
  return this._pipeline(y1.fn(A) ? A : B, Q);
}
function kz6() {
  return ((this.options.keepMetadata |= 1), this);
}
function xz6(A) {
  if (y1.object(A))
    for (let [B, Q] of Object.entries(A))
      if (y1.object(Q))
        for (let [I, G] of Object.entries(Q))
          if (y1.string(G)) this.options.withExif[`exif-${B.toLowerCase()}-${I}`] = G;
          else throw y1.invalidParameterError(`${B}.${I}`, 'string', G);
      else throw y1.invalidParameterError(B, 'object', Q);
  else throw y1.invalidParameterError('exif', 'object', A);
  return ((this.options.withExifMerge = !1), this.keepExif());
}
function fz6(A) {
  return (this.withExif(A), (this.options.withExifMerge = !0), this);
}
function vz6() {
  return ((this.options.keepMetadata |= 8), this);
}
function bz6(A, B) {
  if (y1.string(A)) this.options.withIccProfile = A;
  else throw y1.invalidParameterError('icc', 'string', A);
  if ((this.keepIccProfile(), y1.object(B))) {
    if (y1.defined(B.attach))
      if (y1.bool(B.attach)) {
        if (!B.attach) this.options.keepMetadata &= -9;
      } else throw y1.invalidParameterError('attach', 'boolean', B.attach);
  }
  return this;
}
function gz6() {
  return ((this.options.keepMetadata = 31), this);
}
function hz6(A) {
  if ((this.keepMetadata(), this.withIccProfile('srgb'), y1.object(A))) {
    if (y1.defined(A.orientation))
      if (y1.integer(A.orientation) && y1.inRange(A.orientation, 1, 8))
        this.options.withMetadataOrientation = A.orientation;
      else throw y1.invalidParameterError('orientation', 'integer between 1 and 8', A.orientation);
    if (y1.defined(A.density))
      if (y1.number(A.density) && A.density > 0) this.options.withMetadataDensity = A.density;
      else throw y1.invalidParameterError('density', 'positive number', A.density);
    if (y1.defined(A.icc)) this.withIccProfile(A.icc);
    if (y1.defined(A.exif)) this.withExifMerge(A.exif);
  }
  return this;
}
function mz6(A, B) {
  let Q = ed0.get((y1.object(A) && y1.string(A.id) ? A.id : A).toLowerCase());
  if (!Q) throw y1.invalidParameterError('format', `one of: ${[...ed0.keys()].join(', ')}`, A);
  return this[Q](B);
}
function dz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.jpegQuality = A.quality;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    if (y1.defined(A.progressive)) this._setBooleanOption('jpegProgressive', A.progressive);
    if (y1.defined(A.chromaSubsampling))
      if (y1.string(A.chromaSubsampling) && y1.inArray(A.chromaSubsampling, ['4:2:0', '4:4:4']))
        this.options.jpegChromaSubsampling = A.chromaSubsampling;
      else
        throw y1.invalidParameterError(
          'chromaSubsampling',
          'one of: 4:2:0, 4:4:4',
          A.chromaSubsampling
        );
    let B = y1.bool(A.optimizeCoding) ? A.optimizeCoding : A.optimiseCoding;
    if (y1.defined(B)) this._setBooleanOption('jpegOptimiseCoding', B);
    if (y1.defined(A.mozjpeg))
      if (y1.bool(A.mozjpeg)) {
        if (A.mozjpeg)
          ((this.options.jpegTrellisQuantisation = !0),
            (this.options.jpegOvershootDeringing = !0),
            (this.options.jpegOptimiseScans = !0),
            (this.options.jpegProgressive = !0),
            (this.options.jpegQuantisationTable = 3));
      } else throw y1.invalidParameterError('mozjpeg', 'boolean', A.mozjpeg);
    let Q = y1.bool(A.trellisQuantization) ? A.trellisQuantization : A.trellisQuantisation;
    if (y1.defined(Q)) this._setBooleanOption('jpegTrellisQuantisation', Q);
    if (y1.defined(A.overshootDeringing))
      this._setBooleanOption('jpegOvershootDeringing', A.overshootDeringing);
    let I = y1.bool(A.optimizeScans) ? A.optimizeScans : A.optimiseScans;
    if (y1.defined(I)) {
      if ((this._setBooleanOption('jpegOptimiseScans', I), I)) this.options.jpegProgressive = !0;
    }
    let G = y1.number(A.quantizationTable) ? A.quantizationTable : A.quantisationTable;
    if (y1.defined(G))
      if (y1.integer(G) && y1.inRange(G, 0, 8)) this.options.jpegQuantisationTable = G;
      else throw y1.invalidParameterError('quantisationTable', 'integer between 0 and 8', G);
  }
  return this._updateFormatOut('jpeg', A);
}
function uz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.progressive)) this._setBooleanOption('pngProgressive', A.progressive);
    if (y1.defined(A.compressionLevel))
      if (y1.integer(A.compressionLevel) && y1.inRange(A.compressionLevel, 0, 9))
        this.options.pngCompressionLevel = A.compressionLevel;
      else
        throw y1.invalidParameterError(
          'compressionLevel',
          'integer between 0 and 9',
          A.compressionLevel
        );
    if (y1.defined(A.adaptiveFiltering))
      this._setBooleanOption('pngAdaptiveFiltering', A.adaptiveFiltering);
    let B = A.colours || A.colors;
    if (y1.defined(B))
      if (y1.integer(B) && y1.inRange(B, 2, 256)) this.options.pngBitdepth = Bu0(B);
      else throw y1.invalidParameterError('colours', 'integer between 2 and 256', B);
    if (y1.defined(A.palette)) this._setBooleanOption('pngPalette', A.palette);
    else if ([A.quality, A.effort, A.colours, A.colors, A.dither].some(y1.defined))
      this._setBooleanOption('pngPalette', !0);
    if (this.options.pngPalette) {
      if (y1.defined(A.quality))
        if (y1.integer(A.quality) && y1.inRange(A.quality, 0, 100))
          this.options.pngQuality = A.quality;
        else throw y1.invalidParameterError('quality', 'integer between 0 and 100', A.quality);
      if (y1.defined(A.effort))
        if (y1.integer(A.effort) && y1.inRange(A.effort, 1, 10)) this.options.pngEffort = A.effort;
        else throw y1.invalidParameterError('effort', 'integer between 1 and 10', A.effort);
      if (y1.defined(A.dither))
        if (y1.number(A.dither) && y1.inRange(A.dither, 0, 1)) this.options.pngDither = A.dither;
        else throw y1.invalidParameterError('dither', 'number between 0.0 and 1.0', A.dither);
    }
  }
  return this._updateFormatOut('png', A);
}
function pz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.webpQuality = A.quality;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    if (y1.defined(A.alphaQuality))
      if (y1.integer(A.alphaQuality) && y1.inRange(A.alphaQuality, 0, 100))
        this.options.webpAlphaQuality = A.alphaQuality;
      else
        throw y1.invalidParameterError('alphaQuality', 'integer between 0 and 100', A.alphaQuality);
    if (y1.defined(A.lossless)) this._setBooleanOption('webpLossless', A.lossless);
    if (y1.defined(A.nearLossless)) this._setBooleanOption('webpNearLossless', A.nearLossless);
    if (y1.defined(A.smartSubsample))
      this._setBooleanOption('webpSmartSubsample', A.smartSubsample);
    if (y1.defined(A.preset))
      if (
        y1.string(A.preset) &&
        y1.inArray(A.preset, ['default', 'photo', 'picture', 'drawing', 'icon', 'text'])
      )
        this.options.webpPreset = A.preset;
      else
        throw y1.invalidParameterError(
          'preset',
          'one of: default, photo, picture, drawing, icon, text',
          A.preset
        );
    if (y1.defined(A.effort))
      if (y1.integer(A.effort) && y1.inRange(A.effort, 0, 6)) this.options.webpEffort = A.effort;
      else throw y1.invalidParameterError('effort', 'integer between 0 and 6', A.effort);
    if (y1.defined(A.minSize)) this._setBooleanOption('webpMinSize', A.minSize);
    if (y1.defined(A.mixed)) this._setBooleanOption('webpMixed', A.mixed);
  }
  return (Qu0(A, this.options), this._updateFormatOut('webp', A));
}
function cz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.reuse)) this._setBooleanOption('gifReuse', A.reuse);
    if (y1.defined(A.progressive)) this._setBooleanOption('gifProgressive', A.progressive);
    let B = A.colours || A.colors;
    if (y1.defined(B))
      if (y1.integer(B) && y1.inRange(B, 2, 256)) this.options.gifBitdepth = Bu0(B);
      else throw y1.invalidParameterError('colours', 'integer between 2 and 256', B);
    if (y1.defined(A.effort))
      if (y1.number(A.effort) && y1.inRange(A.effort, 1, 10)) this.options.gifEffort = A.effort;
      else throw y1.invalidParameterError('effort', 'integer between 1 and 10', A.effort);
    if (y1.defined(A.dither))
      if (y1.number(A.dither) && y1.inRange(A.dither, 0, 1)) this.options.gifDither = A.dither;
      else throw y1.invalidParameterError('dither', 'number between 0.0 and 1.0', A.dither);
    if (y1.defined(A.interFrameMaxError))
      if (y1.number(A.interFrameMaxError) && y1.inRange(A.interFrameMaxError, 0, 32))
        this.options.gifInterFrameMaxError = A.interFrameMaxError;
      else
        throw y1.invalidParameterError(
          'interFrameMaxError',
          'number between 0.0 and 32.0',
          A.interFrameMaxError
        );
    if (y1.defined(A.interPaletteMaxError))
      if (y1.number(A.interPaletteMaxError) && y1.inRange(A.interPaletteMaxError, 0, 256))
        this.options.gifInterPaletteMaxError = A.interPaletteMaxError;
      else
        throw y1.invalidParameterError(
          'interPaletteMaxError',
          'number between 0.0 and 256.0',
          A.interPaletteMaxError
        );
  }
  return (Qu0(A, this.options), this._updateFormatOut('gif', A));
}
function lz6(A) {
  if (!this.constructor.format.jp2k.output.buffer) throw Au0();
  if (y1.object(A)) {
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.jp2Quality = A.quality;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    if (y1.defined(A.lossless))
      if (y1.bool(A.lossless)) this.options.jp2Lossless = A.lossless;
      else throw y1.invalidParameterError('lossless', 'boolean', A.lossless);
    if (y1.defined(A.tileWidth))
      if (y1.integer(A.tileWidth) && y1.inRange(A.tileWidth, 1, 32768))
        this.options.jp2TileWidth = A.tileWidth;
      else throw y1.invalidParameterError('tileWidth', 'integer between 1 and 32768', A.tileWidth);
    if (y1.defined(A.tileHeight))
      if (y1.integer(A.tileHeight) && y1.inRange(A.tileHeight, 1, 32768))
        this.options.jp2TileHeight = A.tileHeight;
      else
        throw y1.invalidParameterError('tileHeight', 'integer between 1 and 32768', A.tileHeight);
    if (y1.defined(A.chromaSubsampling))
      if (y1.string(A.chromaSubsampling) && y1.inArray(A.chromaSubsampling, ['4:2:0', '4:4:4']))
        this.options.jp2ChromaSubsampling = A.chromaSubsampling;
      else
        throw y1.invalidParameterError(
          'chromaSubsampling',
          'one of: 4:2:0, 4:4:4',
          A.chromaSubsampling
        );
  }
  return this._updateFormatOut('jp2', A);
}
function Qu0(A, B) {
  if (y1.object(A) && y1.defined(A.loop))
    if (y1.integer(A.loop) && y1.inRange(A.loop, 0, 65535)) B.loop = A.loop;
    else throw y1.invalidParameterError('loop', 'integer between 0 and 65535', A.loop);
  if (y1.object(A) && y1.defined(A.delay))
    if (y1.integer(A.delay) && y1.inRange(A.delay, 0, 65535)) B.delay = [A.delay];
    else if (
      Array.isArray(A.delay) &&
      A.delay.every(y1.integer) &&
      A.delay.every((Q) => y1.inRange(Q, 0, 65535))
    )
      B.delay = A.delay;
    else
      throw y1.invalidParameterError(
        'delay',
        'integer or an array of integers between 0 and 65535',
        A.delay
      );
}
function iz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.tiffQuality = A.quality;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    if (y1.defined(A.bitdepth))
      if (y1.integer(A.bitdepth) && y1.inArray(A.bitdepth, [1, 2, 4, 8]))
        this.options.tiffBitdepth = A.bitdepth;
      else throw y1.invalidParameterError('bitdepth', '1, 2, 4 or 8', A.bitdepth);
    if (y1.defined(A.tile)) this._setBooleanOption('tiffTile', A.tile);
    if (y1.defined(A.tileWidth))
      if (y1.integer(A.tileWidth) && A.tileWidth > 0) this.options.tiffTileWidth = A.tileWidth;
      else throw y1.invalidParameterError('tileWidth', 'integer greater than zero', A.tileWidth);
    if (y1.defined(A.tileHeight))
      if (y1.integer(A.tileHeight) && A.tileHeight > 0) this.options.tiffTileHeight = A.tileHeight;
      else throw y1.invalidParameterError('tileHeight', 'integer greater than zero', A.tileHeight);
    if (y1.defined(A.miniswhite)) this._setBooleanOption('tiffMiniswhite', A.miniswhite);
    if (y1.defined(A.pyramid)) this._setBooleanOption('tiffPyramid', A.pyramid);
    if (y1.defined(A.xres))
      if (y1.number(A.xres) && A.xres > 0) this.options.tiffXres = A.xres;
      else throw y1.invalidParameterError('xres', 'number greater than zero', A.xres);
    if (y1.defined(A.yres))
      if (y1.number(A.yres) && A.yres > 0) this.options.tiffYres = A.yres;
      else throw y1.invalidParameterError('yres', 'number greater than zero', A.yres);
    if (y1.defined(A.compression))
      if (
        y1.string(A.compression) &&
        y1.inArray(A.compression, [
          'none',
          'jpeg',
          'deflate',
          'packbits',
          'ccittfax4',
          'lzw',
          'webp',
          'zstd',
          'jp2k',
        ])
      )
        this.options.tiffCompression = A.compression;
      else
        throw y1.invalidParameterError(
          'compression',
          'one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k',
          A.compression
        );
    if (y1.defined(A.predictor))
      if (y1.string(A.predictor) && y1.inArray(A.predictor, ['none', 'horizontal', 'float']))
        this.options.tiffPredictor = A.predictor;
      else
        throw y1.invalidParameterError('predictor', 'one of: none, horizontal, float', A.predictor);
    if (y1.defined(A.resolutionUnit))
      if (y1.string(A.resolutionUnit) && y1.inArray(A.resolutionUnit, ['inch', 'cm']))
        this.options.tiffResolutionUnit = A.resolutionUnit;
      else throw y1.invalidParameterError('resolutionUnit', 'one of: inch, cm', A.resolutionUnit);
  }
  return this._updateFormatOut('tiff', A);
}
function nz6(A) {
  return this.heif({ ...A, compression: 'av1' });
}
function az6(A) {
  if (y1.object(A)) {
    if (y1.string(A.compression) && y1.inArray(A.compression, ['av1', 'hevc']))
      this.options.heifCompression = A.compression;
    else throw y1.invalidParameterError('compression', 'one of: av1, hevc', A.compression);
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.heifQuality = A.quality;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    if (y1.defined(A.lossless))
      if (y1.bool(A.lossless)) this.options.heifLossless = A.lossless;
      else throw y1.invalidParameterError('lossless', 'boolean', A.lossless);
    if (y1.defined(A.effort))
      if (y1.integer(A.effort) && y1.inRange(A.effort, 0, 9)) this.options.heifEffort = A.effort;
      else throw y1.invalidParameterError('effort', 'integer between 0 and 9', A.effort);
    if (y1.defined(A.chromaSubsampling))
      if (y1.string(A.chromaSubsampling) && y1.inArray(A.chromaSubsampling, ['4:2:0', '4:4:4']))
        this.options.heifChromaSubsampling = A.chromaSubsampling;
      else
        throw y1.invalidParameterError(
          'chromaSubsampling',
          'one of: 4:2:0, 4:4:4',
          A.chromaSubsampling
        );
    if (y1.defined(A.bitdepth))
      if (y1.integer(A.bitdepth) && y1.inArray(A.bitdepth, [8, 10, 12])) {
        if (A.bitdepth !== 8 && this.constructor.versions.heif)
          throw y1.invalidParameterError('bitdepth when using prebuilt binaries', 8, A.bitdepth);
        this.options.heifBitdepth = A.bitdepth;
      } else throw y1.invalidParameterError('bitdepth', '8, 10 or 12', A.bitdepth);
  } else throw y1.invalidParameterError('options', 'Object', A);
  return this._updateFormatOut('heif', A);
}
function sz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.quality))
      if (y1.integer(A.quality) && y1.inRange(A.quality, 1, 100))
        this.options.jxlDistance =
          A.quality >= 30
            ? 0.1 + (100 - A.quality) * 0.09
            : 0.017666666666666667 * A.quality * A.quality - 1.15 * A.quality + 25;
      else throw y1.invalidParameterError('quality', 'integer between 1 and 100', A.quality);
    else if (y1.defined(A.distance))
      if (y1.number(A.distance) && y1.inRange(A.distance, 0, 15))
        this.options.jxlDistance = A.distance;
      else throw y1.invalidParameterError('distance', 'number between 0.0 and 15.0', A.distance);
    if (y1.defined(A.decodingTier))
      if (y1.integer(A.decodingTier) && y1.inRange(A.decodingTier, 0, 4))
        this.options.jxlDecodingTier = A.decodingTier;
      else
        throw y1.invalidParameterError('decodingTier', 'integer between 0 and 4', A.decodingTier);
    if (y1.defined(A.lossless))
      if (y1.bool(A.lossless)) this.options.jxlLossless = A.lossless;
      else throw y1.invalidParameterError('lossless', 'boolean', A.lossless);
    if (y1.defined(A.effort))
      if (y1.integer(A.effort) && y1.inRange(A.effort, 3, 9)) this.options.jxlEffort = A.effort;
      else throw y1.invalidParameterError('effort', 'integer between 3 and 9', A.effort);
  }
  return this._updateFormatOut('jxl', A);
}
function rz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.depth))
      if (
        y1.string(A.depth) &&
        y1.inArray(A.depth, [
          'char',
          'uchar',
          'short',
          'ushort',
          'int',
          'uint',
          'float',
          'complex',
          'double',
          'dpcomplex',
        ])
      )
        this.options.rawDepth = A.depth;
      else
        throw y1.invalidParameterError(
          'depth',
          'one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex',
          A.depth
        );
  }
  return this._updateFormatOut('raw');
}
function oz6(A) {
  if (y1.object(A)) {
    if (y1.defined(A.size))
      if (y1.integer(A.size) && y1.inRange(A.size, 1, 8192)) this.options.tileSize = A.size;
      else throw y1.invalidParameterError('size', 'integer between 1 and 8192', A.size);
    if (y1.defined(A.overlap))
      if (y1.integer(A.overlap) && y1.inRange(A.overlap, 0, 8192)) {
        if (A.overlap > this.options.tileSize)
          throw y1.invalidParameterError(
            'overlap',
            `<= size (${this.options.tileSize})`,
            A.overlap
          );
        this.options.tileOverlap = A.overlap;
      } else throw y1.invalidParameterError('overlap', 'integer between 0 and 8192', A.overlap);
    if (y1.defined(A.container))
      if (y1.string(A.container) && y1.inArray(A.container, ['fs', 'zip']))
        this.options.tileContainer = A.container;
      else throw y1.invalidParameterError('container', 'one of: fs, zip', A.container);
    if (y1.defined(A.layout))
      if (y1.string(A.layout) && y1.inArray(A.layout, ['dz', 'google', 'iiif', 'iiif3', 'zoomify']))
        this.options.tileLayout = A.layout;
      else
        throw y1.invalidParameterError(
          'layout',
          'one of: dz, google, iiif, iiif3, zoomify',
          A.layout
        );
    if (y1.defined(A.angle))
      if (y1.integer(A.angle) && !(A.angle % 90)) this.options.tileAngle = A.angle;
      else throw y1.invalidParameterError('angle', 'positive/negative multiple of 90', A.angle);
    if ((this._setBackgroundColourOption('tileBackground', A.background), y1.defined(A.depth)))
      if (y1.string(A.depth) && y1.inArray(A.depth, ['onepixel', 'onetile', 'one']))
        this.options.tileDepth = A.depth;
      else throw y1.invalidParameterError('depth', 'one of: onepixel, onetile, one', A.depth);
    if (y1.defined(A.skipBlanks))
      if (y1.integer(A.skipBlanks) && y1.inRange(A.skipBlanks, -1, 65535))
        this.options.tileSkipBlanks = A.skipBlanks;
      else
        throw y1.invalidParameterError(
          'skipBlanks',
          'integer between -1 and 255/65535',
          A.skipBlanks
        );
    else if (y1.defined(A.layout) && A.layout === 'google') this.options.tileSkipBlanks = 5;
    let B = y1.bool(A.center) ? A.center : A.centre;
    if (y1.defined(B)) this._setBooleanOption('tileCentre', B);
    if (y1.defined(A.id))
      if (y1.string(A.id)) this.options.tileId = A.id;
      else throw y1.invalidParameterError('id', 'string', A.id);
    if (y1.defined(A.basename))
      if (y1.string(A.basename)) this.options.tileBasename = A.basename;
      else throw y1.invalidParameterError('basename', 'string', A.basename);
  }
  if (y1.inArray(this.options.formatOut, ['jpeg', 'png', 'webp']))
    this.options.tileFormat = this.options.formatOut;
  else if (this.options.formatOut !== 'input')
    throw y1.invalidParameterError('format', 'one of: jpeg, png, webp', this.options.formatOut);
  return this._updateFormatOut('dz');
}
function tz6(A) {
  if (!y1.plainObject(A)) throw y1.invalidParameterError('options', 'object', A);
  if (y1.integer(A.seconds) && y1.inRange(A.seconds, 0, 3600))
    this.options.timeoutSeconds = A.seconds;
  else throw y1.invalidParameterError('seconds', 'integer between 0 and 3600', A.seconds);
  return this;
}
function ez6(A, B) {
  if (!(y1.object(B) && B.force === !1)) this.options.formatOut = A;
  return this;
}
function Aw6(A, B) {
  if (y1.bool(B)) this.options[A] = B;
  else throw y1.invalidParameterError(A, 'boolean', B);
}
function Bw6() {
  if (!this.options.streamOut) {
    this.options.streamOut = !0;
    let A = Error();
    this._pipeline(void 0, A);
  }
}
function Qw6(A, B) {
  if (typeof A === 'function') {
    if (this._isStreamInput())
      this.on('finish', () => {
        (this._flattenBufferIn(),
          uh.pipeline(this.options, (Q, I, G) => {
            if (Q) A(y1.nativeError(Q, B));
            else A(null, I, G);
          }));
      });
    else
      uh.pipeline(this.options, (Q, I, G) => {
        if (Q) A(y1.nativeError(Q, B));
        else A(null, I, G);
      });
    return this;
  } else if (this.options.streamOut) {
    if (this._isStreamInput()) {
      if (
        (this.once('finish', () => {
          (this._flattenBufferIn(),
            uh.pipeline(this.options, (Q, I, G) => {
              if (Q) this.emit('error', y1.nativeError(Q, B));
              else (this.emit('info', G), this.push(I));
              (this.push(null), this.on('end', () => this.emit('close')));
            }));
        }),
        this.streamInFinished)
      )
        this.emit('finish');
    } else
      uh.pipeline(this.options, (Q, I, G) => {
        if (Q) this.emit('error', y1.nativeError(Q, B));
        else (this.emit('info', G), this.push(I));
        (this.push(null), this.on('end', () => this.emit('close')));
      });
    return this;
  } else if (this._isStreamInput())
    return new Promise((Q, I) => {
      this.once('finish', () => {
        (this._flattenBufferIn(),
          uh.pipeline(this.options, (G, D, Z) => {
            if (G) I(y1.nativeError(G, B));
            else if (this.options.resolveWithObject) Q({ data: D, info: Z });
            else Q(D);
          }));
      });
    });
  else
    return new Promise((Q, I) => {
      uh.pipeline(this.options, (G, D, Z) => {
        if (G) I(y1.nativeError(G, B));
        else if (this.options.resolveWithObject) Q({ data: D, info: Z });
        else Q(D);
      });
    });
}
Iu0.exports = function (A) {
  Object.assign(A.prototype, {
    toFile: jz6,
    toBuffer: yz6,
    keepExif: kz6,
    withExif: xz6,
    withExifMerge: fz6,
    keepIccProfile: vz6,
    withIccProfile: bz6,
    keepMetadata: gz6,
    withMetadata: hz6,
    toFormat: mz6,
    jpeg: dz6,
    jp2: lz6,
    png: uz6,
    webp: pz6,
    tiff: iz6,
    avif: nz6,
    heif: az6,
    jxl: sz6,
    gif: cz6,
    raw: rz6,
    tile: oz6,
    timeout: tz6,
    _updateFormatOut: ez6,
    _setBooleanOption: Aw6,
    _read: Bw6,
    _pipeline: Qw6,
  });
};
