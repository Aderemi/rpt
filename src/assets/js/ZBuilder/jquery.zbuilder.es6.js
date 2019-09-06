var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ZBuilder;
(function (ZBuilder) {
    class BlocksContainer {
        constructor($element, onAddBlock, onDeleteBlock, onSelectBlock, onDeselectBlock, onMoveBlock, onUpdateBlock, onUpload, usePlaceholder = false) {
            this.$element = $element;
            this.onAddBlock = onAddBlock;
            this.onDeleteBlock = onDeleteBlock;
            this.onSelectBlock = onSelectBlock;
            this.onDeselectBlock = onDeselectBlock;
            this.onMoveBlock = onMoveBlock;
            this.onUpdateBlock = onUpdateBlock;
            this.onUpload = onUpload;
            this.usePlaceholder = usePlaceholder;
            this.blocks = [];
            this.isContainer = true;
            this.togglePlaceholderIfNeed();
        }
        getData(ignoreHtml) {
            var blocksData = [];
            this.blocks.forEach(block => {
                blocksData.push(block.getData(ignoreHtml));
            });
            return blocksData;
        }
        getHtml() {
            var blocksHtml = [];
            this.blocks.forEach(block => {
                blocksHtml.push(block.getHtml(true));
            });
            var blocksHtmlJoined = blocksHtml.join('\n');
            let $el = this.$element.clone(false, false).html(blocksHtmlJoined).wrap('<div></div>');
            const html = $('<div></div>').append($el).html();
            return html;
        }
        addBlock(template, data, idx, select = true) {
            let block = new ZBuilder.Block(template, false, data, block => this.deleteBlock(block), block => this.selectBlock(block), block => this.deselectBlock(block), block => this.copyBlock(block), (block, offset) => this.moveBlock(block, offset), this.onUpdateBlock, this.onUpload);
            this.insertBlock(block, idx);
            if (select) {
                block.select();
                block.scrollTo();
            }
        }
        insertBlock(block, idx) {
            idx = idx || this.blocks.length;
            if (this.selectedBlock) {
                idx = this.blocks.indexOf(this.selectedBlock) + 1;
            }
            this.blocks.splice(idx, 0, block);
            if (idx == 0) {
                this.$element.append(block.ui.$editor);
            }
            else {
                this.blocks[idx - 1].ui.$editor.after(block.ui.$editor);
            }
            this.onAddBlock(block, idx);
            block.select(null);
            this.togglePlaceholderIfNeed();
        }
        deleteBlock(block) {
            const idx = this.blocks.indexOf(block);
            this.blocks.splice(idx, 1);
            block = null;
            if (idx < this.blocks.length) {
                this.blocks[idx].select();
            }
            else if (this.blocks.length > 0) {
                this.blocks[idx - 1].select();
            }
            else {
                this.selectedBlock = null;
            }
            this.onDeleteBlock(block, idx);
            this.togglePlaceholderIfNeed();
        }
        moveBlock(block, offset) {
            const idx = this.blocks.indexOf(block);
            const new_idx = idx + offset;
            if (new_idx >= this.blocks.length || new_idx < 0)
                return;
            var $anchorBlock = this.blocks[new_idx].ui.$editor;
            if (offset > 0) {
                $anchorBlock.after(block.ui.$editor);
            }
            else if (offset < 0) {
                $anchorBlock.before(block.ui.$editor);
            }
            this.blocks.splice(idx, 1);
            this.blocks.splice(new_idx, 0, block);
            this.onMoveBlock(block, idx, new_idx);
            block.scrollTo();
        }
        copyBlock(block) {
            const idx = this.blocks.indexOf(block) + 1;
            const copy = this.addBlock(block.template, block.getData().fields, idx, true);
        }
        selectBlock(block) {
            if (this.selectedBlock === block)
                return;
            if (this.selectedBlock) {
                this.selectedBlock.deselect();
            }
            this.selectedBlock = block;
            this.onSelectBlock(block);
        }
        deselectBlock(block) {
            this.selectedBlock = null;
            this.onDeselectBlock(block);
        }
        togglePlaceholderIfNeed() {
            if (!this.usePlaceholder) {
                return;
            }
            if (this.blocks.length === 0) {
                if (!this.$placeholder) {
                    this.$placeholder = $('<i editorData-usl-placeholder="true">Click here to select this container...</i>');
                    this.$element.append(this.$placeholder);
                }
            }
            else if (this.$placeholder) {
                this.$placeholder.remove();
                this.$placeholder = null;
            }
        }
    }
    ZBuilder.BlocksContainer = BlocksContainer;
})(ZBuilder || (ZBuilder = {}));
String.prototype.uslContains = function (part) {
    return this.indexOf(part) >= 0;
};
String.prototype.uslStartsWith = function (part) {
    return this.indexOf(part) == 0;
};
String.prototype.uslTotalTrim = function () {
    return this ? this.replace(/\s\s+/g, ' ').trim() : '';
};
String.prototype.uslEqualsInvariant = function (other) {
    return this.toLowerCase() === other.toLowerCase();
};
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
var ZBuilder;
(function (ZBuilder) {
    class Common {
        static getSelectedText() {
            let text = "";
            let doc = document;
            if (window.getSelection) {
                text = window.getSelection().toString();
            }
            else if (doc.selection && doc.selection.type != "Control") {
                text = doc.selection.createRange().text;
            }
            return text;
        }
        static propsEach(obj, func) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    func(key, value);
                }
            }
        }
        static propsFilterKeys(obj, filter, payload) {
            let result = [];
            Common.propsEach(obj, (key, value) => {
                if (filter(key, value)) {
                    result.push(key);
                }
            });
            if (payload) {
                result.push(payload);
            }
            return result;
        }
    }
    ZBuilder.Common = Common;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class Editor {
        constructor($editor, options) {
            this.onError = (message, code = 0) => this.options.onError({ message: message, code: code });
            ZBuilder.Fields.BaseField.registerCommonFields();
            this.$editor = $editor;
            this.$editor.addClass(ZBuilder.Selectors.classEditor);
            this.options = new ZBuilder.EditorOptions(options);
            this.container = this.createContainer();
            Editor.UI = new ZBuilder.UI(this);
        }
        createContainer() {
            const onAdd = (block, idx) => {
                if (this.isLoaded) {
                    this.trigger(ZBuilder.Events.onBlockAdd, { block: block, idx: idx });
                    this.trigger(ZBuilder.Events.onChange, { blocks: this.getData(), html: this.getHtml() });
                }
            };
            const onDelete = (block, idx) => {
                this.trigger(ZBuilder.Events.onBlockDelete, { block: block, idx: idx });
                this.trigger(ZBuilder.Events.onChange, { blocks: this.getData(), html: this.getHtml() });
            };
            const onUpdate = (block, property, oldValue, newValue) => {
                this.trigger(ZBuilder.Events.onBlockUpdate, {
                    block: block,
                    property: property,
                    oldValue: oldValue,
                    newValue: newValue
                });
                this.trigger(ZBuilder.Events.onChange, { blocks: this.getData(), html: this.getHtml() });
            };
            return new ZBuilder.BlocksContainer(this.$editor, onAdd, onDelete, (block) => { this.trigger(ZBuilder.Events.onBlockSelect, { block: block }); }, (block) => { this.trigger(ZBuilder.Events.onBlockDeselect, { block: block }); }, (block, from, to) => {
                this.trigger(ZBuilder.Events.onBlockMove, { block: block, from: from, to: to });
                this.trigger(ZBuilder.Events.onChange, { blocks: this.getData(), html: this.getHtml() });
            }, onUpdate, this.options.onUpload);
        }
        initAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                const editor = this;
                Editor.UI.toggleToolsLoader(true);
                const templates = yield ZBuilder.Services.TemplateService.loadTemplatesAsync(editor.options.templatesUrl, editor.$editor, editor.onError);
                Editor.UI.toggleToolsLoader(false);
                Editor.UI.setTemplates(templates);
                const blocks = yield this.tryLoadInitialBlocksAsync();
                this.loadBlocks(blocks);
                this.isLoaded = true;
                this.trigger(ZBuilder.Events.onLoad, this);
            });
        }
        tryLoadInitialBlocksAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                const url = this.options.blocksUrl;
                const editor = this;
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    if (url) {
                        try {
                            const blocks = yield $.get(url);
                            resolve(blocks);
                        }
                        catch (error) {
                            editor.onError(ZBuilder.EditorStrings.errorBlocksFileNotFound(url));
                            reject(error);
                        }
                    }
                    else if (this.options.blocks) {
                        resolve(this.options.blocks);
                    }
                    else {
                        resolve(null);
                    }
                }));
            });
        }
        tryBindFormSubmit() {
            const editor = this;
            const $form = this.options.formSelector ? $(this.options.formSelector) : null;
            const $input = this.options.inputSelector ? $(this.options.inputSelector) : null;
            if (!$form || !$input || $form.length == 0 || $input.length == 0)
                return;
            $form.on('submit', () => {
                $input.val(JSON.stringify(editor.getData()));
                return true;
            });
        }
        bindFormSubmit() {
            const editor = this;
            const $form = this.options.formSelector ? $(this.options.formSelector) : null;
            const $input = this.options.inputSelector ? $(this.options.inputSelector) : null;
            if (!$form || !$input || $form.length == 0 || $input.length == 0)
                return;
            $form.on('submit', () => {
                $input.val(JSON.stringify(editor.getData()));
                return true;
            });
        }
        getData() {
            return this.container.getData(this.options.ignoreHtml);
        }
        getHtml() {
            return this.container.getHtml();
        }
        loadBlocks(blocks) {
            if (blocks && blocks.length) {
                blocks.forEach(block => {
                    let template = ZBuilder.Services.TemplateService.getTemplate(block.template);
                    if (template) {
                        this.container.addBlock(template, block.fields, null, false);
                    }
                    else {
                        const message = ZBuilder.EditorStrings.errorBlockTemplateNotFound(block.template);
                        this.onError(message);
                    }
                });
            }
        }
        addBlock(template) {
            const container = this.getContainer(this.container);
            container.addBlock(template, null, null, true);
        }
        getContainer(container) {
            if (container.selectedBlock && container.selectedBlock.isContainer()) {
                const field = container.selectedBlock.selectedField;
                if (field) {
                    return this.getContainer(field.container);
                }
            }
            return container;
        }
        trigger(event, data) {
            const editor = this;
            const $editor = this.$editor;
            $editor.trigger('usl.' + event, data);
            ZBuilder.Common.propsEach(editor.options, (key, value) => {
                if (key.uslEqualsInvariant(event) && value) {
                    value(data);
                }
            });
        }
    }
    ZBuilder.Editor = Editor;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class EditorOptions {
        constructor(options) {
            this.templatesUrl = "templates/bootstrap4.html";
            this.onError = (data) => {
                console.log(data.message);
            };
            this.compactTools = null;
            this.compactToolsWidth = 768;
            this.ignoreHtml = null;
            this.htmlToolsButtons = null;
            this.templatesUrl = options.templatesUrl || this.templatesUrl;
            this.onLoad = options.onLoad || options.onload;
            this.onChange = options.onChange;
            this.onBlockAdd = options.onBlockAdd;
            this.onBlockDelete = options.onBlockDelete;
            this.onBlockMove = options.onBlockMove;
            this.onBlockSelect = options.onBlockSelect;
            this.onBlockDeselect = options.onBlockDeselect;
            this.onBlockUpdate = options.onBlockUpdate;
            this.onError = options.onError || this.onError;
            this.onUpload = options.onUpload || null;
            this.blocksUrl = options.blocksUrl || null;
            this.blocks = options.blocks || null;
            this.compactTools = options.compactTools;
            this.ignoreHtml = options.ignoreHtml || false;
            this.htmlToolsButtons = options.htmlToolsButtons || null;
            this.formSelector = options.formSelector || null;
            this.inputSelector = options.inputSelector || null;
        }
    }
    ZBuilder.EditorOptions = EditorOptions;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class EditorStrings {
    }
    EditorStrings.errorQueryThrowsError = "Query endpoint returns with an error";
    EditorStrings.errorBlocksFileNotFound = function (url) { return `Blocks file not found. Requested file: ${url}.`; };
    EditorStrings.errorTemplatesFileNotFound = function (url) { return `Templates file not found. Requested file: ${url}.`; };
    EditorStrings.errorBlockTemplateNotFound = function (templateName) { return `Template "${templateName}" not found.`; };
    EditorStrings.errorTemplateParsing = function (name) { return `Template parsing error: ${name}.`; };
    EditorStrings.embedFieldLinkTitle = 'Link to embed media';
    EditorStrings.embedFieldLinkPlaceholder = 'Link to instagram, youtube and etc.';
    EditorStrings.imageFieldLinkTitle = 'Image link';
    EditorStrings.imageFieldLinkPlaceholder = 'http://url-to-image.png';
    EditorStrings.imageFieldUploadTitle = 'or Upload a file';
    EditorStrings.imageFieldUploadButton = 'Select file';
    EditorStrings.imageFieldAltTitle = 'Alt';
    EditorStrings.imageFieldAltPlaceholder = 'Image \'alt\' attribute value';
    EditorStrings.imageFieldUrlSubtitle = 'Link to open on image click';
    EditorStrings.htmlEditorLinkUrlTitle = 'Url';
    EditorStrings.htmlEditorLinkUrlPlaceholder = 'http://put-your-link.here';
    EditorStrings.htmlEditorLinkTitleTitle = 'Title';
    EditorStrings.htmlEditorLinkTitlePlaceholder = 'Title attribute for link';
    EditorStrings.htmlEditorLinkTargetTitle = 'Target';
    EditorStrings.htmlEditorLinkTargetBlank = 'Blank';
    EditorStrings.htmlEditorLinkTargetSelf = 'Self';
    EditorStrings.htmlEditorLinkTargetParent = 'Parent';
    EditorStrings.htmlEditorLinkTargetTop = 'Top';
    EditorStrings.buttonClose = 'close';
    EditorStrings.buttonOk = 'Ok';
    EditorStrings.buttonCancel = 'Cancel';
    EditorStrings.defaultTemplatesGroupName = 'Other templates';
    EditorStrings.queryDisplayType = 'Query Display Type';
    EditorStrings.queryLabel = 'Query';
    EditorStrings.tableDisplayPanel = 'table';
    EditorStrings.tableDisplay = 'Tabular Representation';
    EditorStrings.pieChartDisplayPanel = 'pie_chart';
    EditorStrings.pieChartDisplay = 'Pie Chart Representation';
    EditorStrings.nameFieldLinkPlaceholder = 'Enter a name for this placeholder';
    EditorStrings.nameFieldLinkTitle = 'name';
    ZBuilder.EditorStrings = EditorStrings;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class Events {
    }
    Events.onLoad = 'onLoad';
    Events.onChange = 'onChange';
    Events.onBlockAdd = 'onBlockAdd';
    Events.onBlockDelete = 'onBlockDelete';
    Events.onBlockMove = 'onBlockMove';
    Events.onBlockSelect = 'onBlockSelect';
    Events.onBlockDeselect = 'onBlockDeselect';
    Events.onBlockUpdate = 'onBlockUpdate';
    ZBuilder.Events = Events;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class HtmlLinkParams {
        constructor(href = '', title = '', target = '') {
            this.href = href;
            this.title = title;
            this.target = target;
        }
        getLinkPromptParams() {
            return [
                new ZBuilder.Prompt.PromptParameter('href', ZBuilder.EditorStrings.htmlEditorLinkUrlTitle, this.href, ZBuilder.EditorStrings.htmlEditorLinkUrlPlaceholder),
                new ZBuilder.Prompt.PromptParameter('title', ZBuilder.EditorStrings.htmlEditorLinkTitleTitle, this.title, ZBuilder.EditorStrings.htmlEditorLinkTitlePlaceholder),
                new ZBuilder.Prompt.PromptParameterOptions('target', ZBuilder.EditorStrings.htmlEditorLinkTargetTitle, [
                    ['', ''],
                    [ZBuilder.EditorStrings.htmlEditorLinkTargetBlank, '_blank'],
                    [ZBuilder.EditorStrings.htmlEditorLinkTargetSelf, '_self'],
                    [ZBuilder.EditorStrings.htmlEditorLinkTargetParent, '_parent'],
                    [ZBuilder.EditorStrings.htmlEditorLinkTargetTop, '_top'],
                ], this.target)
            ];
        }
        static getLinkFromParams(fields) {
            const href = fields.getValue('href');
            const title = fields.getValue('title');
            const target = fields.getValue('target');
            return new HtmlLinkParams(href, title, target);
        }
    }
    ZBuilder.HtmlLinkParams = HtmlLinkParams;
})(ZBuilder || (ZBuilder = {}));
(function ($) {
    $.fn.ZBuilder = function (options) {
        let editor = new ZBuilder.Editor($(this), options);
        editor.initAsync();
        return editor;
    };
}(jQuery));
var ZBuilder;
(function (ZBuilder) {
    class Block {
        constructor(template, preview, data, onDelete, onSelect, onDeselect, onCopy, onMove, onUpdate, onUpload) {
            this.template = template;
            this.onDelete = onDelete;
            this.onSelect = onSelect;
            this.onDeselect = onDeselect;
            this.onCopy = onCopy;
            this.onMove = onMove;
            this.onUpdate = onUpdate;
            this.onUpload = onUpload;
            this.fields = [];
            this.template = template;
            const block = this;
            const $block = template.$html.clone();
            block.bindFields($block, data);
            const actions = this.getActions();
            this.ui = new ZBuilder.BlockUI($block, preview, actions, () => this.select());
        }
        isContainer() {
            if (!this.selectedField)
                return false;
            return this.selectedField instanceof ZBuilder.Fields.ContainerField;
        }
        bindFields($block, data) {
            const block = this;
            const $fields = $block
                .find(ZBuilder.Selectors.selectorField)
                .addBack(ZBuilder.Selectors.selectorField);
            $fields.each((idx, elem) => {
                const onUpdate = (property, oldValue, newValue) => {
                    if (block.onUpdate) {
                        block.onUpdate(block, property, oldValue, newValue);
                    }
                };
                const onSelect = (field) => {
                    block.select(field);
                };
                let $field = $(elem);
                let field = ZBuilder.Fields.BaseField.createField($field, data, onSelect, onUpdate, block.onUpload);
                block.fields.push(field);
            });
        }
        getActions() {
            const block = this;
            let actions = [
                new ZBuilder.BlockUIAction('ellipsis-h'),
                new ZBuilder.BlockUIAction('trash-o', () => block.delete()),
                new ZBuilder.BlockUIAction('copy', () => block.clone()),
                new ZBuilder.BlockUIAction('angle-up', () => block.move(-1)),
                new ZBuilder.BlockUIAction('angle-down', () => block.move(1))
            ];
            return actions;
        }
        delete() {
            this.ui.delete();
            this.onDelete(this);
        }
        move(offset) {
            this.onMove(this, offset);
        }
        clone() {
            this.onCopy(this);
        }
        select(field) {
            if (field === this.selectedField)
                return;
            if (field === null) {
                field = this.fields[0];
            }
            if (this.selectedField) {
                this.selectedField.deselect();
            }
            this.selectedField = field;
            this.ui.toggleSelection(true);
            this.onSelect(this);
        }
        deselect() {
            this.selectedField = null;
            this.fields.forEach(f => {
                f.deselect();
            });
            this.ui.toggleSelection(false);
            this.onDeselect(this);
        }
        scrollTo() {
            var top = this.ui.$editor.offset().top - 100;
            top = top > 0 ? top : 0;
            $('html, body').animate({
                scrollTop: top
            }, 'fast');
        }
        getData(ignoreHtml) {
            let fieldsData = [];
            this.fields.forEach(field => {
                fieldsData.push(field.data);
            });
            let data = { template: this.template.name, fields: fieldsData };
            if (!ignoreHtml) {
                data['html'] = this.getHtml(true);
            }
            return data;
        }
        getHtml(trim) {
            let $html = this.template.$html.clone(false, false)
                .wrap('<div></div>')
                .parent();
            let fieldsHtml = {};
            this.fields.forEach(field => {
                const name = field.name || field.data.name;
                fieldsHtml[name] = field.getEl();
            });
            $html
                .find(ZBuilder.Selectors.selectorField)
                .addBack(ZBuilder.Selectors.selectorField)
                .each((idx, elem) => {
                let fieldData = $(elem).data().uslField;
                if (typeof fieldData === 'string') {
                    fieldData = JSON.parse(fieldData.replace(/'/g, '"'));
                }
                const name = fieldData.name;
                const $field = fieldsHtml[name];
                $(elem).replaceWith($field);
            });
            const html = $html.html();
            if (!html) {
                return null;
            }
            return trim ? html.uslTotalTrim() : html;
        }
    }
    ZBuilder.Block = Block;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class BlockAction {
        constructor(icon, action, title) {
            this.icon = icon;
            this.action = action;
            this.title = title;
        }
    }
    ZBuilder.BlockAction = BlockAction;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class BlockUI {
        constructor($block, preview, actions, onSelect) {
            this.$block = $block;
            this.onSelect = onSelect;
            if (!preview) {
                this.buildEditorUI(actions);
            }
        }
        delete() {
            this.$editor.remove();
        }
        toggleSelection(isOn) {
            this.$editor.toggleClass("usl-selected", isOn);
        }
        buildEditorUI(actions) {
            this.$tools = $('<div class="usl-block-tools usl-btn-deck"></div>');
            actions.forEach(action => {
                var $btn = this.buildButton(action);
                this.$tools.append($btn);
            });
            ZBuilder.UI.initBtnDeck(this.$tools);
            this.$editor = $('<div class="usl-block-wrapper"></div>');
            this.$editor.append(this.$tools);
            this.$editor.append(this.$block);
            this.$editor.hover(() => { this.$editor.addClass('usl-active'); }, () => { this.$editor.removeClass('usl-active'); });
            this.$block.on('click', () => this.onSelect());
        }
        buildButton(action) {
            let $el = $(`<button type="button" class="usl-btn"><i class="fa fa-${action.icon}"></i></button>`);
            if (action.action) {
                $el.on('click', (ev) => {
                    action.action();
                    ev.stopPropagation();
                    return false;
                });
            }
            return $el;
        }
    }
    ZBuilder.BlockUI = BlockUI;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class BlockUIAction {
        constructor(icon, action, title) {
            this.icon = icon;
            this.action = action;
            this.title = title;
        }
    }
    ZBuilder.BlockUIAction = BlockUIAction;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class BaseField {
            constructor($field, data, onSelect, onUpdate, onUpload) {
                this.$field = $field;
                this.data = data;
                this.onSelect = onSelect;
                this.onUpdate = onUpdate;
                this.onUpload = onUpload;
                this.bind();
            }
            static get type() {
                var name = this.name;
                name = name.replace('Field', '');
                name = name.substring(0, 1).toLowerCase() + name.substring(1);
                return name;
            }
            getSettingsEl() {
                return null;
            }
            static registerCommonFields() {
                Fields.HtmlField.registerField();
                Fields.ImageField.registerField();
                Fields.EmbedField.registerField();
                Fields.ContainerField.registerField();
                Fields.PlaceholderField.registerField();
            }
            ;
            static registerField() {
                if (this._fields.hasOwnProperty(this.type)) {
                    delete this._fields[this.type];
                }
                this._fields[this.type] = this;
            }
            static createField($field, data, onSelect, onUpdate, onUpload) {
                let fieldData = $field.data().uslField;
                if (!fieldData) {
                    throw `There is no any data in field ${$field.html()}`;
                }
                if (typeof fieldData === 'string') {
                    fieldData = JSON.parse(fieldData.replace(/'/g, '"'));
                }
                if (!fieldData.name) {
                    throw `There is no name in data of field ${$field.html()}`;
                }
                if (data) {
                    let addFieldData = {};
                    for (var idx = 0; idx < data.length; idx++) {
                        let field = data[idx];
                        if (field.name.toLowerCase() === fieldData.name.toLowerCase()) {
                            addFieldData = field;
                            break;
                        }
                    }
                    if (addFieldData) {
                        fieldData = $.extend(fieldData, addFieldData);
                    }
                }
                let type = fieldData.type;
                if (type != null) {
                    console.log(type, this._fields);
                    if (this._fields.hasOwnProperty(type)) {
                        const field = this._fields[type];
                        return new field($field, fieldData, onSelect, onUpdate, onUpload);
                    }
                    else {
                        throw `${type} field not found`;
                    }
                }
                else {
                    throw `Field type not defined in data-usl-field attribute`;
                }
            }
            bind() { }
            select() {
                this.$field.addClass(ZBuilder.Selectors.selectorFieldSelected);
                this.onSelect(this);
            }
            deselect() {
                this.$field.removeClass(ZBuilder.Selectors.selectorFieldSelected);
            }
            getEl() {
                let $el = this.$field.clone(false);
                $el.removeAttr(ZBuilder.Selectors.attrField);
                return $el;
            }
            updateProperty(prop, value, fireUpdate = true) {
                const oldValue = this.data[prop];
                if (oldValue === value)
                    return;
                this.data[prop] = value;
                if (fireUpdate) {
                    this.onUpdate(prop, oldValue, value);
                }
            }
        }
        BaseField._fields = {};
        Fields.BaseField = BaseField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class ContainerField extends Fields.BaseField {
            bind() {
                let field = this;
                let $field = this.$field;
                this.container = new ZBuilder.BlocksContainer($field, (block) => {
                    field.updateBlocks();
                }, (block) => { field.updateBlocks(); }, (block) => { this.select(); }, (block) => { }, (block) => { field.updateBlocks(); }, (block) => { field.updateBlocks(); }, field.onUpload, true);
                $field.addClass(ZBuilder.Selectors.selectorFieldContainer);
                $field
                    .on('click', (ev) => {
                    field.select();
                    ev.stopPropagation();
                    return false;
                });
            }
            updateBlocks() {
                this.updateProperty('blocks', this.container.getData(true), true);
                this.updateProperty('html', this.container.getHtml(), true);
            }
            deselect() {
                this.container.blocks.forEach(b => b.deselect());
                this.$field.removeClass(ZBuilder.Selectors.selectorFieldSelected);
            }
            getEl() {
                let html = this.container.getHtml();
                return $(html);
            }
        }
        Fields.ContainerField = ContainerField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class EmbedField extends Fields.BaseField {
            getSettingsEl() {
                let $el = $('<div style="position: absolute;width: 100%; height: 100px;;text-align: center;font-weight: bold;vertical-align: middle;background: #333;opacity: 0.2;">Change embed element link</div>');
                this.$field.before($el);
                return $el;
            }
            get settings() {
                return (field) => {
                    this.showEmbedLoaderAsync(field);
                };
            }
            bind() {
                let field = this;
                let $field = this.$field;
                $field.on('click', () => __awaiter(this, void 0, void 0, function* () {
                    this.showEmbedLoaderAsync(field);
                }));
                field.loadMedia(false);
            }
            showEmbedLoaderAsync(field) {
                return __awaiter(this, void 0, void 0, function* () {
                    const fields = yield ZBuilder.Editor.UI.modal.promptAsync(field.getPromptParams());
                    if (fields != null) {
                        const url = fields.getValue('url');
                        if (url) {
                            field.setUrl(url);
                            yield field.loadMedia(true);
                        }
                    }
                });
            }
            getPromptParams() {
                return [
                    new ZBuilder.Prompt.PromptParameter('url', ZBuilder.EditorStrings.embedFieldLinkTitle, this.data.url || 'https://google.com', ZBuilder.EditorStrings.embedFieldLinkPlaceholder)
                ];
            }
            loadMedia(fireUpdate) {
                return __awaiter(this, void 0, void 0, function* () {
                    let field = this;
                    if (!field.data || !field.data.url)
                        return;
                    const json = yield ZBuilder.Services.EmbedService.getEmbedAsync(field.data.url);
                    field.setEmbed(json, fireUpdate);
                    const $embed = $(json.html);
                    const $script = $embed.filter('script');
                    if ($script.length > 0) {
                        $script.remove();
                        var scriptSrc = $script.attr('src');
                        if (scriptSrc.uslStartsWith('//')) {
                            scriptSrc = "https:" + scriptSrc;
                            $.getScript(scriptSrc)
                                .done(script => {
                                ZBuilder.Services.EmbedService.processEmbed(json.provider_name);
                            })
                                .fail(function (err) { });
                        }
                    }
                    field.$field.empty();
                    field.$field.removeAttr('class');
                    field.$field.removeAttr('style');
                    field.$field.append($embed);
                    field.select();
                });
            }
            setEmbed(value, fireUpdate = true) {
                this.updateProperty('embed', value, fireUpdate);
            }
            setUrl(value) {
                this.updateProperty('url', value);
            }
        }
        Fields.EmbedField = EmbedField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class HtmlField extends Fields.BaseField {
            bind() {
                let field = this;
                let $field = this.$field;
                if (!$field.is(ZBuilder.Selectors.selectorContentEditable)) {
                    $field.attr(ZBuilder.Selectors.attrContentEditable, 'true');
                }
                var html = this.data.html || this.$field.html();
                this.setHtml(html, false);
                $field.html(this.data.html);
                ZBuilder.SelectionUtils.bindTextSelection($field, (rect) => {
                    ZBuilder.Editor.UI.hideGroup();
                    ZBuilder.Editor.UI.htmlTools.show(rect);
                });
                $field
                    .on('blur keyup paste input', () => {
                    this.setHtml($field.html());
                })
                    .on('paste', (e) => {
                    e.preventDefault();
                    let ev = e.originalEvent;
                    let text = ev.clipboardData.getData('text/plain');
                    document.execCommand("insertHTML", false, text);
                })
                    .on('click', (ev) => {
                    field.select();
                    ev.stopPropagation();
                    return false;
                });
            }
            setHtml(value, fireUpdate = true) {
                value = value.trim();
                if (this.$field.html() !== value) {
                    this.$field.html(value);
                }
                this.updateProperty('html', value, fireUpdate);
            }
            getEl() {
                let $el = super.getEl();
                $el.removeAttr(ZBuilder.Selectors.attrContentEditable);
                return $el;
            }
        }
        Fields.HtmlField = HtmlField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class ImageField extends Fields.BaseField {
            bind() {
                let field = this;
                let $field = this.$field;
                let data = this.data;
                this.setSrc(this.data.src, false);
                $field.on('click', () => __awaiter(this, void 0, void 0, function* () {
                    const fields = yield ZBuilder.Editor.UI.modal.promptAsync(field.getPromptParams());
                    if (fields != null) {
                        const file = fields.getValue('file');
                        const src = fields.getValue('src');
                        if (file) {
                            if (field.onUpload) {
                                field.onUpload(file, url => {
                                    field.setSrc(url);
                                    field.setFile(null);
                                });
                            }
                            else {
                                field.setFile(file);
                                field.setSrc(null);
                            }
                        }
                        else if (src) {
                            field.setSrc(src);
                            field.setFile(null);
                        }
                        const alt = fields.getValue('alt');
                        field.setAlt(alt);
                        const link = ZBuilder.HtmlLinkParams.getLinkFromParams(fields);
                        this.setLink(link);
                    }
                    field.select();
                }));
            }
            getPromptParams() {
                var params = [
                    new ZBuilder.Prompt.PromptParameter('src', ZBuilder.EditorStrings.imageFieldLinkTitle, this.data.url, ZBuilder.EditorStrings.imageFieldLinkPlaceholder),
                    new ZBuilder.Prompt.PromptParameterImage('file', ZBuilder.EditorStrings.imageFieldUploadTitle, this.data.file, ZBuilder.EditorStrings.imageFieldUploadButton),
                    new ZBuilder.Prompt.PromptParameter('alt', ZBuilder.EditorStrings.imageFieldAltTitle, this.data.alt, ZBuilder.EditorStrings.imageFieldAltPlaceholder),
                    new ZBuilder.Prompt.PromptParameter(null, ZBuilder.EditorStrings.imageFieldUrlSubtitle, null, null),
                ];
                const link = this.data.link ? this.data.link : new ZBuilder.HtmlLinkParams();
                const linkParams = link.getLinkPromptParams();
                return params.concat(linkParams);
            }
            setSrc(src, fireUpdate = true) {
                if (src) {
                    if (this.isImg) {
                        this.$field.attr('src', src);
                    }
                    else {
                        this.$field.css('background-image', `url(${src}`);
                    }
                }
                this.updateProperty('src', src, fireUpdate);
            }
            setAlt(alt) {
                this.$field.attr(this.isImg ? 'alt' : 'title', alt);
                this.updateProperty('alt', alt);
            }
            setFile(file) {
                if (file) {
                    if (this.isImg) {
                        this.$field.attr('src', file.fileContent);
                    }
                    else {
                        this.$field.css('background-image', `url(${file.fileContent})`);
                    }
                }
                this.updateProperty('file', file);
            }
            setLink(url) {
                if (url && url.href) {
                    if (!this.$link) {
                        this.$link = $(`<a href='${url.href}' title='${url.title}' target='${url.target}'></a>`);
                        this.$link.on('click', ev => {
                            ev.stopPropagation();
                            return false;
                        });
                        this.$field.wrap(this.$link);
                    }
                    else {
                        this.$link.attr(url.href);
                    }
                }
                else if (this.$link) {
                    this.$field.unwrap();
                    this.$link = null;
                    delete this.$link;
                }
                this.updateProperty('link', url);
            }
            get isImg() {
                return this._isImg = this._isImg || this.$field.prop('tagName').toLowerCase() === 'img';
            }
            getEl() {
                let $el = super.getEl();
                const { link } = this.data;
                if (link && link.href) {
                    const $link = $(`<a href='${link.href}' title='${link.title}' target='${link.target}'></a>`);
                    $link.append($el);
                    return $link;
                }
                return $el;
            }
        }
        Fields.ImageField = ImageField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Fields;
    (function (Fields) {
        class PlaceholderField extends Fields.BaseField {
            getSettingsEl() {
                let $el = $('<div style="position: absolute;width: 100%; height: 100px;;text-align: center;font-weight: bold;vertical-align: middle;background: #333;opacity: 0.2;">Change embed element link</div>');
                this.$field.before($el);
                return $el;
            }
            get settings() {
                return (field) => {
                    this.showEmbedLoaderAsync(field);
                };
            }
            bind() {
                let field = this;
                let $field = this.$field;
                $field.on('click', () => __awaiter(this, void 0, void 0, function* () {
                    this.showEmbedLoaderAsync(field);
                }));
            }
            showEmbedLoaderAsync(field) {
                return __awaiter(this, void 0, void 0, function* () {
                    const fields = yield ZBuilder.Editor.UI.modal.promptAsync(field.getPromptParams());
                    if (fields != null) {
                        const name = fields.getValue('name');
                        if (name) {
                            field.setName(name);
                        }
                    }
                });
            }
            getPromptParams() {
                const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                return [
                    new ZBuilder.Prompt.PromptParameter('name', ZBuilder.EditorStrings.nameFieldLinkTitle, this.data.query_name || 'placeholder'
                        + rand(1000, 9999), ZBuilder.EditorStrings.nameFieldLinkPlaceholder)
                ];
            }
            setName(value) {
                this.updateProperty('name', value);
            }
        }
        Fields.PlaceholderField = PlaceholderField;
    })(Fields = ZBuilder.Fields || (ZBuilder.Fields = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameter {
            constructor(key, title, value, placeholder) {
                this.key = key;
                this.title = title;
                this.placeholder = placeholder || '';
                this.value = value;
            }
            parseValue() {
                if (this.$input) {
                    this.value = this.$input.val();
                }
                this.$control = null;
                delete this._$control;
            }
            get $control() {
                if (!this._$control) {
                    this._$control =
                        $(`<div class=${this.key ? "usl-prompt-field" : "usl-prompt-subtitle"}>
                            <label class="usl-label" for="${this.key}">${this.title ? this.title : 'Select file...'}</label>
                        </div>`);
                    this.$input = this.key ? this.getEditor() : null;
                    if (this.$input != null) {
                        this._$control.append(this.$input);
                    }
                }
                return this._$control;
            }
            getEditor() {
                var value = this.value || '';
                return $(`<input type="text" id="${this.key}" class="usl-input" placeholder="${this.placeholder}" value="${this.value ? this.value : ''}">`);
            }
            set $control(value) {
                this._$control = value;
            }
        }
        Prompt.PromptParameter = PromptParameter;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameterImage extends Prompt.PromptParameter {
            constructor(key, title, value, placeholder) {
                super(key, title, value, placeholder);
                if (value) {
                    this._value = value;
                }
            }
            parseValue() {
                this.value = this._value;
                this.$control = null;
                delete this._$control;
                this._value = null;
                delete this._value;
            }
            getEditor() {
                var field = this;
                var img = this.value && this.value.fileContent ? this.value.fileContent : "";
                var $editor = $(`
                <div class='usl-image-input'>
                    <label for="${this.key}">
                        ${this.placeholder}
                    </label>                        
                    <img src="${img}"/>                    
                    <input type="file" id="${this.key}" class="usl-input" placeholder="${this.placeholder}">
                </div>
                <small class='usl-image-input-filename'></small>`);
                var $file = $('input', $editor);
                var $filePreview = $('img', $editor);
                var $fileName = $('.usl-image-input-filename', $editor);
                var value = this.value;
                if (value) {
                    $filePreview.attr('src', value.fileContent);
                    $filePreview.addClass('usl-loaded');
                    $fileName.text(value.fileInfo.name);
                }
                $file.change(function () {
                    var fileInput = this;
                    if (fileInput.files && fileInput.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (ev) {
                            let target = ev.target;
                            field._value = new Prompt.PromptParameterImageResult();
                            field._value.fileContent = target.result;
                            field._value.fileInfo = new Prompt.PromptParameterImageResultFile(fileInput.files[0]);
                            $filePreview.attr('src', field._value.fileContent);
                            $filePreview.addClass('usl-loaded');
                            $fileName.text(field._value.fileInfo.name);
                        };
                        reader.readAsDataURL(fileInput.files[0]);
                    }
                });
                return $editor;
            }
        }
        Prompt.PromptParameterImage = PromptParameterImage;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameterImageResult {
        }
        Prompt.PromptParameterImageResult = PromptParameterImageResult;
        class PromptParameterImageResultFile {
            constructor(file) {
                this.name = file.name;
                this.size = file.size;
                this.type = file.type;
                this.lastModified = file.lastModified;
                this.lastModifiedDate = file.lastModifiedDate;
            }
        }
        Prompt.PromptParameterImageResultFile = PromptParameterImageResultFile;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameterList {
            constructor(params) {
                this.params = params;
            }
            getValue(key) {
                let param = this.params.find(p => {
                    return p.key === key;
                });
                return param ? param.value : null;
            }
        }
        Prompt.PromptParameterList = PromptParameterList;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameterOption {
            constructor(title, value, selected = false) {
                this.title = title;
                this.value = value;
                this.selected = selected;
            }
        }
        Prompt.PromptParameterOption = PromptParameterOption;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Prompt;
    (function (Prompt) {
        class PromptParameterOptions extends Prompt.PromptParameter {
            constructor(key, title, options, value, placeholder) {
                super(key, title, value, placeholder);
                this.options = [];
                options.forEach(kv => {
                    this.options.push(new Prompt.PromptParameterOption(kv[0], kv[1], kv[1] == value));
                });
            }
            getEditor() {
                var options = this.options.map(opt => {
                    return `<option value="${opt.value}" ${opt.selected ? "selected" : ""}>${opt.title ? opt.title : opt.value}</option>`;
                });
                return $(`<select type="text" id="${this.key}" class="ZBuilder-input" placeholder="${this.placeholder}">${options}</select>`);
            }
        }
        Prompt.PromptParameterOptions = PromptParameterOptions;
    })(Prompt = ZBuilder.Prompt || (ZBuilder.Prompt = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Services;
    (function (Services) {
        class EmbedService {
            constructor() {
            }
            static getEmbedAsync(embedUrl) {
                const url = `https://noembed.com/embed?url=${embedUrl}`;
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    const params = { url: url, type: "get", dataType: "jsonp" };
                    try {
                        const data = yield $.ajax(params);
                        resolve(data);
                    }
                    catch (err) {
                        reject(err);
                    }
                }));
            }
            static processEmbed(provider) {
                switch (provider) {
                    case EmbedService.Instagram:
                        if (instgrm) {
                            instgrm.Embeds.process();
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        EmbedService.Instagram = 'Instagram';
        Services.EmbedService = EmbedService;
    })(Services = ZBuilder.Services || (ZBuilder.Services = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    let Services;
    (function (Services) {
        class TemplateService {
            static loadTemplatesAsync(url, $editor, onError) {
                return __awaiter(this, void 0, void 0, function* () {
                    this.templates = [];
                    const templates = this.templates;
                    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            const data = yield $.get(url);
                            const $style = $(data).filter('style');
                            if ($style && $style.length > 0) {
                                $editor.prepend($style);
                            }
                            let $data = $(`<div>${data}</div>`);
                            const $groups = $(ZBuilder.Selectors.selectorTemplateGroup, $data);
                            $groups.each((idx, el) => {
                                let $group = $(el);
                                let templates = this.getTemplates($group, onError);
                                this.templates.push(new ZBuilder.TemplateGroup($group.attr('title'), templates));
                                $group.remove();
                            });
                            let templates = this.getTemplates($data, onError);
                            let defaultGroupName = this.templates.length > 0 ? ZBuilder.EditorStrings.defaultTemplatesGroupName : '';
                            let group = new ZBuilder.TemplateGroup(defaultGroupName, templates);
                            this.templates.push(group);
                            resolve(this.templates);
                        }
                        catch (err) {
                            onError(ZBuilder.EditorStrings.errorTemplatesFileNotFound(url));
                            reject(err);
                        }
                    }));
                });
            }
            static getTemplates($el, onError) {
                let templates = [];
                const $templates = $(ZBuilder.Selectors.selectorTemplate, $el);
                $templates.each((idx, t) => {
                    let template = new ZBuilder.Template(t);
                    if (template.loaded) {
                        templates.push(template);
                    }
                    else {
                        onError(ZBuilder.EditorStrings.errorTemplateParsing(template.name));
                    }
                });
                return templates;
            }
            static getTemplate(templateName) {
                for (var gi = 0; gi < this.templates.length; gi++) {
                    const group = this.templates[gi];
                    console.log("Group: ", group);
                    for (var ti = 0; ti < group.templates.length; ti++) {
                        const template = group.templates[ti];
                        if (template.name.uslEqualsInvariant(templateName)) {
                            return template;
                        }
                    }
                }
                return null;
            }
        }
        Services.TemplateService = TemplateService;
    })(Services = ZBuilder.Services || (ZBuilder.Services = {}));
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class Template {
        constructor(el) {
            this.loaded = true;
            const previewSelector = ZBuilder.Selectors.selectorTemplatePreview;
            let $template = $(el);
            let data = $template.data();
            this.name = data.name;
            this.category = data.cactegory || [];
            this.$html = $template.contents().not(previewSelector);
            this.$preview = $(previewSelector, $template).contents();
            if (!this.$preview.length) {
                let block = new ZBuilder.Block(this, true);
                let blockEl = block.getHtml(true);
                if (blockEl === null) {
                    this.loaded = false;
                }
                else {
                    this.$preview = $(blockEl);
                }
            }
        }
        getPreview() {
            let $template = $(`<div class='${ZBuilder.Selectors.classTemplate}'></div>`);
            $template.append(this.$preview);
            return $template;
        }
    }
    ZBuilder.Template = Template;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class TemplateGroup {
        constructor(name, templates) {
            this.name = name;
            this.templates = templates;
        }
    }
    ZBuilder.TemplateGroup = TemplateGroup;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class HtmlTools {
        constructor(editor) {
            this.editor = editor;
            this.buttons = [
                { icon: 'bold', command: 'Bold', range: true, aValueArgument: null },
                { icon: 'italic', command: 'Italic', range: true, aValueArgument: null },
                { icon: 'link', command: 'CreateLink', range: true, aValueArgument: null },
                { icon: 'list-ul', command: 'insertUnorderedList', range: true, aValueArgument: null },
                { icon: 'list-ol', command: 'insertOrderedList', range: true, aValueArgument: null },
                { icon: 'undo', command: 'Undo', range: false, aValueArgument: null },
                { icon: 'repeat', command: 'Redo', range: false, aValueArgument: null },
            ];
            if (editor.options.htmlToolsButtons) {
                this.buttons = editor.options.htmlToolsButtons;
            }
            this.setControl();
        }
        setControl() {
            let $panel = $('<div class="usl-html-tools-panel"></div>');
            this.buttons.forEach(b => {
                let $btn = this.getButtonElement(b.icon, b.command, b.range, b.aValueArgument);
                $panel.append($btn);
            });
            this.$control = $('<div class="usl-html-tools usl-btn-group"></div>');
            this.$control.append($panel).hide();
            this.editor.$editor.append(this.$control);
        }
        getButtonElement(icon, command, rangeCommand = true, aValueArgument = null) {
            let $btn = $(`<button type="button" class="usl-btn"><i class="fa fa-${icon}"></i></button>`);
            $btn.on('click', () => __awaiter(this, void 0, void 0, function* () {
                let selection = window.getSelection();
                let selectionRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
                if (rangeCommand && !selectionRange)
                    return;
                if (command == 'CreateLink') {
                    const params = this.getLinkPromptParamsInternal(selection);
                    const fields = yield ZBuilder.Editor.UI.modal.promptAsync(params);
                    const link = ZBuilder.HtmlLinkParams.getLinkFromParams(fields);
                    if (link.href) {
                        document.execCommand(command, false, link.href);
                        if (link.target) {
                            selection.anchorNode.parentElement.setAttribute('target', link.target);
                        }
                        if (link.title) {
                            selection.anchorNode.parentElement.setAttribute('title', link.title);
                        }
                    }
                }
                else {
                    if (typeof (aValueArgument) === 'string') {
                        var valueArgument = aValueArgument.replace('%%SELECTION%%', selection.toString());
                    }
                    try {
                        document.execCommand(command, false, valueArgument);
                    }
                    catch (err) {
                        this.wrapSelectionToContainer(selection);
                        document.execCommand(command, false, valueArgument);
                    }
                }
                return false;
            }));
            return $btn;
        }
        wrapSelectionToContainer(selection) {
            let $wrapper = $('<div class="usl-temp-container" contenteditable="true"></div>');
            let $container = $(selection.anchorNode.parentElement);
            $wrapper.html($container.html());
            $container
                .empty()
                .append($wrapper)
                .removeAttr("contenteditable");
            const range = document.createRange();
            range.selectNodeContents($wrapper[0]);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        show(rect) {
            if (rect && rect.width > 1) {
                var editorOffset = this.editor.$editor.offset();
                var editorWidth = this.editor.$editor.width();
                var top = rect.top - editorOffset.top + $(window).scrollTop() + rect.height;
                var controlWidth = this.$control.width();
                var left = rect.left - editorOffset.left + rect.width / 2 - controlWidth / 2;
                if (left < 0) {
                    left = 0;
                }
                else if (left + controlWidth > editorWidth) {
                    left = editorWidth - controlWidth;
                }
                this.$control.css({ top: top + 'px', left: left + 'px' });
                this.$control.show();
            }
            else {
                this.$control.hide();
            }
        }
        getLinkPromptParamsInternal(selection) {
            var link;
            if (selection && selection.anchorNode && selection.anchorNode.parentNode.nodeName.uslEqualsInvariant('a')) {
                var a = $(selection.anchorNode.parentNode);
                link = new ZBuilder.HtmlLinkParams(a.attr('href'), a.attr('title'), a.attr('target'));
            }
            else {
                link = new ZBuilder.HtmlLinkParams();
            }
            return link.getLinkPromptParams();
        }
    }
    ZBuilder.HtmlTools = HtmlTools;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class Modal {
        constructor($control, $closeBtn, $form, $btns, $okBtn, $cancelBtn) {
            this.$control = $control;
            this.$closeBtn = $closeBtn;
            this.$form = $form;
            this.$btns = $btns;
            this.$okBtn = $okBtn;
            this.$cancelBtn = $cancelBtn;
            var modal = this;
            $closeBtn.on('click', function () {
                modal.hideModal();
            });
        }
        hideModal() {
            this.restoreSelection();
            this.$control.fadeOut();
        }
        showModal($html, showBtns = true) {
            this.saveSelection();
            this.$btns.toggle(showBtns);
            if ($html) {
                this.$form.append($html);
                if (!$html.is(':visible')) {
                    $html.show();
                }
            }
            this.$control.fadeIn();
        }
        promptAsync(fields) {
            const modal = this;
            return new Promise((resolve, reject) => {
                modal.$form.children().not(this.$btns).remove();
                fields.forEach(field => {
                    this.$btns.before(field.$control);
                });
                modal.$okBtn.on('click', () => {
                    fields.forEach(field => field.parseValue());
                    modal.hideModal();
                    const list = new ZBuilder.Prompt.PromptParameterList(fields);
                    resolve(list);
                });
                modal.$cancelBtn.on('click', () => {
                    modal.hideModal();
                    resolve(null);
                });
                modal.showModal();
            });
        }
        saveSelection() {
            let selection = window.getSelection();
            this.selectionRanges = [];
            for (var idx = 0; idx < selection.rangeCount; idx++) {
                this.selectionRanges.push(selection.getRangeAt(idx));
            }
        }
        restoreSelection() {
            if (!this.selectionRanges || this.selectionRanges.length == 0)
                return;
            let selection = window.getSelection();
            selection.removeAllRanges();
            this.selectionRanges.forEach(range => selection.addRange(range));
        }
    }
    ZBuilder.Modal = Modal;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class SelectionHelper {
        static getSelectedText() {
            let sel = window.getSelection();
            return sel.getRangeAt(0).toString();
        }
        static replaceSelectedText(replacement) {
            var sel, range;
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(document.createTextNode(replacement));
                }
            }
        }
    }
    ZBuilder.SelectionHelper = SelectionHelper;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class SelectionUtils {
        static bindTextSelection($el, handler) {
            if (!$el.is('[contenteditable]')) {
                return;
            }
            $el.on('mouseup', () => {
                setTimeout(() => {
                    let rect = this.getSelectionRect();
                    handler(rect);
                }, 0);
            });
            $el.on('keyup', (ev) => {
                let rect = this.getSelectionRect();
                handler(rect);
            });
        }
        static getSelectionRect() {
            let selection = window.getSelection();
            let range = selection.getRangeAt(0);
            if (range) {
                let rect = range.getBoundingClientRect();
                if (rect) {
                    return rect;
                }
            }
            return null;
        }
    }
    ZBuilder.SelectionUtils = SelectionUtils;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class Selectors {
        static attr(attr) {
            return `[${attr}]`;
        }
    }
    Selectors.attrContentEditable = 'contenteditable';
    Selectors.selectorContentEditable = 'contenteditable';
    Selectors.attrField = 'editorData-usl-field';
    Selectors.selectorField = `[${Selectors.attrField}]`;
    Selectors.classEditor = 'usl-editor';
    Selectors.classTemplate = 'usl-template';
    Selectors.selectorTemplate = `.${Selectors.classTemplate}`;
    Selectors.classTemplateGroup = 'usl-template-group';
    Selectors.selectorTemplateGroup = `.${Selectors.classTemplateGroup}`;
    Selectors.selectorTemplatePreview = '.usl-template-preview';
    Selectors.classMobile = 'ZBuilder-tools-mobile';
    Selectors.htmlToolsCommand = 'editorData-usl-doc-command';
    Selectors.htmlToolsCommandRange = 'editorData-usl-doc-command-range';
    Selectors.selectorFieldSelected = 'usl-field-selected';
    Selectors.selectorFieldContainer = 'usl-field-container';
    Selectors.selectorHtmlToolsCommand = Selectors.attr(Selectors.htmlToolsCommand);
    Selectors.selectorHtmlToolsCommandRange = Selectors.attr(Selectors.htmlToolsCommandRange);
    ZBuilder.Selectors = Selectors;
})(ZBuilder || (ZBuilder = {}));
var ZBuilder;
(function (ZBuilder) {
    class UI {
        constructor(editor) {
            this.editor = editor;
            this.editor = editor;
            this.setTools();
            this.setModal();
            this.htmlTools = new ZBuilder.HtmlTools(this.editor);
        }
        get isCompactTools() {
            var compactTools = this.editor.options.compactTools;
            if (compactTools == null) {
                return window.innerWidth < this.editor.options.compactToolsWidth;
            }
            else {
                return compactTools.valueOf();
            }
        }
        setTools() {
            this.$tools = $('<nav class="navbar navbar-expand-lg navbar-light bg-light p-0 mb-4" editorData-bricky-tools></nav>');
            this.$toolsTemplates = $('<div class="collapse navbar-collapse" id="navbarNavDropdown"></div>');
            const $nav = $('<div class="navbar-nav"></div>');
            this.$toolsTemplates = this.$toolsTemplates.append($nav);
            this.$toolsLoader = $('<div class="usl-tools-loader"><b><span style="padding-right: 5px; padding-left: 5px"> Loading... </span></b></div>');
            this.$toolsHideBtn = $('<button type="button" class="usl-tools-toggle"><div><img src="editorData:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAq1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU4c3GAAAAOHRSTlMAHEA0WLHl5iziHh3ullFQIaMMpXmnBa72dh8asEk3wTlIPD3h4zXnILi3VVqDWero7C3tXCjw6etREhUAAACaSURBVBjTjYxHFoMwDESFsS1M7zW99164/8mCgPeyyCaz0czXSAA/0gYTGlaCdmCSE2PpNHldlDsREhlJvwZIijQToQio4tQ1A1kdcl9s7e4NO7OLBcc828j+MbtiCXBK46gHHA0wtSpG7ZsNfNlRn/d4g6d8GMi77NL+faeS24Kl3lhOZ7pqgZqvqMxRn3VgqhYeTU+pIfyhD5LJCT7GrAJ7AAAAAElFTkSuQmCC"></div></button>');
            this.$tools.append([this.$toolsTemplates, this.$toolsHideBtn, this.$toolsLoader]);
            this.$toolsHideBtn.on('click', () => this.toggleTools());
            this.editor.$editor.append(this.$tools);
            if (this.isCompactTools) {
                this.$tools.addClass("usl-tools-templates-compact");
                this.toggleTools();
            }
        }
        toggleTools() {
            this.$tools.toggleClass('usl-tools-collapsed', !this.$toolsHideBtn.hasClass("usl-tools-toggle-collapsed"));
            this.$toolsHideBtn.toggleClass("usl-tools-toggle-collapsed");
        }
        setModal() {
            let $modal = $('<div class="usl usl-modal"><div class="usl-modal-placeholder"></div></div>');
            let $modalCloseBtn = $(`<div class="usl-modal-close"><a href="#">${ZBuilder.EditorStrings.buttonClose} ✖</a></div>`);
            let $modalContent = $('<div class="usl-modal-content"></div>');
            let $modalForm = $('<form></form>');
            let $modalBtns = $('<div class="usl-btns"></div>');
            let $modalOk = $(`<button type="button" class="usl-btn usl-btn-primary">${ZBuilder.EditorStrings.buttonOk}</button>`);
            let $modalCancel = $(`<button type="button" class="usl-btn">${ZBuilder.EditorStrings.buttonCancel}</button>`);
            $modalBtns.append($modalOk);
            $modalBtns.append($modalCancel);
            $modalForm.append($modalBtns);
            $modalContent.append($modalForm);
            let $placeholder = $('.usl-modal-placeholder', $modal);
            $placeholder.append($modalCloseBtn);
            $placeholder.append($modalContent);
            this.modal = new ZBuilder.Modal($modal, $modalCloseBtn, $modalForm, $modalBtns, $modalOk, $modalCancel);
            this.editor.$editor.append($modal);
        }
        toggleToolsLoader(toggle) {
            this.$toolsLoader.toggle(toggle);
        }
        setTemplates(templateGroups) {
            let editor = this.editor;
            templateGroups.forEach(group => {
                if (group.templates.length === 0)
                    return;
                let $header = $(`<div class='${ZBuilder.Selectors.classTemplateGroup}'>${group.name}</div>`);
                this.$toolsTemplates.append($header);
                let $group = $('<div style="display: none" class="group-children-xyz"></div>');
                group.templates.forEach(template => {
                    let $preview = template.getPreview();
                    $preview.attr('title', template.name);
                    $preview.on('click', (ev) => {
                        editor.addBlock(template);
                        ev.stopPropagation();
                        return false;
                    });
                    $group.append($preview);
                });
                $header.on('click', () => {
                    this.hideGroup();
                    $group.toggle();
                });
                this.$toolsTemplates.append($group);
            });
        }
        hideGroup() {
            this.$toolsTemplates.find('.group-children-xyz').hide();
        }
        static initBtnDeck($btnsDeck) {
            var $btns = $('.usl-btn', $btnsDeck);
            var $firstBtn = $btns.eq(0);
            $firstBtn.on('click', (ev) => {
                UI.toggleBtnDeck($btnsDeck);
                ev.stopPropagation();
                return false;
            });
        }
        static toggleBtnDeck($btnsDeck, isOn) {
            var $btns = $('.usl-btn', $btnsDeck);
            if (!$btns || $btns.length == 0)
                return;
            var $firstBtn = $btns.eq(0);
            var size = 32;
            var gap = size / 6;
            isOn = isOn || $btnsDeck.data().isOn || false;
            if (isOn) {
                $btnsDeck.css({ 'height': 0, 'width': 0 });
                $btns.not(':first').css({ 'opacity': 0, 'top': 0, 'left': 0 });
            }
            else {
                $btns.not(':first').each((idx, btn) => {
                    $(btn).css({ 'opacity': 1, 'left': (idx + 1) * (size + gap) });
                });
                $btnsDeck.css({ 'height': size, 'width': (size + gap) * $btns.length - gap });
            }
            $firstBtn.toggleClass('usl-btn-active', !isOn);
            $btnsDeck.data('isOn', !isOn);
        }
    }
    ZBuilder.UI = UI;
})(ZBuilder || (ZBuilder = {}));
