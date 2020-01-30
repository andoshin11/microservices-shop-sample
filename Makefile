CWD := ${CURDIR}
GO_SERVICES := productcatalogservice

.PHONY: gen-proto-all
gen-proto-all: gen-proto-go

.PHONY: gen-proto-go
gen-proto-go:
	docker run -v $(CWD)/pb:/defs namely/protoc-all -f demo.proto -l go
	@$(foreach val, $(GO_SERVICES), mkdir -p $(CWD)/src/$(val)/genproto && cp $(CWD)/pb/gen/pb-go/* $(CWD)/src/$(val)/genproto;)
