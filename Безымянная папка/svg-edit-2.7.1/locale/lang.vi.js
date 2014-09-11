/*globals svgEditor */
svgEditor.readLang({
	lang: "vi",
	dir : "ltr",
	common: {
		"ok": "Lưu",
		"cancel": "Hủy",
		"key_backspace": "backspace", 
		"key_del": "delete", 
		"key_down": "down", 
		"key_up": "up", 
		"more_opts": "More Options",
		"url": "URL",
		"width": "Width",
		"height": "Height"
	},
	misc: {
		"powered_by": "Powered by"
	}, 
	ui: {
		"toggle_stroke_tools": "Show/hide more stroke tools",
		"palette_info": "Nhấn vào đây để thay đổi đầy màu sắc, thay đổi nhấp chuột để thay đổi màu sắc đột quỵ",
		"zoom_level": "Thay đổi mức độ phóng",
		"panel_drag": "Drag left/right to resize side panel"
	},
	properties: {
		"id": "Identify the element",
		"fill_color": "Thay đổi đầy màu sắc",
		"stroke_color": "Thay đổi màu sắc đột quỵ",
		"stroke_style": "Thay đổi phong cách đột quỵ dash",
		"stroke_width": "Thay đổi chiều rộng đột quỵ",
		"pos_x": "Change X coordinate",
		"pos_y": "Change Y coordinate",
		"linecap_butt": "Linecap: Butt",
		"linecap_round": "Linecap: Round",
		"linecap_square": "Linecap: Square",
		"linejoin_bevel": "Linejoin: Bevel",
		"linejoin_miter": "Linejoin: Miter",
		"linejoin_round": "Linejoin: Round",
		"angle": "Thay đổi góc xoay",
		"blur": "Change gaussian blur value",
		"opacity": "Thay đổi lựa chọn opacity mục",
		"circle_cx": "Thay đổi hình tròn của cx phối hợp",
		"circle_cy": "Thay đổi hình tròn của vi phối hợp",
		"circle_r": "Thay đổi bán kính của hình tròn",
		"ellipse_cx": "Thay đổi hình elip của cx phối hợp",
		"ellipse_cy": "Thay đổi hình elip của vi phối hợp",
		"ellipse_rx": "Thay đổi hình elip của x bán kính",
		"ellipse_ry": "Y Thay đổi bán kính của hình ellipse",
		"line_x1": "Thay đổi dòng của bắt đầu từ x phối hợp",
		"line_x2": "Thay đổi dòng của x kết thúc sớm nhất phối hợp",
		"line_y1": "Thay đổi dòng của bắt đầu từ y phối hợp",
		"line_y2": "Thay đổi dòng của kết thúc y phối hợp",
		"rect_height": "Thay đổi hình chữ nhật chiều cao",
		"rect_width": "Thay đổi hình chữ nhật chiều rộng",
		"corner_radius": "Thay đổi chữ nhật Corner Radius",
		"image_width": "Thay đổi hình ảnh rộng",
		"image_height": "Thay đổi hình ảnh chiều cao",
		"image_url": "Thay đổi URL",
		"node_x": "Change node's x coordinate",
		"node_y": "Change node's y coordinate",
		"seg_type": "Change Segment type",
		"straight_segments": "Straight",
		"curve_segments": "Curve",
		"text_contents": "Thay đổi nội dung văn bản",
		"font_family": "Thay đổi Font Gia đình",
		"font_size": "Thay đổi cỡ chữ",
		"bold": "Bold Text",
		"italic": "Italic Text"
	},
	tools: { 
		"main_menu": "Main Menu",
		"bkgnd_color_opac": "Thay đổi màu nền / opacity",
		"connector_no_arrow": "No arrow",
		"fitToContent": "Phù hợp với nội dung",
		"fit_to_all": "Phù hợp với tất cả nội dung",
		"fit_to_canvas": "Phù hợp với vải",
		"fit_to_layer_content": "Vào lớp phù hợp với nội dung",
		"fit_to_sel": "Phù hợp để lựa chọn",
		"align_relative_to": "Căn liên quan đến ...",
		"relativeTo": "liên quan đến:",
		"Sửa": "Sửa",
		"largest_object": "lớn nhất đối tượng",
		"selected_objects": "bầu các đối tượng",
		"smallest_object": "nhỏ đối tượng",
		"new_doc": "Hình mới",
		"open_doc": "Mở Image",
		"export_img": "Export",
		"save_doc": "Save Image",
		"import_doc": "Import SVG",
		"align_to_page": "Align Element to Page",
		"align_bottom": "Align Bottom",
		"align_center": "Căn giữa",
		"align_left": "Căn còn lại",
		"align_middle": "Căn Trung",
		"align_right": "Căn phải",
		"align_top": "Căn Top",
		"mode_select": "Chọn Công cụ",
		"mode_fhpath": "Bút chì Công cụ",
		"mode_line": "Line Tool",
		"mode_connect": "Connect two objects",
		"mode_rect": "Rectangle Tool",
		"mode_square": "Square Tool",
		"mode_fhrect": "Việt-Hand Hình chữ nhật",
		"mode_ellipse": "Ellipse",
		"mode_circle": "Circle",
		"mode_fhellipse": "Việt-Hand Ellipse",
		"mode_path": "Path Tool",
		"mode_shapelib": "Shape library",
		"mode_text": "Text Tool",
		"mode_image": "Hình Công cụ",
		"mode_zoom": "Zoom Tool",
		"mode_eyedropper": "Eye Dropper Tool",
		"no_embed": "NOTE: This image cannot be embedded. It will depend on this path to be displayed",
		"undo": "Hoàn tác",
		"redo": "Làm lại",
		"tool_source": "Sửa Nguồn",
		"wireframe_mode": "Wireframe Mode",
		"toggle_grid": "Show/Hide Grid",
		"clone": "Clone Element(s)",
		"del": "Delete Element(s)",
		"group_elements": "Nhóm Elements",
		"make_link": "Make (hyper)link",
		"set_link_url": "Set link URL (leave empty to remove)",
		"to_path": "Convert to Path",
		"reorient_path": "Reorient path",
		"ungroup": "Ungroup Elements",
		"docprops": "Document Properties",
		"imagelib": "Image Library",
		"move_bottom": "Chuyển đến đáy",
		"move_top": "Move to Top",
		"node_clone": "Clone Node",
		"node_delete": "Delete Node",
		"node_link": "Link Control Points",
		"add_subpath": "Add sub-path",
		"openclose_path": "Open/close sub-path",
		"source_save": "Lưu",
		"cut": "Cut",
		"copy": "Copy",
		"paste": "Paste",
		"paste_in_place": "Paste in Place",
		"delete": "Delete",
		"group": "Group",
		"move_front": "Bring to Front",
		"move_up": "Bring Forward",
		"move_down": "Send Backward",
		"move_back": "Send to Back"
	},
	layers: {
		"layer":"Layer",
		"layers": "Layers",
		"del": "Xoá Layer",
		"move_down": "Move Layer Down",
		"new": "New Layer",
		"rename": "Đổi tên Layer",
		"move_up": "Di chuyển Layer Up",
		"dupe": "Duplicate Layer",
		"merge_down": "Merge Down",
		"merge_all": "Merge All",
		"move_elems_to": "Move elements to:",
		"move_selected": "Move selected elements to a different layer"
	},
	config: {
		"image_props": "Image Properties",
		"doc_title": "Title",
		"doc_dims": "Canvas Dimensions",
		"included_images": "Included Images",
		"image_opt_embed": "Embed data (local files)",
		"image_opt_ref": "Use file reference",
		"editor_prefs": "Editor Preferences",
		"icon_size": "Icon size",
		"language": "Language",
		"background": "Editor Background",
		"editor_img_url": "Image URL",
		"editor_bg_note": "Note: Background will not be saved with image.",
		"icon_large": "Large",
		"icon_medium": "Medium",
		"icon_small": "Small",
		"icon_xlarge": "Extra Large",
		"select_predefined": "Chọn định sẵn:",
		"units_and_rulers": "Units & Rulers",
		"show_rulers": "Show rulers",
		"base_unit": "Base Unit:",
		"grid": "Grid",
		"snapping_onoff": "Snapping on/off",
		"snapping_stepsize": "Snapping Step-Size:",
		"grid_color": "Grid color"
	},
	shape_cats: {
		"basic": "Basic",
		"object": "Objects",
		"symbol": "Symbols",
		"arrow": "Arrows",
		"flowchart": "Flowchart",
		"animal": "Animals",
		"game": "Cards & Chess",
		"dialog_balloon": "Dialog balloons",
		"electronics": "Electronics",
		"math": "Mathematical",
		"music": "Music",
		"misc": "Miscellaneous",
		"raphael_1": "raphaeljs.com set 1",
		"raphael_2": "raphaeljs.com set 2"
	},
	imagelib: {
		"select_lib": "Select an image library",
		"show_list": "Show library list",
		"import_single": "Import single",
		"import_multi": "Import multiple",
		"open": "Open as new document"
	},
	notification: {
		"invalidAttrValGiven":"Invalid value given",
		"noContentToFitTo":"No content to fit to",
		"dupeLayerName":"There is already a layer named that!",
		"enterUniqueLayerName":"Please enter a unique layer name",
		"enterNewLayerName":"Please enter the new layer name",
		"layerHasThatName":"Layer already has that name",
		"QmoveElemsToLayer":"Move selected elements to layer '%s'?",
		"QwantToClear":"Do you want to clear the drawing?\nThis will also erase your undo history!",
		"QwantToOpen":"Do you want to open a new file?\nThis will also erase your undo history!",
		"QerrorsRevertToSource":"There were parsing errors in your SVG source.\nRevert back to original SVG source?",
		"QignoreSourceChanges":"Ignore changes made to SVG source?",
		"featNotSupported":"Feature not supported",
		"enterNewImgURL":"Enter the new image URL",
		"defsFailOnSave": "NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
		"loadingImage":"Loading image, please wait...",
		"saveFromBrowser": "Select \"Save As...\" in your browser to save this image as a %s file.",
		"noteTheseIssues": "Also note the following issues: ",
		"unsavedChanges": "There are unsaved changes.",
		"enterNewLinkURL": "Enter the new hyperlink URL",
		"errorLoadingSVG": "Error: Unable to load SVG data",
		"URLloadFail": "Unable to load from URL",
		"retrieving": "Retrieving \"%s\"..."
	},
	confirmSetStorage: {
		message: "By default and where supported, SVG-Edit can store your editor "+
		"preferences and SVG content locally on your machine so you do not "+
		"need to add these back each time you load SVG-Edit. If, for privacy "+
		"reasons, you do not wish to store this information on your machine, "+
		"you can change away from the default option below.",
		storagePrefsAndContent: "Store preferences and SVG content locally",
		storagePrefsOnly: "Only store preferences locally",
		storagePrefs: "Store preferences locally",
		storageNoPrefsOrContent: "Do not store my preferences or SVG content locally",
		storageNoPrefs: "Do not store my preferences locally",
		rememberLabel: "Remember this choice?",
		rememberTooltip: "If you choose to opt out of storage while remembering this choice, the URL will change so as to avoid asking again."
	}
});